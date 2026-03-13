import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const event = await request.json();
    
    // In production, save to database
    // For now, just log and return success
    console.log('Analytics event tracked:', event);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 400 }
    );
  }
}
