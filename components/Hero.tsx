
import React from 'react';
import { ChevronRight, Store, Utensils, ShoppingBag, Smartphone } from 'lucide-react';
import AuroraBackground from './AuroraBackground';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        background:
          'radial-gradient(60% 60% at 30% 30%, rgba(99,102,241,0.12), rgba(10,10,12,0)),' +
          'radial-gradient(55% 55% at 70% 40%, rgba(14,165,233,0.10), rgba(10,10,12,0))',
      }}
    >
      {/* Visual background elements */}
      <AuroraBackground />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 -z-20"></div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-mono mb-8">
          <Store className="w-3 h-3" />
          HELPING LOCAL BUSINESSES GROW ONLINE
        </div>

        <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Get Your Business <br />
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Found Online.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Professional websites for restaurants, retail stores, and local services. 
          Stop losing customers to your competitors and start taking orders online today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#recent-work"
            className="group px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all"
          >
            See Real Results
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all"
          >
            Get a Free Quote
          </a>
        </div>

        <div className="mt-24 flex items-center justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
          <div className="flex flex-col items-center gap-2">
            <Utensils className="w-10 h-10 text-white" />
            <span className="text-[10px] font-mono uppercase text-slate-500">Restaurants</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShoppingBag className="w-10 h-10 text-white" />
            <span className="text-[10px] font-mono uppercase text-slate-500">Retail</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Store className="w-10 h-10 text-white" />
            <span className="text-[10px] font-mono uppercase text-slate-500">Services</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Smartphone className="w-10 h-10 text-white" />
            <span className="text-[10px] font-mono uppercase text-slate-500">Mobile Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
