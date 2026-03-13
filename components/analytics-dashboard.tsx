'use client';

import { useEffect, useState } from 'react';
import { AnalyticsMetrics, getAnalyticsMetrics } from '@/lib/analytics-tracker';

export function AnalyticsDashboard() {
  const [metrics, setMetrics] = useState<AnalyticsMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMetrics = async () => {
      const data = await getAnalyticsMetrics();
      setMetrics(data);
      setLoading(false);
    };

    loadMetrics();
  }, []);

  if (loading || !metrics) {
    return <div className="text-gray-600">Loading analytics...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-medium">Total Page Views</p>
          <p className="text-3xl font-bold text-amber-600 mt-2">{metrics.totalPageViews}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-medium">Beta Signups</p>
          <p className="text-3xl font-bold text-amber-600 mt-2">{metrics.totalSignups}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-medium">Contact Submissions</p>
          <p className="text-3xl font-bold text-amber-600 mt-2">{metrics.totalContacts}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-medium">Conversion Rate</p>
          <p className="text-3xl font-bold text-amber-600 mt-2">{metrics.conversionRate.toFixed(2)}%</p>
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Funnel</h3>
        <div className="space-y-3">
          {[
            { label: 'Landing Page Views', value: metrics.conversionFunnel.landing },
            { label: 'Features Section', value: metrics.conversionFunnel.features },
            { label: 'Pricing Page', value: metrics.conversionFunnel.pricing },
            { label: 'Contact Form', value: metrics.conversionFunnel.contact },
            { label: 'Beta Signups', value: metrics.conversionFunnel.signup },
          ].map((step, index) => {
            const percentage = (step.value / metrics.conversionFunnel.landing) * 100;
            return (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{step.label}</span>
                  <span className="text-sm font-medium text-gray-700">{step.value} ({percentage.toFixed(1)}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-amber-600 h-2 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Signups by Source */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Signups by Source</h3>
          <div className="space-y-3">
            {Object.entries(metrics.signupsBySource).map(([source, count]) => (
              <div key={source} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 capitalize">{source}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-amber-600 h-2 rounded-full"
                      style={{ width: `${(count / metrics.totalSignups) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-900 w-8 text-right">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signups by Page */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Signups by Page</h3>
          <div className="space-y-3">
            {Object.entries(metrics.signupsByPage).map(([page, count]) => (
              <div key={page} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{page || 'Home'}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-amber-600 h-2 rounded-full"
                      style={{ width: `${(count / metrics.totalSignups) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-900 w-8 text-right">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Signups Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Signups</h3>
        <div className="flex items-end justify-between h-48 gap-2">
          {metrics.dailySignups.map((day) => {
            const maxValue = Math.max(...metrics.dailySignups.map(d => d.count));
            const height = (day.count / maxValue) * 100;
            return (
              <div key={day.date} className="flex flex-col items-center flex-1">
                <div className="w-full bg-gray-200 rounded-t flex items-end justify-center" style={{ height: `${height}%`, minHeight: '20px' }}>
                  <span className="text-xs font-semibold text-gray-900">{day.count}</span>
                </div>
                <span className="text-xs text-gray-600 mt-2">{day.date.split('-')[2]}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Page</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">Views</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">% of Total</th>
              </tr>
            </thead>
            <tbody>
              {metrics.topPages.map((page) => (
                <tr key={page.page} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">{page.page || 'Home'}</td>
                  <td className="py-3 px-4 text-right text-gray-900 font-semibold">{page.views}</td>
                  <td className="py-3 px-4 text-right text-gray-700">
                    {((page.views / metrics.totalPageViews) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
