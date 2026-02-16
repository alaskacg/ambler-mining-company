import SEO from '../components/SEO';
import { MapPin, TrendingUp, Clock, CheckCircle } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: 'Arctic Copper Project',
      location: 'Central Ambler District',
      status: 'Exploration',
      resources: 'Copper, Zinc, Gold, Silver',
      description: 'Our flagship project featuring high-grade copper-zinc-gold-silver deposits. Current drilling programs continue to expand known resources.',
      highlights: [
        'Estimated 25+ year mine life',
        'High-grade copper and zinc resources',
        'Strategic location near existing infrastructure',
        'Advanced environmental baseline studies underway',
      ],
    },
    {
      name: 'Bornite Exploration',
      location: 'Southern Ambler District',
      status: 'Advanced Exploration',
      resources: 'Copper, Cobalt',
      description: 'Significant copper-cobalt deposit with excellent expansion potential. Recent drilling has identified new high-grade zones.',
      highlights: [
        'Large-scale copper resource',
        'Cobalt credits enhance project economics',
        'Positive preliminary economic assessment',
        'Community engagement ongoing',
      ],
    },
    {
      name: 'Sun Project',
      location: 'Western Ambler District',
      status: 'Early-Stage Exploration',
      resources: 'Copper, Zinc, Lead, Silver',
      description: 'Promising volcanogenic massive sulfide (VMS) target with similar geology to our producing assets.',
      highlights: [
        'Multiple high-grade intercepts',
        'Expanding exploration footprint',
        'Integration with regional infrastructure plans',
        'Low environmental footprint operations',
      ],
    },
  ];

  return (
    <>
      <SEO 
        title="Projects"
        description="Explore Ambler Mining Company's active mining projects and exploration areas in Alaska's Ambler Mining District, including copper, zinc, and gold resource estimates."
        keywords="Alaska mining projects, Ambler District mines, copper exploration Alaska, zinc mining projects, mineral resources Alaska"
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Developing world-class mineral deposits in the Ambler Mining District with focus on copper, zinc, and precious metals.
          </p>
        </div>
      </section>

      {/* District Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Ambler Mining District</h2>
              <p className="text-slate-600 mb-4">
                Located in northwest Alaska, the Ambler Mining District is recognized as one of the world's most significant undeveloped copper districts. The region contains numerous high-grade copper, zinc, gold, and silver deposits.
              </p>
              <p className="text-slate-600 mb-6">
                Our strategic land position covers key areas within the district, supported by extensive geological databases and ongoing exploration programs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <div className="text-2xl font-bold text-slate-900">150,000+</div>
                  <div className="text-sm text-slate-600">Acres Under Lease</div>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <div className="text-2xl font-bold text-slate-900">Multiple</div>
                  <div className="text-sm text-slate-600">Deposit Types</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">District Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">World-class mineral endowment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Multiple deposit types in close proximity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Strong support from local communities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Infrastructure development underway</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Favorable mining jurisdiction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Active Projects</h2>
            <p className="text-xl text-slate-600">Building Alaska's mineral future responsibly</p>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.name}</h3>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center text-slate-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          {project.location}
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {project.status}
                        </div>
                        <div className="flex items-center text-slate-600">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {project.resources}
                        </div>
                      </div>
                    </div>
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mt-4 md:mt-0">
                      Active
                    </span>
                  </div>

                  <p className="text-slate-600 mb-6">{project.description}</p>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Project Highlights</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exploration Strategy */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Exploration Strategy</h2>
            <p className="text-slate-600 mb-8">
              Our systematic exploration approach combines cutting-edge technology with proven geological expertise. We prioritize targets with strong economic potential while maintaining strict environmental protocols.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="border-t-4 border-primary-600 pt-4">
                <h3 className="font-semibold text-slate-900 mb-2">Phase 1: Targeting</h3>
                <p className="text-sm text-slate-600">Geophysical surveys, geochemical sampling, and geological mapping</p>
              </div>
              <div className="border-t-4 border-primary-600 pt-4">
                <h3 className="font-semibold text-slate-900 mb-2">Phase 2: Drilling</h3>
                <p className="text-sm text-slate-600">Diamond drilling programs to test targets and define resources</p>
              </div>
              <div className="border-t-4 border-primary-600 pt-4">
                <h3 className="font-semibold text-slate-900 mb-2">Phase 3: Assessment</h3>
                <p className="text-sm text-slate-600">Resource modeling, economic analysis, and feasibility studies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
