import SEO from '../components/SEO';
import { Award, Target, Heart, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Pursuing the highest standards in all operations, from safety to environmental management.',
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'Operating with transparency, honesty, and accountability in all business practices.',
    },
    {
      icon: Heart,
      title: 'Respect',
      description: 'Valuing our people, communities, and the environment in every decision we make.',
    },
    {
      icon: CheckCircle,
      title: 'Sustainability',
      description: 'Balancing economic development with environmental protection and social responsibility.',
    },
  ];

  const leadership = [
    { name: 'John Anderson', title: 'Chief Executive Officer', bio: '25+ years mining industry experience' },
    { name: 'Sarah Mitchell', title: 'Chief Operating Officer', bio: 'Former VP Operations, major mining companies' },
    { name: 'Dr. Michael Chen', title: 'Chief Environmental Officer', bio: 'PhD Environmental Science, 15+ years in Alaska' },
    { name: 'Jennifer Williams', title: 'Chief Financial Officer', bio: 'CPA, extensive mining finance background' },
  ];

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Ambler Mining Company's history, leadership team, values, and commitment to safety and environmental stewardship in Alaska's Ambler Mining District."
        keywords="Ambler Mining Company, mining leadership, Alaska mining history, responsible mining, mining safety, environmental stewardship"
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ambler Mining Company</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            A legacy of responsible resource development in Alaska's northwest, built on partnerships, safety, and environmental excellence.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Founded with a vision to responsibly develop Alaska's mineral wealth, Ambler Mining Company has grown to become a trusted partner in the Ambler Mining District.
                </p>
                <p>
                  Our operations focus on copper, zinc, and gold deposits in one of the world's most prospective mining regions. Through advanced exploration techniques and sustainable practices, we're unlocking resources that will benefit Alaska and the nation for generations.
                </p>
                <p>
                  We work hand-in-hand with local communities, ensuring our operations create lasting benefits while protecting the pristine Alaskan environment we all cherish.
                </p>
              </div>
            </div>
            <div className="bg-slate-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Milestones</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">2010:</span> Company established
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">2015:</span> First exploration permits secured
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">2018:</span> Major copper-zinc discovery announced
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">2023:</span> Advanced environmental baseline studies
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600">Guiding principles that drive everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <value.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-slate-600">Experienced professionals committed to excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader) => (
              <div key={leader.name} className="text-center">
                <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-slate-900">{leader.name}</h3>
                <p className="text-primary-600 mb-2">{leader.title}</p>
                <p className="text-sm text-slate-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Environment */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Commitment to Safety & Environment</h2>
            <p className="text-xl text-primary-100 mb-8">
              Safety is our top priority. We maintain industry-leading safety standards and environmental practices, ensuring zero harm to our workers and minimal impact on Alaska's pristine wilderness.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-3">Safety Excellence</h3>
                <ul className="space-y-2 text-primary-100">
                  <li>• Zero-harm workplace commitment</li>
                  <li>• Continuous safety training programs</li>
                  <li>• State-of-the-art safety equipment</li>
                  <li>• Regular safety audits and reviews</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Environmental Stewardship</h3>
                <ul className="space-y-2 text-primary-100">
                  <li>• Comprehensive environmental monitoring</li>
                  <li>• Water quality protection programs</li>
                  <li>• Wildlife habitat preservation</li>
                  <li>• Progressive reclamation practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
