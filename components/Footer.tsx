
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
          <span className="text-lg font-bold text-white tracking-tight">Json Pedere<span className="text-indigo-500">.</span></span>
        </div>

        <div className="text-slate-500 text-sm flex items-center gap-2">
          Building Local Business Success &copy; {new Date().getFullYear()}
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Privacy</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
