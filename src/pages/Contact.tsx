import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const offices = [
    {
      name: 'Corporate Headquarters',
      address: '123 Mining Way',
      city: 'Anchorage, AK 99501',
      phone: '+1 (907) 555-0100',
      email: 'info@amblermining.com',
    },
    {
      name: 'Ambler District Office',
      address: 'Ambler Mining District',
      city: 'Northwest Alaska',
      phone: '+1 (907) 555-0150',
      email: 'operations@amblermining.com',
    },
  ];

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Contact Ambler Mining Company. Multiple contact methods including phone, email, and office locations in Anchorage and the Ambler Mining District."
        keywords="contact Ambler Mining, Alaska mining contact, Ambler Mining phone, Ambler Mining email, mining company contact"
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Get in touch with our team. We're here to answer your questions and discuss opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="careers">Careers</option>
                    <option value="investors">Investor Relations</option>
                    <option value="community">Community Relations</option>
                    <option value="media">Media Inquiry</option>
                    <option value="partnerships">Partnership Opportunities</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Phone</div>
                    <div className="text-slate-600">Main: +1 (907) 555-0100</div>
                    <div className="text-slate-600">Toll-Free: 1-800-555-MINE</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <div className="text-slate-600">General: info@amblermining.com</div>
                    <div className="text-slate-600">Careers: careers@amblermining.com</div>
                    <div className="text-slate-600">Investors: investors@amblermining.com</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Business Hours</div>
                    <div className="text-slate-600">Monday - Friday: 8:00 AM - 5:00 PM AKST</div>
                    <div className="text-slate-600">Saturday - Sunday: Closed</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Emergency Contact</h3>
                <p className="text-slate-600 mb-2">
                  For emergencies or urgent safety matters:
                </p>
                <p className="text-xl font-bold text-primary-600">
                  24/7 Hotline: +1 (907) 555-0911
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Locations</h2>
            <p className="text-xl text-slate-600">Visit us at our offices in Alaska</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office) => (
              <div key={office.name} className="bg-white rounded-lg shadow-sm p-8">
                <MapPin className="h-8 w-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">{office.name}</h3>
                <div className="space-y-2 text-slate-600">
                  <p>{office.address}</p>
                  <p>{office.city}</p>
                  <p className="pt-2"><strong>Phone:</strong> {office.phone}</p>
                  <p><strong>Email:</strong> {office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
