
import React from 'react';
import { User, Award, CheckCircle, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full aspect-square rounded-[2rem] overflow-hidden rotate-3 bg-[#121216] border border-white/10 group">
               <img 
                src="https://i.imgur.com/57d38yd.png" 
                alt="ZGeon Solutions" 
              className="w-full h-full object-cover -rotate-3"
               />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <span className="text-4xl font-bold text-white">5+</span>
              <span className="text-xs font-medium text-indigo-100 leading-tight">Years Helping<br />Local Shops</span>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-sm mb-4">
              <User className="w-4 h-4" />
              ABOUT ZGEON SOLUTIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              I build websites that <br />
              <span className="text-slate-500">actually grow businesses.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              ZGeon Solutions helps local restaurants and shops get found online and turn visitors into customers.
              We build fast, affordable websites that look professional and make it easy to take orders.
            </p>

            <ul className="grid gap-3 mb-8 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Simple, clean design that builds trust
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Mobile-first layouts for busy customers
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Local SEO to drive “near me” searches
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-6 mb-12">
              {[
                { label: 'Happy Stores', value: '25+', icon: <CheckCircle className="w-5 h-5 text-indigo-400" /> },
                { label: 'Restaurant Sites', value: '12', icon: <Award className="w-5 h-5 text-cyan-400" /> },
                { label: 'Mobile Ready', value: '100%', icon: <Smartphone className="w-5 h-5 text-amber-400" /> },
                { label: 'Local Support', value: '24/7', icon: <User className="w-5 h-5 text-emerald-400" /> },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 text-white font-bold group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c]"
            >
              Let's Talk About Your Business
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                <CheckCircle className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
