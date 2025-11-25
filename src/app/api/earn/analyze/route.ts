import { NextRequest, NextResponse } from 'next/server';
import { seoAuditor } from '@/lib/auditors/seoAuditor';
import { performanceAuditor } from '@/lib/auditors/performanceAuditor';
import { accessibilityAuditor } from '@/lib/auditors/accessibilityAuditor';
import { securityAuditor } from '@/lib/auditors/securityAuditor';
import { shopifyAuditor } from '@/lib/auditors/shopifyAuditor';
import { salesOptimizationAuditor } from '@/lib/auditors/salesOptimizationAuditor';
import { fetchPage, isValidUrl } from '@/lib/utils/fetchPage';
import { calculateOverallScore, generateRecommendations } from '@/lib/utils/scoring';
import { saveAudit } from '@/lib/db/database';
import { storeLead } from '@/lib/db/leadStorage';
import { nanoid } from 'nanoid';

export async function POST(request: NextRequest) {
  try {
    const { url, userId, email, phone } = await request.json();

    // Validate URL
    if (!url || !isValidUrl(url)) {
      return NextResponse.json(
        { error: 'Invalid URL provided. Please enter a valid HTTP or HTTPS URL.' },
        { status: 400 }
      );
    }

    // Email and phone are now optional - only validate if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Please enter a valid email address' },
          { status: 400 }
        );
      }
    }

    if (phone) {
      const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
      if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        return NextResponse.json(
          { error: 'Please enter a valid phone number' },
          { status: 400 }
        );
      }
    }

    // Fetch page content
    let pageData;
    try {
      pageData = await fetchPage(url);
    } catch (error) {
      return NextResponse.json(
        {
          error: `Failed to fetch the website: ${error instanceof Error ? error.message : 'Unknown error'}`,
        },
        { status: 500 }
      );
    }

    const { html, headers, responseTime } = pageData;

    // Store lead information only if email and phone are provided
    if (email && phone) {
      try {
        await storeLead({
          url,
          email,
          phone,
          timestamp: new Date().toISOString()
        });
      } catch (leadError) {
        console.error('Failed to store lead:', leadError);
        // Don't fail the audit if lead storage fails
      }
    }

    // Run all auditors in parallel
    const [seo, performance, accessibility, security, shopify, salesOptimization] = await Promise.all([
      seoAuditor.analyze(html, url),
      performanceAuditor.analyze(html, headers, responseTime),
      accessibilityAuditor.analyze(html),
      securityAuditor.analyze(headers, url),
      shopifyAuditor.analyze(html, url),
      salesOptimizationAuditor.analyze(html, url),
    ]);

    // Calculate overall score
    const overallScore = calculateOverallScore({
      seo,
      performance,
      accessibility,
      security,
      shopify,
      salesOptimization,
    });

    const results = {
      url,
      timestamp: new Date().toISOString(),
      overallScore,
      seo,
      performance,
      accessibility,
      security,
      shopify,
      salesOptimization,
      recommendations: generateRecommendations({
        seo,
        performance,
        accessibility,
        security,
        shopify,
        salesOptimization,
      }),
    };

    // Save audit to database
    const auditId = nanoid();
    await saveAudit({
      id: auditId,
      userId,
      url,
      timestamp: results.timestamp,
      results,
      overallScore,
    });

    // Send email if requested
    if (email) {
      try {
        const { sendAuditResults } = await import('@/lib/email/emailService');
        await sendAuditResults(email, results);
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json({ ...results, id: auditId });
  } catch (error) {
    console.error('Audit error:', error);
    return NextResponse.json(
      {
        error: 'An unexpected error occurred while analyzing the website. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// Add OPTIONS handler for CORS if needed
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
