import SEO from '../components/SEO';
import { Leaf, Droplet, Users, Recycle, Shield, Heart } from 'lucide-react';

export default function Sustainability() {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Environmental Protection',
      description: 'Comprehensive monitoring programs, habitat restoration, and minimal footprint operations.',
      points: [
        'Year-round environmental monitoring',
        'Wildlife corridor protection',
        'Progressive reclamation practices',
        'Carbon footprint reduction initiatives',
      ],
    },
    {
      icon: Droplet,
      title: 'Water Stewardship',
      description: 'Advanced water management systems ensuring pristine water quality in local watersheds.',
      points: [
        'Real-time water quality monitoring',
        'Zero discharge commitment',
        'Watershed protection programs',
        'Fish habitat enhancement projects',
      ],
    },
    {
      icon: Users,
      title: 'Community Partnership',
      description: 'Working hand-in-hand with local communities for shared prosperity and sustainable development.',
      points: [
        'Local hiring and training programs',
        'Community investment initiatives',
        'Cultural heritage protection',
        'Regular stakeholder engagement',
      ],
    },
    {
      icon: Recycle,
      title: 'Circular Economy',
      description: 'Maximizing resource efficiency through recycling, reuse, and responsible waste management.',
      points: [
        'Comprehensive recycling programs',
        'Waste reduction initiatives',
        'Energy efficiency improvements',
        'Sustainable supply chain practices',
      ],
    },
  ];

  return (
    <>
      <SEO 
        title="Sustainability"
        description="Ambler Mining Company's commitment to environmental practices, community involvement, safety record, and sustainable mining in Alaska's Ambler Mining District."
        keywords="sustainable mining Alaska, environmental stewardship, community mining partnership, Alaska mining safety, responsible mining practices"
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustainability & Responsibility</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Mining responsibly for today and tomorrow. Our commitment to environmental excellence, community partnership, and worker safety defines everything we do.
          </p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Sustainability Pillars</h2>
            <p className="text-xl text-slate-600">Four core commitments guiding our operations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative) => (
              <div key={initiative.title} className="bg-slate-50 rounded-lg p-8">
                <initiative.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{initiative.title}</h3>
                <p className="text-slate-600 mb-6">{initiative.description}</p>
                <ul className="space-y-2">
                  {initiative.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-slate-700">
                      <span className="text-primary-600 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Record */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Shield className="h-16 w-16 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Industry-Leading Safety Record</h2>
              <p className="text-primary-100 mb-6">
                Safety isn't just our priority—it's our culture. Every team member goes home safe, every day. Our comprehensive safety programs, continuous training, and zero-tolerance policy for unsafe practices have earned us recognition as one of Alaska's safest mining operations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-2">0</div>
                  <div className="text-primary-100">Lost Time Incidents (2024)</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-primary-100">Safety Training Compliance</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Safety Programs</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-300 mr-2">✓</span>
                  <span>Daily safety briefings and hazard assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-300 mr-2">✓</span>
                  <span>Comprehensive PPE and safety equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-300 mr-2">✓</span>
                  <span>Regular safety audits and inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-300 mr-2">✓</span>
                  <span>Emergency response team on-site 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-300 mr-2">✓</span>
                  <span>Mental health and wellness support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-300 mr-2">✓</span>
                  <span>Stop-work authority for all employees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Community Investment</h2>
            <p className="text-xl text-slate-600">
              Building lasting partnerships with Alaska Native communities and local residents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">$5M+</div>
              <div className="text-slate-900 font-semibold mb-2">Community Investment</div>
              <div className="text-sm text-slate-600">Annual contributions to local development</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
              <div className="text-slate-900 font-semibold mb-2">Local Workforce</div>
              <div className="text-sm text-slate-600">Alaskan residents employed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-slate-900 font-semibold mb-2">Community Programs</div>
              <div className="text-sm text-slate-600">Education, training, and support initiatives</div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Community Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Economic Development</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Local business procurement preferences</li>
                  <li>• Job training and skills development</li>
                  <li>• Scholarship programs for local students</li>
                  <li>• Infrastructure improvements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Cultural Support</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Traditional knowledge integration</li>
                  <li>• Cultural heritage site protection</li>
                  <li>• Subsistence resource protection</li>
                  <li>• Language preservation support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Performance */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Environmental Performance</h2>
            <p className="text-xl text-slate-600">Measurable results, transparent reporting</p>
          </div>

          <div className="bg-slate-50 rounded-lg p-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-sm text-slate-700">Regulatory Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">Zero</div>
                <div className="text-sm text-slate-700">Environmental Violations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">1,500+</div>
                <div className="text-sm text-slate-700">Acres Reclaimed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-sm text-slate-700">Environmental Monitoring</div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Initiatives</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Leaf className="h-5 w-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Wildlife Protection:</span>
                    <span className="text-slate-600"> Seasonal restrictions, habitat corridors, species monitoring</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Droplet className="h-5 w-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Water Quality:</span>
                    <span className="text-slate-600"> Advanced treatment systems, continuous monitoring</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Recycle className="h-5 w-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Waste Management:</span>
                    <span className="text-slate-600"> Zero-waste goals, comprehensive recycling programs</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Air Quality:</span>
                    <span className="text-slate-600"> Dust suppression, emission controls, monitoring stations</span>
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
