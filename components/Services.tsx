
import React, { useRef } from 'react';
import { SKILLS } from '../constants';
import { CheckCircle, Zap, Shield, TrendingUp, Globe, MousePointer2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const titleRef = useScrollAnimation('slide-up');
  
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
    <section id="services" className="py-24 bg-[#0a0a0c] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16 scroll-animate">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-4 tracking-widest uppercase">
            What I Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Services</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I provide complete digital solutions designed to help local businesses 
            save time, look professional, and get more customers.
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
  const cardRef = useScrollAnimation('scale');

  return (
    <div 
      ref={cardRef}
      className={`p-8 bg-[#121216] border border-white/5 rounded-3xl hover:border-indigo-500/50 transition-all group hover:-translate-y-2 duration-300 scroll-animate-scale stagger-${(index % 6) + 1} hover-lift`}
    >
      <div className="w-14 h-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors shadow-lg">
        <div className="text-indigo-400 group-hover:text-white transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        I ensure your business stays ahead by implementing {skill.name.toLowerCase()} 
        best practices designed to attract more customers and increase your revenue. 
        Full setup and ongoing support included.
      </p>
    </div>
  );
};

export default Services;
