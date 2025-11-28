import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Process', href: '/#process' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Testimonials', href: '/#testimonials' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <header className="fixed w-full bg-brand-cream/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://storage.googleapis.com/msgsndr/Z9VkbpvTwFPgODZUYAw7/media/6929d5f832bffb323ba2309f.png" 
                alt="HMS South Tampa" 
                className="h-16 w-auto object-contain py-2"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-stone-600 hover:text-brand-navy transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://api.poweradminai.com/widget/bookings/hms-south-tampa-booking-calend"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-navy text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-stone-800 transition-colors duration-300 shadow-sm"
              >
                Schedule Service
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-stone-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-cream border-t border-stone-200 absolute w-full h-screen top-24 left-0 px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-serif text-brand-navy border-b border-stone-100 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a 
                href="https://api.poweradminai.com/widget/bookings/hms-south-tampa-booking-calend"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-navy text-white px-6 py-4 rounded-sm text-center font-medium shadow-sm mt-4 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule Service
              </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-stone-300 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
               <Link to="/" className="inline-block mb-6">
                <img 
                  src="https://storage.googleapis.com/msgsndr/Z9VkbpvTwFPgODZUYAw7/media/6929d5f84a6880daa779dc90.png" 
                  alt="HMS South Tampa" 
                  className="h-16 w-auto object-contain"
                />
              </Link>
              <p className="max-w-md text-stone-400 font-light leading-relaxed mb-6">
                Making homeownership stress free. We provide preventative home maintenance and concierge care for South Tampa's premier neighborhoods.
              </p>
              <div className="flex items-center gap-2 text-white">
                <Phone size={18} className="text-brand-sage-light" />
                <span className="font-medium tracking-wide">(813) 705-5705</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-serif text-lg mb-6">Service Area</h4>
              <ul className="space-y-3 font-light text-sm">
                <li>Hyde Park</li>
                <li>Davis Islands</li>
                <li>Palma Ceia</li>
                <li>Beach Park</li>
                <li>South Tampa</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-lg mb-6">Company</h4>
              <ul className="space-y-3 font-light text-sm">
                <li><a href="/#process" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy & Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
            <p>© 2025 Homeowners Maintenance Services. All rights reserved.</p>
            <p>Designed for South Tampa Living.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;