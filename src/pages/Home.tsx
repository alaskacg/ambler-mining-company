import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, TrendingUp, MapPin, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Active Projects', value: '3' },
  { label: 'Local Jobs Created', value: '500+' },
  { label: 'Safety Rating', value: 'A+' },
  { label: 'Land Under Lease', value: '90,000 ac' },
  { label: 'Community Investment', value: '$12M+' },
];

const minerals = [
  { name: 'Copper', grade: '2.1% Cu', icon: '🟤', desc: 'Primary resource — world-class volcanogenic massive sulfide deposits with exceptional grade.' },
  { name: 'Zinc', grade: '4.8% Zn', icon: '⚪', desc: 'Significant zinc mineralization across multiple deposits within the district.' },
  { name: 'Lead', grade: '0.9% Pb', icon: '🔘', desc: 'Associated lead mineralization adds to the polymetallic value of our deposits.' },
  { name: 'Gold', grade: '0.5 g/t Au', icon: '🟡', desc: 'Precious metal credits enhance the economics of every ton processed.' },
  { name: 'Silver', grade: '35 g/t Ag', icon: '⚪', desc: 'Silver co-product provides additional revenue streams and economic resilience.' },
];

const projects = [
  { name: 'Arctic Deposit', status: 'Advanced Exploration', desc: 'Flagship copper-zinc VMS deposit with 36M tonnes indicated resource. Pre-feasibility study completed 2023.', highlights: ['36M tonnes indicated', 'Pre-feasibility complete', 'Permitting in progress'] },
  { name: 'Bornite Deposit', status: 'Exploration', desc: 'Large-scale copper carbonate deposit with significant upside potential. Drilling program ongoing.', highlights: ['6.4B lbs copper resource', 'Open at depth', '2024 drill program active'] },
  { name: 'Sun Deposit', status: 'Early Exploration', desc: 'Newly identified VMS target with promising surface geochemistry and geophysical signatures.', highlights: ['High-grade surface samples', 'Geophysical targets defined', 'Drilling planned 2025'] },
];

const envCommitments = [
  { title: 'Zero Net Impact', desc: 'Progressive reclamation throughout mine life with full ecosystem restoration upon closure.' },
  { title: 'Water Quality Protection', desc: 'Advanced water treatment exceeding EPA standards with real-time monitoring at all discharge points.' },
  { title: 'Wildlife Corridors', desc: 'Maintained caribou migration corridors with seasonal operational adjustments.' },
  { title: 'Carbon Reduction', desc: 'Committed to 50% carbon reduction by 2030 through renewable energy integration.' },
];

const investorHighlights = [
  { metric: 'NPV (8%)', value: '$2.1B', desc: 'Pre-tax net present value' },
  { metric: 'IRR', value: '24%', desc: 'Internal rate of return' },
  { metric: 'Mine Life', value: '20+ years', desc: 'Based on current resources' },
  { metric: 'Payback', value: '3.5 years', desc: 'From first production' },
];

const careers = [
  { title: 'Mining Engineer', location: 'Ambler, AK', type: 'Full-time' },
  { title: 'Environmental Scientist', location: 'Anchorage, AK', type: 'Full-time' },
  { title: 'Heavy Equipment Operator', location: 'Ambler, AK', type: 'Rotational' },
  { title: 'Community Relations Manager', location: 'Fairbanks, AK', type: 'Full-time' },
  { title: 'Geologist — Exploration', location: 'Ambler, AK', type: 'Seasonal' },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Ambler Mining Company — Sustainable Mining in Alaska's Ambler District"
        description="Ambler Mining Company develops world-class copper, zinc, and gold deposits in Alaska's Ambler Mining District with commitment to safety, sustainability, and community."
        keywords="Ambler mining, Alaska mining, copper mining Alaska, zinc mining, gold mining, Ambler district, sustainable mining, Alaska mineral exploration"
      />

      <div className="bg-slate-950 text-white">
        {/* Hero */}
        <section className="relative py-24 md:py-36 bg-gradient-to-br from-slate-950 via-amber-950/30 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-amber-400 font-semibold mb-4 text-sm tracking-wider uppercase">Responsible Resource Development</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Ambler Mining Company</span>
              </h1>
              <p className="text-2xl text-slate-300 mb-2">Sustainable Mining in Alaska's Ambler District</p>
              <p className="text-lg text-slate-400 mb-10">
                Developing world-class copper-zinc-gold deposits with unwavering commitment to safety, environmental stewardship, and Alaska Native community partnership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="bg-amber-600 hover:bg-amber-500 px-8 py-4 rounded-xl font-semibold transition text-lg text-center inline-flex items-center justify-center">
                  Our Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/investors" className="bg-slate-800 hover:bg-slate-700 border border-slate-600 px-8 py-4 rounded-xl font-semibold transition text-lg text-center">
                  Investor Relations
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-slate-900/50 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / History */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Alaska's Mining Future</h2>
                <p className="text-slate-300 mb-4">
                  Founded in 2009, Ambler Mining Company has grown from a small exploration team to one of Alaska's most promising resource developers. Our operations in the Ambler Mining District target some of the world's richest undeveloped copper-zinc deposits.
                </p>
                <p className="text-slate-400 mb-4">
                  Our mission is simple: develop Alaska's mineral wealth responsibly, creating lasting economic opportunity for local communities while maintaining the highest standards of environmental protection.
                </p>
                <p className="text-slate-400 mb-8">
                  We work in close partnership with Alaska Native communities, ensuring that the benefits of responsible development are shared equitably and that traditional ways of life are respected and preserved.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                    <div><p className="font-semibold text-sm">Safety First</p><p className="text-xs text-slate-400">Zero-harm commitment</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                    <div><p className="font-semibold text-sm">Community</p><p className="text-xs text-slate-400">Local partnership focus</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                    <div><p className="font-semibold text-sm">Strategic Location</p><p className="text-xs text-slate-400">World-class deposits</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                    <div><p className="font-semibold text-sm">Proven Resources</p><p className="text-xs text-slate-400">Long-term operations</p></div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-900/20 to-slate-800 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-xl font-bold mb-6 text-amber-400">Company Timeline</h3>
                <div className="space-y-6">
                  {[
                    { year: '2009', event: 'Company founded, initial claims staked in Ambler District' },
                    { year: '2012', event: 'First drill program at Arctic deposit — exceptional results' },
                    { year: '2016', event: 'NI 43-101 compliant resource estimate published' },
                    { year: '2019', event: 'Community benefit agreements signed with regional villages' },
                    { year: '2022', event: 'Bornite deposit resource expanded significantly' },
                    { year: '2024', event: 'Pre-feasibility study completed, permitting advanced' },
                  ].map((item) => (
                    <div key={item.year} className="flex gap-4">
                      <span className="text-amber-400 font-bold text-sm whitespace-nowrap">{item.year}</span>
                      <span className="text-sm text-slate-300">{item.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Ambler District */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Ambler Mining District</h2>
            <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
              One of the world's most significant undeveloped base and precious metals districts, with polymetallic VMS deposits rich in copper, zinc, lead, gold, and silver.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {minerals.map((mineral) => (
                <div key={mineral.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-amber-600/50 transition">
                  <span className="text-3xl block mb-3">{mineral.icon}</span>
                  <h3 className="text-lg font-bold">{mineral.name}</h3>
                  <p className="text-amber-400 font-semibold text-sm mb-2">{mineral.grade}</p>
                  <p className="text-xs text-slate-400">{mineral.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operations / Projects */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Current Operations</h2>
            <p className="text-slate-400 text-center mb-12">Three deposits at various stages of development</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-600 transition">
                  <span className="text-xs font-medium bg-amber-900/50 text-amber-400 px-3 py-1 rounded-full">{project.status}</span>
                  <h3 className="text-2xl font-bold mt-4 mb-3">{project.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{project.desc}</p>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investor Relations */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Investor Relations</h2>
            <p className="text-slate-400 text-center mb-12">Compelling economics underpinned by world-class resources</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {investorHighlights.map((item) => (
                <div key={item.metric} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-amber-400">{item.value}</p>
                  <p className="font-semibold text-sm mt-1">{item.metric}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/investors" className="inline-flex items-center bg-amber-600 hover:bg-amber-500 px-8 py-4 rounded-xl font-semibold transition">
                View Full Investor Package <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Environmental Stewardship */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Environmental Stewardship</h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">Responsible mining means protecting Alaska's environment for future generations</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {envCommitments.map((item) => (
                <div key={item.title} className="flex gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-emerald-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Join Our Team</h2>
            <p className="text-slate-400 text-center mb-12">Build your career with Alaska's leading mining company</p>
            <div className="max-w-3xl mx-auto space-y-4 mb-10">
              {careers.map((job) => (
                <div key={job.title} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-slate-600 transition">
                  <div>
                    <h3 className="font-bold">{job.title}</h3>
                    <p className="text-sm text-slate-400">{job.location} · {job.type}</p>
                  </div>
                  <Link to="/careers" className="text-amber-400 font-medium text-sm hover:text-amber-300 transition whitespace-nowrap">
                    Apply →
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/careers" className="inline-flex items-center bg-slate-800 hover:bg-slate-700 border border-slate-600 px-8 py-4 rounded-xl font-semibold transition">
                View All Openings <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Cross Promotion */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Alaska Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="https://alaskamineralsexploration.com" className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-600/50 transition text-center">
                <span className="text-3xl block mb-2">⛏️</span>
                <h3 className="font-bold text-amber-400">Alaska Minerals Exploration</h3>
                <p className="text-sm text-slate-400 mt-1">Mineral exploration services</p>
              </a>
              <a href="https://alaskagoldnews.com" className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-yellow-600/50 transition text-center">
                <span className="text-3xl block mb-2">📰</span>
                <h3 className="font-bold text-yellow-400">Alaska Gold News</h3>
                <p className="text-sm text-slate-400 mt-1">Mining industry news & analysis</p>
              </a>
              <a href="https://alaskametalsexchange.com" className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-orange-600/50 transition text-center">
                <span className="text-3xl block mb-2">🪙</span>
                <h3 className="font-bold text-orange-400">Alaska Metals Exchange</h3>
                <p className="text-sm text-slate-400 mt-1">Precious metals trading</p>
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-gradient-to-r from-amber-900/30 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Whether you're an investor, community member, or potential team member, we'd love to hear from you.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                <p className="font-semibold mb-1">Corporate Office</p>
                <p className="text-sm text-slate-400">100 W. Benson Blvd, Suite 300<br/>Anchorage, AK 99503</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                <p className="font-semibold mb-1">General Inquiries</p>
                <p className="text-sm text-slate-400">info@amblermining.com<br/>(907) 555-MINE</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                <p className="font-semibold mb-1">Investor Relations</p>
                <p className="text-sm text-slate-400">investors@amblermining.com<br/>(907) 555-0200</p>
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center bg-amber-600 hover:bg-amber-500 px-8 py-4 rounded-xl font-semibold transition text-lg">
              Send Us a Message <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <section className="py-8 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-bold">Ambler Mining Company</p>
            <p className="text-sm text-slate-500">© 2024 Ambler Mining Company. All rights reserved.</p>
          </div>
        </section>
      </div>
    </>
  );
}
