// Analytics event tracking system
export interface AnalyticsEvent {
  id: string;
  eventType: 'page_view' | 'button_click' | 'form_submit' | 'signup' | 'contact';
  page: string;
  source?: string; // utm_source or referrer
  timestamp: Date;
  sessionId: string;
  metadata?: Record<string, any>;
}

export interface AnalyticsMetrics {
  totalPageViews: number;
  totalSignups: number;
  totalContacts: number;
  conversionRate: number;
  signupsBySource: Record<string, number>;
  signupsByPage: Record<string, number>;
  dailySignups: Array<{ date: string; count: number }>;
  topPages: Array<{ page: string; views: number }>;
  conversionFunnel: {
    landing: number;
    features: number;
    pricing: number;
    contact: number;
    signup: number;
  };
}

// Mock analytics data for demonstration
export const mockAnalyticsData: AnalyticsMetrics = {
  totalPageViews: 1247,
  totalSignups: 24,
  totalContacts: 18,
  conversionRate: 1.92,
  signupsBySource: {
    'direct': 8,
    'google': 6,
    'referral': 5,
    'social': 3,
    'email': 2,
  },
  signupsByPage: {
    '/': 10,
    '/brokers': 8,
    '/beta': 4,
    '/contact': 2,
  },
  dailySignups: [
    { date: '2026-03-06', count: 2 },
    { date: '2026-03-07', count: 3 },
    { date: '2026-03-08', count: 1 },
    { date: '2026-03-09', count: 4 },
    { date: '2026-03-10', count: 3 },
    { date: '2026-03-11', count: 5 },
    { date: '2026-03-12', count: 6 },
  ],
  topPages: [
    { page: '/', views: 450 },
    { page: '/brokers', views: 320 },
    { page: '/beta', views: 280 },
    { page: '/contact', views: 197 },
  ],
  conversionFunnel: {
    landing: 1247,
    features: 890,
    pricing: 620,
    contact: 42,
    signup: 24,
  },
};

// Track analytics event
export async function trackEvent(event: Omit<AnalyticsEvent, 'id' | 'timestamp'>) {
  try {
    const response = await fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...event,
        timestamp: new Date(),
      }),
    });
    return response.ok;
  } catch (error) {
    console.error('Failed to track analytics event:', error);
    return false;
  }
}

// Get analytics metrics
export async function getAnalyticsMetrics(): Promise<AnalyticsMetrics> {
  try {
    const response = await fetch('/api/analytics/metrics');
    if (!response.ok) throw new Error('Failed to fetch metrics');
    return response.json();
  } catch (error) {
    console.error('Failed to get analytics metrics:', error);
    return mockAnalyticsData;
  }
}
