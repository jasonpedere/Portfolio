
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>(window.location.hash || '#');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#');
      setIsOpen(false);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update navigation mapping to handle dedicated pages
  const getHref = (link: { label: string, href: string }) => {
    if (link.label === 'About') return '#/about';
    if (link.label === 'Services') return '#/services';
    return link.href;
  };

  // First 4 links are regular menu items
  const menuLinks = NAV_LINKS.slice(0, 4);
  // Last link is the CTA button
  const ctaLink = NAV_LINKS[4];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${
      scrolled ? 'bg-[#0a0a0c]/90 border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c]">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.3)]">
            <Globe className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">ZGeon Solutions<span className="text-indigo-500">.</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {menuLinks.map((link) => (
            <a
              key={link.label}
              href={getHref(link)}
              className={`text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c] ${
                activeHash === getHref(link) ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
              aria-current={activeHash === getHref(link) ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaLink.href}
            className="px-6 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-bold shadow-[0_4px_20px_rgba(79,70,229,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c]"
          >
            {ctaLink.label}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0a0c] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.label}
              href={getHref(link)}
              className={`text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c] ${
                idx === NAV_LINKS.length - 1 
                ? 'bg-indigo-600 text-white p-4 rounded-xl text-center font-bold' 
                : 'text-slate-400 border-b border-white/5 pb-2'
              }`}
              aria-current={activeHash === getHref(link) ? 'page' : undefined}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
