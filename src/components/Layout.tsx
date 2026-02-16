import { Link, Outlet } from 'react-router-dom';
import { Menu, X, Mountain } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Careers', href: '/careers' },
    { name: 'Investors', href: '/investors' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-slate-900 text-white">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b border-slate-700 py-6 lg:border-none">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Mountain className="h-8 w-8 text-primary-400" />
                <span className="text-xl font-bold">Ambler Mining Company</span>
              </Link>
            </div>
            <div className="ml-10 hidden space-x-8 lg:flex">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-base font-medium text-white hover:text-primary-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 space-y-2">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block py-2 text-base font-medium text-white hover:text-primary-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-white mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-8 w-8 text-primary-400" />
                <span className="text-xl font-bold">Ambler Mining Company</span>
              </div>
              <p className="text-slate-300 text-sm">
                Responsible mining operations in Alaska's Ambler Mining District.
                Committed to safety, environmental stewardship, and community partnership.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-slate-300 hover:text-white text-sm transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                {navigation.slice(4).map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-slate-300 hover:text-white text-sm transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Ambler Mining Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
