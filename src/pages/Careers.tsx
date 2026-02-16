import SEO from '../components/SEO';
import { Briefcase, MapPin, DollarSign, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers() {
  const benefits = [
    'Competitive salaries and performance bonuses',
    'Comprehensive health, dental, and vision insurance',
    'Retirement savings plan with company match',
    'Paid time off and holidays',
    'Professional development and training',
    'Relocation assistance',
    'Life and disability insurance',
    'Employee assistance program',
  ];

  const openings = [
    {
      title: 'Mine Geologist',
      location: 'Ambler District, AK',
      type: 'Full-time',
      salary: '$85,000 - $110,000',
      description: 'Lead geological mapping, core logging, and resource estimation for our exploration programs.',
    },
    {
      title: 'Environmental Specialist',
      location: 'Anchorage, AK',
      type: 'Full-time',
      salary: '$70,000 - $90,000',
      description: 'Monitor environmental compliance, conduct field studies, and prepare regulatory reports.',
    },
    {
      title: 'Heavy Equipment Operator',
      location: 'Ambler District, AK',
      type: 'Full-time',
      salary: '$65,000 - $80,000',
      description: 'Operate mining equipment including excavators, loaders, and haul trucks.',
    },
    {
      title: 'Safety Manager',
      location: 'Ambler District, AK',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      description: 'Develop and implement safety programs, conduct training, and ensure regulatory compliance.',
    },
    {
      title: 'Exploration Driller',
      location: 'Ambler District, AK',
      type: 'Full-time',
      salary: '$60,000 - $75,000',
      description: 'Operate diamond drilling equipment for exploration programs.',
    },
    {
      title: 'Community Relations Coordinator',
      location: 'Anchorage, AK / Ambler District',
      type: 'Full-time',
      salary: '$65,000 - $85,000',
      description: 'Build and maintain relationships with local communities and stakeholders.',
    },
  ];

  const culture = [
    {
      title: 'Safety Culture',
      description: 'Safety is our top priority. Every team member has stop-work authority and is empowered to speak up.',
    },
    {
      title: 'Development',
      description: 'Continuous learning opportunities, mentorship programs, and career advancement paths.',
    },
    {
      title: 'Diversity',
      description: 'We value diverse perspectives and are committed to building an inclusive workplace.',
    },
    {
      title: 'Community',
      description: 'Strong connections to Alaska and commitment to local hiring and community investment.',
    },
  ];

  return (
    <>
      <SEO 
        title="Careers"
        description="Join Ambler Mining Company. Explore job opportunities, benefits, and culture at Alaska's leading responsible mining company. Competitive salaries and excellent benefits."
        keywords="Alaska mining jobs, Ambler Mining careers, mining employment Alaska, geologist jobs Alaska, mining operator jobs"
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Your Career With Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Join a team that's shaping Alaska's mining future. We offer challenging work, competitive compensation, and the opportunity to make a real difference.
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Ambler Mining?</h2>
            <p className="text-xl text-slate-600">More than just a job—a career with purpose</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Benefits</h2>
              <p className="text-xl text-slate-600">We invest in our people</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Current Opportunities</h2>
            <p className="text-xl text-slate-600">Find your next role with us</p>
          </div>

          <div className="space-y-6">
            {openings.map((job) => (
              <div key={job.title} className="bg-slate-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors mt-4 md:mt-0"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <p className="text-slate-700">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">How to Apply</h2>
            <p className="text-xl text-primary-100 mb-8">
              Ready to join our team? The application process is straightforward:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">1</div>
                <h3 className="text-lg font-semibold mb-2">Submit Application</h3>
                <p className="text-primary-100">Send your resume and cover letter for positions of interest</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">2</div>
                <h3 className="text-lg font-semibold mb-2">Interview Process</h3>
                <p className="text-primary-100">Initial phone screen followed by in-person or virtual interviews</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">3</div>
                <h3 className="text-lg font-semibold mb-2">Join the Team</h3>
                <p className="text-primary-100">Background check, onboarding, and comprehensive training</p>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-slate-100 transition-colors text-lg"
              >
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
