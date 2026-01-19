
import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-slate-400">Everything you need to succeed in the digital world, handled for you.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="p-8 bg-[#121216] border border-white/5 rounded-3xl hover:border-indigo-500/50 transition-colors group">
              <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <CheckCircle className="w-6 h-6 text-indigo-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I ensure your business stays ahead by implementing {skill.name.toLowerCase()} 
                best practices designed to attract more customers and increase your revenue.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
