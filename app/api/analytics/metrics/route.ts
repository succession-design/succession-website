import { NextRequest, NextResponse } from 'next/server';
import { mockAnalyticsData } from '@/lib/analytics-tracker';

export async function GET(request: NextRequest) {
  // Check if user is authenticated
  const token = request.cookies.get('admin_token');
  
  if (!token) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  // Return analytics metrics
  return NextResponse.json(mockAnalyticsData);
}
