import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email/emailService';
import { supabaseAdmin } from '@/lib/supabase/client';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.projectType || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get IP address and user agent for tracking
    const ip_address = request.headers.get('x-forwarded-for')?.split(',')[0] ||
                       request.headers.get('x-real-ip') ||
                       'unknown';
    const user_agent = request.headers.get('user-agent') || 'unknown';

    // Save to Supabase database
    const { data: submissionData, error: dbError } = await supabaseAdmin
      .from('contact_submissions')
      .insert([
        {
          name: data.name,
          email: data.email.toLowerCase(),
          phone: data.phone || null,
          company: data.company || null,
          project_type: data.projectType,
          budget: data.budget || null,
          message: data.message,
          status: 'new',
          ip_address,
          user_agent
        }
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      // Continue even if database save fails - still send emails
    }

    // Generate email content
    const emailHtml = generateContactEmail(data);

    // Send email to your team
    const emailSent = await sendEmail({
      to: process.env.CONTACT_EMAIL || 'hello@scalefront.io',
      subject: `New Contact Form Submission: ${data.projectType}`,
      html: emailHtml,
    });

    // Send confirmation email to customer
    const confirmationSent = await sendEmail({
      to: data.email,
      subject: 'Thank you for contacting ScaleFront',
      html: generateConfirmationEmail(data),
    });

    if (emailSent) {
      return NextResponse.json(
        {
          success: true,
          message: 'Contact form submitted successfully',
          submissionId: submissionData?.id
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function generateContactEmail(data: ContactFormData): string {
  const projectTypeLabels: Record<string, string> = {
    'custom-app': 'Custom Shopify App',
    'headless-commerce': 'Headless Commerce',
    'theme-development': 'Theme Development',
    'performance-optimization': 'Performance Optimization',
    'conversion-optimization': 'Conversion Optimization',
    'shopify-plus-migration': 'Shopify Plus Migration',
    'mobile-app': 'Mobile App Development',
    'integration': 'Third-party Integration',
    'consulting': 'Consulting & Audit',
    'other': 'Other',
  };

  const budgetLabels: Record<string, string> = {
    'under-3': 'Under ₹3 lakh',
    '3-6': '₹3-6 lakh',
    '6-12': '₹6-12 lakh',
    '12-25': '₹12-25 lakh',
    '25-plus': '₹25 lakh+',
    'not-sure': 'Not sure yet',
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
      </div>

      <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
        <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #667eea; margin-top: 0; font-size: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h2>

          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563; display: inline-block; width: 120px;">Name:</strong>
            <span style="color: #1f2937;">${data.name}</span>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563; display: inline-block; width: 120px;">Email:</strong>
            <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
          </div>

          ${data.phone ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563; display: inline-block; width: 120px;">Phone:</strong>
            <a href="tel:${data.phone}" style="color: #667eea; text-decoration: none;">${data.phone}</a>
          </div>
          ` : ''}

          ${data.company ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563; display: inline-block; width: 120px;">Company:</strong>
            <span style="color: #1f2937;">${data.company}</span>
          </div>
          ` : ''}
        </div>

        <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #667eea; margin-top: 0; font-size: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Project Details</h2>

          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563; display: inline-block; width: 120px;">Project Type:</strong>
            <span style="color: #1f2937;">${projectTypeLabels[data.projectType] || data.projectType}</span>
          </div>

          ${data.budget ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563; display: inline-block; width: 120px;">Budget:</strong>
            <span style="color: #1f2937;">${budgetLabels[data.budget] || data.budget}</span>
          </div>
          ` : ''}

          <div style="margin-top: 20px;">
            <strong style="color: #4b5563; display: block; margin-bottom: 10px;">Message:</strong>
            <div style="background: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #667eea; white-space: pre-wrap; color: #1f2937;">${data.message}</div>
          </div>
        </div>

        <div style="text-align: center; padding-top: 20px;">
          <a href="mailto:${data.email}" style="display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600;">Reply to ${data.name}</a>
        </div>
      </div>

      <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
        <p>Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
      </div>
    </body>
    </html>
  `;
}

function generateConfirmationEmail(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting ScaleFront</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Thank You for Reaching Out!</h1>
      </div>

      <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
        <div style="background: white; padding: 25px; border-radius: 8px;">
          <p style="font-size: 16px; color: #1f2937; margin-top: 0;">Hi ${data.name},</p>

          <p style="font-size: 16px; color: #1f2937;">Thank you for contacting ScaleFront! We've received your inquiry about <strong>${data.projectType}</strong> and our team is reviewing your requirements.</p>

          <p style="font-size: 16px; color: #1f2937;">Here's what happens next:</p>

          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <div style="margin-bottom: 15px;">
              <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <div style="background: #667eea; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">1</div>
                <strong style="color: #1f2937;">Review (Within 24 hours)</strong>
              </div>
              <p style="margin: 0 0 0 45px; color: #6b7280; font-size: 14px;">Our team will review your project requirements and prepare an initial assessment.</p>
            </div>

            <div style="margin-bottom: 15px;">
              <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <div style="background: #667eea; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">2</div>
                <strong style="color: #1f2937;">Initial Response</strong>
              </div>
              <p style="margin: 0 0 0 45px; color: #6b7280; font-size: 14px;">We'll reach out to schedule a consultation call to discuss your project in detail.</p>
            </div>

            <div>
              <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <div style="background: #667eea; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">3</div>
                <strong style="color: #1f2937;">Proposal & Next Steps</strong>
              </div>
              <p style="margin: 0 0 0 45px; color: #6b7280; font-size: 14px;">After our call, we'll send you a detailed proposal with timeline and pricing.</p>
            </div>
          </div>

          <p style="font-size: 16px; color: #1f2937;">In the meantime, feel free to:</p>

          <ul style="color: #1f2937;">
            <li>Check out our <a href="https://scalefront.io/blog" style="color: #667eea; text-decoration: none;">blog</a> for Shopify insights</li>
            <li>Try our <a href="https://scalefront.io/earn" style="color: #667eea; text-decoration: none;">free store audit tool</a></li>
            <li>View our <a href="https://scalefront.io/pricing" style="color: #667eea; text-decoration: none;">pricing plans</a></li>
          </ul>

          <p style="font-size: 16px; color: #1f2937;">If you have any urgent questions, you can reach us directly:</p>

          <div style="background: #f0f4ff; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 5px 0; color: #1f2937;"><strong>Email:</strong> <a href="mailto:hello@scalefront.io" style="color: #667eea; text-decoration: none;">hello@scalefront.io</a></p>
            <p style="margin: 5px 0; color: #1f2937;"><strong>WhatsApp:</strong> <a href="https://wa.me/919650296375" style="color: #667eea; text-decoration: none;">+91-965-029-6375</a></p>
          </div>

          <p style="font-size: 16px; color: #1f2937; margin-bottom: 0;">Looking forward to working with you!</p>

          <p style="font-size: 16px; color: #1f2937; margin-top: 20px;">
            Best regards,<br>
            <strong>The ScaleFront Team</strong>
          </p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
        <p>© ${new Date().getFullYear()} ScaleFront. Expert Shopify Development.</p>
        <p style="margin-top: 10px;">
          <a href="https://scalefront.io" style="color: #667eea; text-decoration: none; margin: 0 10px;">Website</a> |
          <a href="https://scalefront.io/services" style="color: #667eea; text-decoration: none; margin: 0 10px;">Services</a> |
          <a href="https://scalefront.io/blog" style="color: #667eea; text-decoration: none; margin: 0 10px;">Blog</a>
        </p>
      </div>
    </body>
    </html>
  `;
}
