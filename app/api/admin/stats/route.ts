import { NextRequest, NextResponse } from 'next/server';

// Mock data for now (in production, query from database)
const mockStats = {
  totalBetaSignups: 24,
  totalContactSubmissions: 18,
  totalFeedback: 7,
  conversionRate: 12.5,
};

export async function GET(request: NextRequest) {
  // Check if user is authenticated (verify cookie)
  const token = request.cookies.get('admin_token');
  
  if (!token) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  return NextResponse.json(mockStats);
}
