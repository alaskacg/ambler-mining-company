import SEO from '../components/SEO';
import { ArrowRight, Shield, Users, TrendingUp, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Active Projects', value: '3' },
    { label: 'Local Jobs Created', value: '500+' },
    { label: 'Safety Rating', value: 'A+' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Industry-leading safety standards with zero-harm commitment to all workers and communities.',
    },
    {
      icon: MapPin,
      title: 'Strategic Location',
      description: 'Operating in Alaska\'s Ambler Mining District, one of the world\'s richest copper-zinc-gold regions.',
    },
    {
      icon: Users,
      title: 'Community Partnership',
      description: 'Working closely with local communities, prioritizing sustainable development and shared prosperity.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Resources',
      description: 'Extensive mineral resources with robust reserves supporting long-term, sustainable operations.',
    },
  ];

  return (
    <>
      <SEO 
        title="Home"
        description="Ambler Mining Company - Responsible mining operations in Alaska's Ambler Mining District. Leading copper, zinc, and gold exploration with commitment to safety and sustainability."
        keywords="Alaska mining, Ambler mining district, responsible mining Alaska, copper mining Alaska, zinc mining Alaska, gold mining Alaska, Alaska mineral exploration"
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Responsible Mining in Alaska's Frontier
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Leading responsible mineral development in the Ambler Mining District with unwavering commitment to safety, environment, and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
              >
                Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/sustainability"
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
              >
                Sustainability
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Building Alaska's Mining Future
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're developing world-class copper, zinc, and gold deposits while maintaining the highest standards of environmental stewardship and community engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Team
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Build your career with Alaska's leading mining company
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            View Opportunities
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
