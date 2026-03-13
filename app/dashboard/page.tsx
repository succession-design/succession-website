'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';

interface Document {
  id: string;
  title: string;
  businessName: string;
  businessType: string;
  createdAt: string;
  status: 'draft' | 'completed' | 'archived';
  tier: 'trial' | 'playbook' | 'broker';
}

export default function DashboardPage() {
  const { user, isLoading: authLoading, logout } = useAuth();
  const router = useRouter();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    // Simulate fetching documents from backend
    const mockDocuments: Document[] = [
      {
        id: '1',
        title: 'Tech Solutions Inc - Handover Document',
        businessName: 'Tech Solutions Inc',
        businessType: 'Service',
        createdAt: '2024-03-10',
        status: 'completed',
        tier: 'playbook',
      },
      {
        id: '2',
        title: 'Manufacturing Co - Playbook',
        businessName: 'Manufacturing Co',
        businessType: 'Manufacturing',
        createdAt: '2024-02-28',
        status: 'completed',
        tier: 'broker',
      },
      {
        id: '3',
        title: 'Service Business - Trial',
        businessName: 'Service Business',
        businessType: 'Service',
        createdAt: '2024-03-05',
        status: 'draft',
        tier: 'trial',
      },
    ];

    setDocuments(mockDocuments);
    setIsLoading(false);
  }, []);

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your documents...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTierBadgeColor = (tier: string) => {
    switch (tier) {
      case 'trial':
        return 'bg-blue-100 text-blue-800';
      case 'playbook':
        return 'bg-purple-100 text-purple-800';
      case 'broker':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, {user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/app"
              className="p-6 bg-white rounded-xl border-2 border-amber-600 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-4xl mb-3">🎤</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Start New Interview
              </h3>
              <p className="text-gray-600 text-sm">
                Begin recording a new business handover document
              </p>
            </Link>

            <Link
              href="/subscription"
              className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Upgrade Plan
              </h3>
              <p className="text-gray-600 text-sm">
                Access unlimited interviews and broker tools
              </p>
            </Link>

            <Link
              href="/settings"
              className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Account Settings
              </h3>
              <p className="text-gray-600 text-sm">
                Manage your profile and preferences
              </p>
            </Link>
          </div>
        </div>

        {/* Documents */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Documents</h2>

          {documents.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
              <div className="text-6xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No documents yet
              </h3>
              <p className="text-gray-600 mb-6">
                Start your first interview to create a handover document
              </p>
              <Link
                href="/app"
                className="inline-block px-6 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
              >
                Start Interview
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {doc.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(doc.status)}`}>
                          {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTierBadgeColor(doc.tier)}`}>
                          {doc.tier.charAt(0).toUpperCase() + doc.tier.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {doc.businessName} • {doc.businessType}
                      </p>
                      <p className="text-gray-500 text-xs">
                        Created {new Date(doc.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button className="px-4 py-2 text-amber-600 border border-amber-600 rounded-lg hover:bg-amber-50 transition-colors text-sm font-semibold">
                        View
                      </button>
                      <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-semibold">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
