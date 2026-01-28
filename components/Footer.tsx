
import React from 'react';
import { Globe, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#0a0a0c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Globe className="text-white w-4 h-4" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">ZGeon Solutions<span className="text-indigo-500">.</span></span>
        </div>

        <div className="text-slate-500 text-sm flex items-center gap-2">
          Building Local Business Success &copy; {new Date().getFullYear()}
        </div>

        <div className="flex items-center gap-8">
          <a href="#/privacy" className="text-slate-500 hover:text-white text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c]">Privacy Policy</a>
          <a href="#/terms" className="text-slate-500 hover:text-white text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c]">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
