
import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle, Zap, Shield, TrendingUp, Globe, MousePointer2 } from 'lucide-react';

const Services: React.FC = () => {
  // Mapping skills to more descriptive business icons
  const icons = [
    <Globe className="w-6 h-6" />,
    <MousePointer2 className="w-6 h-6" />,
    <TrendingUp className="w-6 h-6" />,
    <Shield className="w-6 h-6" />,
    <Zap className="w-6 h-6" />,
    <CheckCircle className="w-6 h-6" />
  ];

  return (
    <section id="services" className="py-20 bg-[#0a0a0c] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-4 tracking-widest uppercase">
            What I Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Services</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Clear, affordable services that help local businesses get found, look professional, and win more customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <ServiceCard key={skill.name} skill={skill} icon={icons[index % icons.length]} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ skill: any; icon: React.ReactNode; index: number }> = ({ skill, icon, index }) => {
  return (
    <div 
      className="p-8 bg-[#121216] border border-white/5 rounded-3xl hover:border-indigo-500/50"
    >
      <div className="w-14 h-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <div className="text-indigo-400">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        Practical {skill.name.toLowerCase()} improvements focused on visibility, trust, and conversions.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          More local leads and calls
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          Simple, frictionless customer flow
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Easy updates and support
        </li>
      </ul>
    </div>
  );
};

export default Services;
