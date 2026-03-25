'use client';

import { useState } from 'react';
import { Plus, Settings, Trash2, RefreshCw, LinkIcon, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface MarketplaceConnection {
  connectionId: string;
  marketplaceType: string;
  autoSyncEnabled: boolean;
  lastSyncAt?: string;
  nextSyncAt?: string;
  dealCount?: number;
}

interface ImportedDeal {
  dealId: string;
  businessName: string;
  businessType: string;
  listingPrice: number;
  location: string;
  dealReadinessScore?: number;
  syncStatus: 'pending' | 'synced' | 'failed';
}

const mockConnections: MarketplaceConnection[] = [
  {
    connectionId: 'conn_001',
    marketplaceType: 'mls',
    autoSyncEnabled: true,
    lastSyncAt: '2026-03-25T08:30:00Z',
    nextSyncAt: '2026-03-25T09:30:00Z',
    dealCount: 24,
  },
  {
    connectionId: 'conn_002',
    marketplaceType: 'broker_listings',
    autoSyncEnabled: true,
    lastSyncAt: '2026-03-25T08:15:00Z',
    nextSyncAt: '2026-03-25T09:15:00Z',
    dealCount: 18,
  },
];

const mockDeals: ImportedDeal[] = [
  {
    dealId: 'deal_001',
    businessName: 'Tech Solutions Inc.',
    businessType: 'services',
    listingPrice: 2500000,
    location: 'San Francisco, CA',
    dealReadinessScore: 78,
    syncStatus: 'synced',
  },
  {
    dealId: 'deal_002',
    businessName: 'Manufacturing Co.',
    businessType: 'manufacturing',
    listingPrice: 3200000,
    location: 'Chicago, IL',
    dealReadinessScore: 85,
    syncStatus: 'synced',
  },
  {
    dealId: 'deal_003',
    businessName: 'Retail Store Network',
    businessType: 'retail',
    listingPrice: 1800000,
    location: 'Austin, TX',
    dealReadinessScore: undefined,
    syncStatus: 'pending',
  },
];

export default function BrokerDashboard() {
  const [connections, setConnections] = useState<MarketplaceConnection[]>(mockConnections);
  const [deals, setDeals] = useState<ImportedDeal[]>(mockDeals);
  const [showAddConnection, setShowAddConnection] = useState(false);
  const [selectedMarketplace, setSelectedMarketplace] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');
  const [apiSecret, setApiSecret] = useState<string>('');

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getMarketplaceLabel = (type: string) => {
    const labels: Record<string, string> = {
      mls: 'MLS (Multiple Listing Service)',
      broker_listings: 'BrokerListings',
      zillow_business: 'Zillow for Business',
      costar: 'CoStar',
      loopnet: 'LoopNet',
    };
    return labels[type] || type;
  };

  const handleAddConnection = () => {
    if (!selectedMarketplace || !apiKey) {
      alert('Please fill in all required fields');
      return;
    }

    const newConnection: MarketplaceConnection = {
      connectionId: `conn_${Date.now()}`,
      marketplaceType: selectedMarketplace,
      autoSyncEnabled: true,
      lastSyncAt: new Date().toISOString(),
      nextSyncAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      dealCount: 0,
    };

    setConnections([...connections, newConnection]);
    setShowAddConnection(false);
    setSelectedMarketplace('');
    setApiKey('');
    setApiSecret('');
  };

  const handleSync = (connectionId: string) => {
    // In production, call API endpoint
    const connection = connections.find((c) => c.connectionId === connectionId);
    if (connection) {
      connection.lastSyncAt = new Date().toISOString();
      connection.nextSyncAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
      setConnections([...connections]);
    }
  };

  const handleDeleteConnection = (connectionId: string) => {
    if (confirm('Are you sure you want to delete this connection?')) {
      setConnections(connections.filter((c) => c.connectionId !== connectionId));
      setDeals(deals.filter((d) => d.dealId !== connectionId));
    }
  };

  const totalDeals = deals.length;
  const syncedDeals = deals.filter((d) => d.syncStatus === 'synced').length;
  const averageScore = deals
    .filter((d) => d.dealReadinessScore)
    .reduce((sum, d) => sum + (d.dealReadinessScore || 0), 0) / syncedDeals || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Broker Dashboard</h1>
              <p className="text-slate-600 mt-2">Manage marketplace connections and imported deals</p>
            </div>
            <button
              onClick={() => setShowAddConnection(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
            >
              <Plus size={20} />
              Add Connection
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <p className="text-sm font-semibold text-slate-600">Total Deals</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{totalDeals}</p>
            <p className="text-sm text-slate-500 mt-2">From {connections.length} marketplace connections</p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <p className="text-sm font-semibold text-slate-600">Synced Deals</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{syncedDeals}</p>
            <p className="text-sm text-slate-500 mt-2">Ready with Deal Readiness Scores</p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <p className="text-sm font-semibold text-slate-600">Average Score</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{averageScore.toFixed(0)}</p>
            <p className="text-sm text-slate-500 mt-2">Across synced deals</p>
          </div>
        </div>

        {/* Add Connection Modal */}
        {showAddConnection && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Add Marketplace Connection</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Marketplace Platform
                  </label>
                  <select
                    value={selectedMarketplace}
                    onChange={(e) => setSelectedMarketplace(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a marketplace...</option>
                    <option value="mls">MLS (Multiple Listing Service)</option>
                    <option value="broker_listings">BrokerListings</option>
                    <option value="zillow_business">Zillow for Business</option>
                    <option value="costar">CoStar</option>
                    <option value="loopnet">LoopNet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    API Key *
                  </label>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your API key"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    API Secret (Optional)
                  </label>
                  <input
                    type="password"
                    value={apiSecret}
                    onChange={(e) => setApiSecret(e.target.value)}
                    placeholder="Enter your API secret"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowAddConnection(false)}
                    className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddConnection}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Marketplace Connections */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm mb-8">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">Marketplace Connections</h2>
          </div>

          <div className="divide-y divide-slate-200">
            {connections.map((connection) => (
              <div key={connection.connectionId} className="p-6 hover:bg-slate-50 transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <LinkIcon className="text-blue-600" size={24} />
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {getMarketplaceLabel(connection.marketplaceType)}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        {connection.dealCount} deals • Last synced {formatDate(connection.lastSyncAt)}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSync(connection.connectionId)}
                      className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
                      title="Sync now"
                    >
                      <RefreshCw size={20} />
                    </button>
                    <button
                      onClick={() => handleDeleteConnection(connection.connectionId)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Delete connection"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    {connection.autoSyncEnabled ? (
                      <>
                        <CheckCircle className="text-green-600" size={16} />
                        <span className="text-green-600">Auto-sync enabled</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="text-yellow-600" size={16} />
                        <span className="text-yellow-600">Auto-sync disabled</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock size={16} />
                    <span>Next sync: {formatDate(connection.nextSyncAt)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Imported Deals */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">Imported Deals</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Business Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Location</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Price</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Score</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {deals.map((deal) => (
                  <tr key={deal.dealId} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">{deal.businessName}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 capitalize">{deal.businessType}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{deal.location}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                      {formatCurrency(deal.listingPrice)}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {deal.dealReadinessScore ? (
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-900 font-bold">
                          {deal.dealReadinessScore}
                        </span>
                      ) : (
                        <span className="text-slate-500">Pending</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {deal.syncStatus === 'synced' ? (
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle size={16} />
                          <span>Synced</span>
                        </div>
                      ) : deal.syncStatus === 'pending' ? (
                        <div className="flex items-center gap-2 text-yellow-600">
                          <Clock size={16} />
                          <span>Pending</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-red-600">
                          <AlertCircle size={16} />
                          <span>Failed</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
