import { NextRequest, NextResponse } from 'next/server';
import { generateWeeklyReport, sendReportEmail } from '@/lib/weekly-report';

/**
 * GET /api/reports/weekly
 * Generate and return the weekly assessment report
 * In production, would be triggered by a cron job
 */
export async function GET(request: NextRequest) {
  try {
    // Verify request is from authorized source (cron job, internal service, etc.)
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Mock data - in production, query from database
    const mockData = {
      started: 127,
      completed: 98,
      leads: 98,
      avg_score: 72,
      low_scores: 28,
      medium_scores: 45,
      high_scores: 25,
      top_pillar: 'Financial Clarity',
      weakest_pillar: 'Transition Readiness',
      avg_time: 42,
      email_opens: 156,
      playbook_downloads: 67,
      consultation_bookings: 12,
    };

    const report = generateWeeklyReport(mockData);

    // In production, send emails to all subscribers
    // const recipients = await getReportSubscribers();
    // for (const email of recipients) {
    //   await sendReportEmail(email, report);
    // }

    return NextResponse.json({
      success: true,
      report,
      message: 'Weekly report generated successfully',
    });
  } catch (error) {
    console.error('Error generating weekly report:', error);
    return NextResponse.json(
      { error: 'Failed to generate report' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/reports/weekly
 * Manually trigger report generation and send to specified email
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, data } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email address required' },
        { status: 400 }
      );
    }

    // Mock data if not provided
    const reportData = data || {
      started: 127,
      completed: 98,
      leads: 98,
      avg_score: 72,
      low_scores: 28,
      medium_scores: 45,
      high_scores: 25,
      top_pillar: 'Financial Clarity',
      weakest_pillar: 'Transition Readiness',
      avg_time: 42,
      email_opens: 156,
      playbook_downloads: 67,
      consultation_bookings: 12,
    };

    const report = generateWeeklyReport(reportData);

    // Send email
    await sendReportEmail(email, report);

    return NextResponse.json({
      success: true,
      report,
      message: `Report sent to ${email}`,
    });
  } catch (error) {
    console.error('Error sending report:', error);
    return NextResponse.json(
      { error: 'Failed to send report' },
      { status: 500 }
    );
  }
}
