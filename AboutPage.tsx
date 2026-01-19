
import React from 'react';
import { Target, Eye, Users, ShieldCheck, Heart, Sparkles, ArrowLeft } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <div className="mb-12">
          <a href="#" className="inline-flex items-center gap-2 text-indigo-400 hover:text-white font-semibold transition-colors group">
            <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center group-hover:bg-indigo-600 transition-all">
              <ArrowLeft className="w-4 h-4 text-white" />
            </div>
            Back to Home
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Real Impact for <br />
              <span className="text-indigo-500">Local Business.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              I am Json Pedere, a developer dedicated to helping independent shop owners and 
              restaurant proprietors bridge the gap between their physical craft and 
              the digital world. I believe the best technology is invisible and solves real problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
                <span className="text-2xl font-bold text-white block">5+</span>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
                <span className="text-2xl font-bold text-white block">50+</span>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Projects Done</p>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative z-10 bg-[#121216]">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" 
                alt="Professional Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="p-10 bg-[#121216] border border-white/5 rounded-[2.5rem] relative group overflow-hidden hover:border-indigo-500/30 transition-all">
            <Target className="w-12 h-12 text-indigo-400 mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">My Mission</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              To empower local entrepreneurs by providing high-tier digital infrastructure that 
              was previously only accessible to big corporations.
            </p>
          </div>
          <div className="p-10 bg-[#121216] border border-white/5 rounded-[2.5rem] relative group overflow-hidden hover:border-cyan-500/30 transition-all">
            <Eye className="w-12 h-12 text-cyan-400 mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">My Vision</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              A future where digital technology strengthens local communities rather than 
              replacing them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
