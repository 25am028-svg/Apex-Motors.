import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-display font-bold tracking-widest uppercase">
              Apex<span className="text-racing-blue">.</span>
            </Link>
            <p className="text-white/60 font-sans text-sm leading-relaxed max-w-xs">
              Engineered for the apex. We build the most advanced, high-performance motorcycles for those who demand absolute perfection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-racing-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-racing-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-racing-blue transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold tracking-widest uppercase mb-6 text-lg">Explore</h3>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li>
                <Link to="/" className="hover:text-racing-blue transition-colors">Models</Link>
              </li>
              <li>
                <Link to="/innovation" className="hover:text-racing-blue transition-colors">Innovation</Link>
              </li>
              <li>
                <Link to="/racing" className="hover:text-racing-blue transition-colors">Racing</Link>
              </li>
              <li>
                <Link to="/lifestyle" className="hover:text-racing-blue transition-colors">Lifestyle</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold tracking-widest uppercase mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-racing-blue shrink-0 mt-0.5" />
                <span>+1 (800) 555-APEX</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-racing-blue shrink-0 mt-0.5" />
                <span>contact@apexmotorcycles.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-racing-blue shrink-0 mt-0.5" />
                <span>
                  100 Apex Way<br />
                  Bologna, Italy 40132
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-bold tracking-widest uppercase mb-6 text-lg">Newsletter</h3>
            <p className="text-white/60 font-sans text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 px-4 py-2 w-full font-sans text-sm focus:outline-none focus:border-racing-blue transition-colors text-white"
              />
              <button 
                type="submit"
                className="bg-racing-blue text-white px-4 py-2 font-sans text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 font-sans text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Apex Motorcycles. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
