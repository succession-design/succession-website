'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AnalyticsDashboard } from '@/components/analytics-dashboard';

interface DashboardStats {
  totalBetaSignups: number;
  totalContactSubmissions: number;
  totalFeedback: number;
  conversionRate: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/stats');
        if (!response.ok) {
          router.push('/admin/login');
          return;
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'logout' }),
    });
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-amber-600">Succession Admin</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'beta-signups', label: 'Beta Signups' },
              { id: 'contact-submissions', label: 'Contact Submissions' },
              { id: 'analytics', label: 'Analytics' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-amber-500 text-amber-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
            
            {stats && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <p className="text-gray-600 text-sm font-medium">Beta Signups</p>
                  <p className="text-3xl font-bold text-amber-600 mt-2">
                    {stats.totalBetaSignups}
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <p className="text-gray-600 text-sm font-medium">Contact Submissions</p>
                  <p className="text-3xl font-bold text-amber-600 mt-2">
                    {stats.totalContactSubmissions}
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <p className="text-gray-600 text-sm font-medium">User Feedback</p>
                  <p className="text-3xl font-bold text-amber-600 mt-2">
                    {stats.totalFeedback}
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <p className="text-gray-600 text-sm font-medium">Conversion Rate</p>
                  <p className="text-3xl font-bold text-amber-600 mt-2">
                    {stats.conversionRate.toFixed(1)}%
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/admin/dashboard?tab=beta-signups"
                  className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                >
                  View Beta Signups
                </Link>
                <Link
                  href="/admin/dashboard?tab=contact-submissions"
                  className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                >
                  View Contact Submissions
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'beta-signups' && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Beta Signups</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600">Beta signup management coming soon...</p>
            </div>
          </div>
        )}

        {activeTab === 'contact-submissions' && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Submissions</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600">Contact submission management coming soon...</p>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Analytics Dashboard</h2>
            <AnalyticsDashboard />
          </div>
        )}
      </main>
    </div>
  );
}
