import { VoiceRecorder } from '@/components/voice-recorder';

export default function SellerPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Seller Portal</h1>
          <p className="text-lg text-purple-100">
            Prepare your business for acquisition with SuccessionIO's comprehensive knowledge capture platform.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Overview Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Record Your Knowledge</h3>
              <p className="text-gray-600 text-sm">
                Share your business insights, operations, customer relationships, and succession plans through voice recording.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Upload Documents</h3>
              <p className="text-gray-600 text-sm">
                Add financial statements, tax returns, contracts, operational procedures, and customer lists to your deal package.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Deal Ready</h3>
              <p className="text-gray-600 text-sm">
                Your voice, documents, and data are compiled into a comprehensive deal package for buyers and brokers.
              </p>
            </div>
          </div>
        </div>

        {/* Voice Recorder Component */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Record Your Business Knowledge</h2>
          <VoiceRecorder
            maxDuration={3600}
            onRecordingComplete={(blob, duration) => {
              console.log('Recording complete:', { size: blob.size, duration });
            }}
            onTranscriptGenerated={(transcript) => {
              console.log('Transcript generated:', transcript);
            }}
          />
        </div>

        {/* Document Upload Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Business Documents</h2>
          <div className="space-y-6">
            {/* Financial Statements */}
            <div className="p-6 bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-purple-400 transition">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📊</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Financial Statements</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Upload your most recent financial statements (P&L, balance sheet, cash flow statements)
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.xlsx,.xls,.csv"
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-lg file:border-0
                      file:text-sm file:font-semibold
                      file:bg-purple-600 file:text-white
                      hover:file:bg-purple-700"
                  />
                </div>
              </div>
            </div>

            {/* Tax Returns */}
            <div className="p-6 bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-purple-400 transition">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📋</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Tax Returns</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Upload your last 3 years of business and personal tax returns
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf"
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-lg file:border-0
                      file:text-sm file:font-semibold
                      file:bg-purple-600 file:text-white
                      hover:file:bg-purple-700"
                  />
                </div>
              </div>
            </div>

            {/* Contracts & Agreements */}
            <div className="p-6 bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-purple-400 transition">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📄</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Contracts & Agreements</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Upload key contracts (customer, supplier, employment, leases, etc.)
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.docx"
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-lg file:border-0
                      file:text-sm file:font-semibold
                      file:bg-purple-600 file:text-white
                      hover:file:bg-purple-700"
                  />
                </div>
              </div>
            </div>

            {/* Operational Procedures */}
            <div className="p-6 bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-purple-400 transition">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚙️</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Operational Procedures</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Upload documentation of your business processes, systems, and procedures
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.docx,.xlsx"
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-lg file:border-0
                      file:text-sm file:font-semibold
                      file:bg-purple-600 file:text-white
                      hover:file:bg-purple-700"
                  />
                </div>
              </div>
            </div>

            {/* Customer & Supplier Lists */}
            <div className="p-6 bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-purple-400 transition">
              <div className="flex items-start gap-4">
                <div className="text-3xl">👥</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Customer & Supplier Lists</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Upload your customer and supplier lists with contact information and relationship details
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".xlsx,.csv,.pdf"
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-lg file:border-0
                      file:text-sm file:font-semibold
                      file:bg-purple-600 file:text-white
                      hover:file:bg-purple-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Prepare Your Deal Package?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-semibold text-gray-900">Faster Due Diligence</h3>
                <p className="text-sm text-gray-600">Buyers get all information upfront, reducing deal timeline</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-semibold text-gray-900">Higher Valuations</h3>
                <p className="text-sm text-gray-600">Transparency and completeness lead to better offers</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-semibold text-gray-900">Competitive Advantage</h3>
                <p className="text-sm text-gray-600">Stand out in the marketplace with comprehensive deal packages</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-semibold text-gray-900">Reduced Risk</h3>
                <p className="text-sm text-gray-600">Capture tribal knowledge before it's lost</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
