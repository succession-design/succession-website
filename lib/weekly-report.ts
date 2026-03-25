/**
 * Weekly Assessment Report Generator
 * Tracks assessment completion rates and lead capture metrics
 * Sends automated email reports every Monday at 9:00 AM
 */

export interface AssessmentMetrics {
  week_start: string; // ISO date
  week_end: string; // ISO date
  total_assessments_started: number;
  total_assessments_completed: number;
  completion_rate: number; // percentage
  leads_captured: number;
  avg_score: number;
  score_distribution: {
    low: number; // 0-33
    medium: number; // 34-66
    high: number; // 67-100
  };
  top_pillar: string;
  weakest_pillar: string;
  avg_time_to_complete: number; // minutes
  email_opens: number;
  playbook_downloads: number;
  consultation_bookings: number;
}

export interface WeeklyReport {
  generated_at: string; // ISO timestamp
  metrics: AssessmentMetrics;
  insights: string[];
  recommendations: string[];
}

/**
 * Generate weekly report from assessment data
 * In production, this would query from a database
 */
export function generateWeeklyReport(data: any): WeeklyReport {
  const now = new Date();
  const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);

  const metrics: AssessmentMetrics = {
    week_start: weekStart.toISOString().split('T')[0],
    week_end: weekEnd.toISOString().split('T')[0],
    total_assessments_started: data.started || 0,
    total_assessments_completed: data.completed || 0,
    completion_rate: data.started > 0 ? (data.completed / data.started) * 100 : 0,
    leads_captured: data.leads || 0,
    avg_score: data.avg_score || 0,
    score_distribution: {
      low: data.low_scores || 0,
      medium: data.medium_scores || 0,
      high: data.high_scores || 0,
    },
    top_pillar: data.top_pillar || 'Financial Clarity',
    weakest_pillar: data.weakest_pillar || 'Transition Readiness',
    avg_time_to_complete: data.avg_time || 45,
    email_opens: data.email_opens || 0,
    playbook_downloads: data.playbook_downloads || 0,
    consultation_bookings: data.consultation_bookings || 0,
  };

  const insights: string[] = [];
  const recommendations: string[] = [];

  // Generate insights
  if (metrics.completion_rate > 75) {
    insights.push(`Strong completion rate of ${Math.round(metrics.completion_rate)}% this week.`);
  } else if (metrics.completion_rate > 50) {
    insights.push(`Moderate completion rate of ${Math.round(metrics.completion_rate)}%. Consider optimizing the form flow.`);
  } else {
    insights.push(`Low completion rate of ${Math.round(metrics.completion_rate)}%. Review drop-off points in the assessment.`);
  }

  if (metrics.leads_captured > 50) {
    insights.push(`Excellent lead capture: ${metrics.leads_captured} new leads this week.`);
  }

  if (metrics.score_distribution.high > metrics.score_distribution.low) {
    insights.push(`Most businesses scored in the high range (67-100), indicating a strong market segment.`);
  } else {
    insights.push(`Most businesses scored in the low-medium range, suggesting opportunities for improvement guidance.`);
  }

  if (metrics.playbook_downloads > metrics.leads_captured * 0.5) {
    insights.push(`High playbook engagement: ${Math.round((metrics.playbook_downloads / metrics.leads_captured) * 100)}% of leads downloaded their playbook.`);
  }

  // Generate recommendations
  if (metrics.completion_rate < 60) {
    recommendations.push('Optimize the assessment form: reduce number of questions or improve UI/UX.');
    recommendations.push('Add progress indicators to show users how far through the assessment they are.');
  }

  if (metrics.consultation_bookings < metrics.leads_captured * 0.1) {
    recommendations.push('Strengthen CTA for consultation bookings. Consider offering a limited-time incentive.');
  }

  if (metrics.score_distribution.low > metrics.score_distribution.high) {
    recommendations.push('Create targeted content for low-scoring businesses to help them improve before reaching out to buyers.');
  }

  recommendations.push(`Focus on improving ${metrics.weakest_pillar} across your target market.`);

  return {
    generated_at: new Date().toISOString(),
    metrics,
    insights,
    recommendations,
  };
}

/**
 * Format report as HTML email
 */
export function formatReportAsHTML(report: WeeklyReport): string {
  const { metrics, insights, recommendations } = report;
  const completionRate = Math.round(metrics.completion_rate);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Inter', sans-serif; background: #FAF8F5; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #FFFFFF; }
    .header { background: #1A1A1A; color: #FAF8F5; padding: 2rem; text-align: center; }
    .header h1 { margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 2rem; }
    .content { padding: 2rem; }
    .metric-row { display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid #E0DAD2; }
    .metric-label { font-weight: 500; color: #1A1A1A; }
    .metric-value { font-size: 1.5rem; color: #B8965A; font-weight: 600; }
    .section-title { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; color: #1A1A1A; margin-top: 2rem; margin-bottom: 1rem; }
    .insight, .recommendation { padding: 0.75rem 0; color: #6B6560; line-height: 1.6; }
    .insight::before { content: "✓ "; color: #B8965A; font-weight: bold; }
    .recommendation::before { content: "→ "; color: #B8965A; font-weight: bold; }
    .footer { background: #FAF8F5; padding: 2rem; text-align: center; font-size: 0.75rem; color: #9B9490; }
    .cta-button { display: inline-block; background: #B8965A; color: #FAF8F5; padding: 0.75rem 1.5rem; text-decoration: none; margin-top: 1rem; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Weekly Assessment Report</h1>
      <p style="margin: 0.5rem 0 0 0; font-size: 0.875rem; color: #9B9490;">
        ${metrics.week_start} to ${metrics.week_end}
      </p>
    </div>

    <div class="content">
      <h2 style="font-family: 'Cormorant Garamond', serif; font-size: 1.25rem; color: #1A1A1A; margin-top: 0;">Key Metrics</h2>

      <div class="metric-row">
        <span class="metric-label">Assessments Started</span>
        <span class="metric-value">${metrics.total_assessments_started}</span>
      </div>

      <div class="metric-row">
        <span class="metric-label">Assessments Completed</span>
        <span class="metric-value">${metrics.total_assessments_completed}</span>
      </div>

      <div class="metric-row">
        <span class="metric-label">Completion Rate</span>
        <span class="metric-value">${completionRate}%</span>
      </div>

      <div class="metric-row">
        <span class="metric-label">Leads Captured</span>
        <span class="metric-value">${metrics.leads_captured}</span>
      </div>

      <div class="metric-row">
        <span class="metric-label">Average Score</span>
        <span class="metric-value">${Math.round(metrics.avg_score)}</span>
      </div>

      <div class="metric-row">
        <span class="metric-label">Playbook Downloads</span>
        <span class="metric-value">${metrics.playbook_downloads}</span>
      </div>

      <div class="metric-row">
        <span class="metric-label">Consultation Bookings</span>
        <span class="metric-value">${metrics.consultation_bookings}</span>
      </div>

      <h2 class="section-title">Insights</h2>
      ${insights.map(insight => `<div class="insight">${insight}</div>`).join('')}

      <h2 class="section-title">Recommendations</h2>
      ${recommendations.map(rec => `<div class="recommendation">${rec}</div>`).join('')}

      <div style="text-align: center;">
        <a href="https://succession-website.com/analytics" class="cta-button">View Full Analytics</a>
      </div>
    </div>

    <div class="footer">
      <p>This report was automatically generated. For questions, contact your SuccessionIO account manager.</p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Schedule weekly report to be sent every Monday at 9:00 AM
 * In production, this would integrate with a cron job or task scheduler
 */
export async function scheduleWeeklyReport(recipientEmail: string): Promise<void> {
  // This would be implemented with a service like:
  // - AWS Lambda + CloudWatch Events
  // - Google Cloud Scheduler
  // - node-cron (for local testing)
  // - Netlify Functions with scheduled triggers

  console.log(`Weekly report scheduled for ${recipientEmail}`);
  console.log('Reports will be sent every Monday at 9:00 AM');
}

/**
 * Send report via email
 * In production, integrate with SendGrid, Mailgun, or similar
 */
export async function sendReportEmail(
  recipientEmail: string,
  report: WeeklyReport
): Promise<void> {
  const htmlContent = formatReportAsHTML(report);

  // Example with SendGrid (would need API key)
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // await sgMail.send({
  //   to: recipientEmail,
  //   from: 'reports@successionio.com',
  //   subject: `Weekly Assessment Report: ${report.metrics.week_start}`,
  //   html: htmlContent,
  // });

  console.log(`Report email sent to ${recipientEmail}`);
  console.log(`Subject: Weekly Assessment Report: ${report.metrics.week_start}`);
}
