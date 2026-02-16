import SEO from '../components/SEO';
import { TrendingUp, FileText, Download, Calendar } from 'lucide-react';

export default function Investors() {
  const financials = [
    { year: '2024', revenue: '$45M', growth: '+18%', projects: '3 Active' },
    { year: '2023', revenue: '$38M', growth: '+22%', projects: '3 Active' },
    { year: '2022', revenue: '$31M', growth: '+15%', projects: '2 Active' },
  ];

  const reports = [
    {
      title: 'Q4 2024 Financial Report',
      date: 'February 15, 2025',
      type: 'Quarterly Report',
    },
    {
      title: 'Annual Report 2024',
      date: 'January 30, 2025',
      type: 'Annual Report',
    },
    {
      title: 'Q3 2024 Financial Report',
      date: 'November 15, 2024',
      type: 'Quarterly Report',
    },
    {
      title: 'Resource Estimate Update - Arctic Project',
      date: 'October 1, 2024',
      type: 'Technical Report',
    },
  ];

  const highlights = [
    'Strong financial position with minimal debt',
    'Consistent revenue growth year-over-year',
    'Multiple high-grade deposits in development',
    'Strategic partnerships with major mining companies',
    'Proven management team with track record of success',
    'Favorable jurisdiction with strong community support',
  ];

  return (
    <>
      <SEO 
        title="Investor Relations"
        description="Ambler Mining Company investor information including financial reports, shareholder resources, stock information, and company performance in Alaska's Ambler Mining District."
        keywords="Ambler Mining investors, mining company stock, Alaska mining investment, mineral exploration investment, copper mining stocks"
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Investor Relations</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Building shareholder value through responsible resource development and operational excellence.
          </p>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Investment Highlights</h2>
            <p className="text-xl text-slate-600">Why invest in Ambler Mining Company</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Performance */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Financial Performance</h2>
            <p className="text-xl text-slate-600">Track record of growth and value creation</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Year</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Revenue</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Growth</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Active Projects</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {financials.map((row) => (
                    <tr key={row.year}>
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">{row.year}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{row.revenue}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="text-green-600 font-semibold">{row.growth}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">{row.projects}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">$45M</div>
              <div className="text-sm text-slate-600">2024 Revenue</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">18%</div>
              <div className="text-sm text-slate-600">YoY Growth</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-sm text-slate-600">Active Projects</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">A+</div>
              <div className="text-sm text-slate-600">Credit Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports & Documents */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Reports & Documents</h2>
            <p className="text-xl text-slate-600">Access our latest financial reports and disclosures</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {reports.map((report) => (
              <div key={report.title} className="bg-slate-50 rounded-lg p-6 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <FileText className="h-8 w-8 text-primary-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{report.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {report.date}
                      </div>
                      <span>•</span>
                      <span>{report.type}</span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shareholder Information */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Shareholder Information</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Investor Relations</h3>
                <div className="space-y-2 text-primary-100">
                  <p><strong>Email:</strong> investors@amblermining.com</p>
                  <p><strong>Phone:</strong> +1 (907) 555-0100</p>
                  <p><strong>Address:</strong> 123 Mining Way, Anchorage, AK 99501</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Important Dates</h3>
                <div className="space-y-3 text-primary-100">
                  <div>
                    <div className="font-semibold">Annual General Meeting</div>
                    <div className="text-sm">May 15, 2025</div>
                  </div>
                  <div>
                    <div className="font-semibold">Q1 2025 Earnings</div>
                    <div className="text-sm">May 1, 2025</div>
                  </div>
                  <div>
                    <div className="font-semibold">Dividend Payment</div>
                    <div className="text-sm">March 30, 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
