import { NextRequest, NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import AuditReportPDF from '@/lib/pdf/AuditReportPDF';
import { FullAuditResults } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const results: FullAuditResults = await request.json();

    // Generate PDF stream
    const stream = await renderToStream(<AuditReportPDF results={results} />);

    // Convert stream to buffer
    const chunks: Uint8Array[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().split('T')[0];
    const domain = new URL(results.url).hostname.replace('www.', '');
    const filename = `audit-report-${domain}-${timestamp}.pdf`;

    // Return PDF as response
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate PDF report',
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
