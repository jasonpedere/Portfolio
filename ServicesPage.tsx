
import React from 'react';
import { Globe, MousePointer2, TrendingUp, Shield, ArrowLeft } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const detailedServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Local SEO & Presence',
      benefit: 'Be the first thing customers see.',
      details: 'We optimize your Google Business profile and implement local keywords to ensure you dominate local search results.',
      color: 'bg-indigo-600'
    },
    {
      icon: <MousePointer2 className="w-8 h-8" />,
      title: 'Online Ordering Systems',
      benefit: 'Stop paying high commissions.',
      details: 'I build custom, commission-free ordering systems that integrate directly into your workflow. Own your data.',
      color: 'bg-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <a href="#" className="inline-flex items-center gap-2 text-indigo-400 hover:text-white font-semibold transition-colors group">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-20 tracking-tight">
          Services That <br />
          <span className="text-cyan-500">Grow Your Shop.</span>
        </h1>

        <div className="grid gap-8">
          {detailedServices.map((service, i) => (
            <div key={i} className="p-8 md:p-12 bg-[#121216] border border-white/5 rounded-[2.5rem] flex flex-col md:flex-row gap-10 items-start md:items-center">
              <div className={`w-20 h-20 shrink-0 ${service.color} rounded-[2rem] flex items-center justify-center text-white shadow-xl`}>
                {service.icon}
              </div>
              <div className="flex-1">
                <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2 block">{service.benefit}</span>
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">{service.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
