import { NextRequest, NextResponse } from 'next/server';
import { getAuditsByUrl, getAllAudits } from '@/lib/db/database';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url');
  const limit = parseInt(searchParams.get('limit') || '10');

  try {
    if (url) {
      const audits = await getAuditsByUrl(url, limit);
      return NextResponse.json(audits);
    } else {
      const audits = await getAllAudits(limit);
      return NextResponse.json(audits);
    }
  } catch (error) {
    console.error('Error fetching history:', error);
    return NextResponse.json(
      { error: 'Failed to fetch audit history' },
      { status: 500 }
    );
  }
}
