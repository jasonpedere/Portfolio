
import React from 'react';
import { Globe, MousePointer2, TrendingUp, Shield, Zap, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const detailedServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Local SEO & Presence',
      benefit: 'Be the first thing customers see when they search "Food near me".',
      details: 'We optimize your Google Business profile, implement schema markup, and build local-focused keywords into your site structure to ensure you dominate local search results.',
      color: 'bg-indigo-600'
    },
    {
      icon: <MousePointer2 className="w-8 h-8" />,
      title: 'Online Ordering Systems',
      benefit: 'Stop paying 30% commissions to third-party delivery apps.',
      details: 'I build custom, commission-free ordering systems that integrate directly into your workflow. Save thousands of dollars every year by owning your customer data and transactions.',
      color: 'bg-cyan-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Conversion-Driven Design',
      benefit: 'Turn website visitors into loyal, paying customers.',
      details: 'A website should be a salesperson, not a brochure. I use behavioral psychology and clean UI design to guide customers toward making a booking or purchase.',
      color: 'bg-emerald-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Payment Gateways',
      benefit: 'Accept all major cards and mobile payments with zero stress.',
      details: 'Implementation of high-security Stripe or Square integrations. PCI-compliant, encrypted, and lightning-fast processing for both you and your customers.',
      color: 'bg-rose-600'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <a href="#" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-400 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </a>

        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            How I Can Help <br />
            <span className="text-cyan-500">Your Business.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            I don't just build websites; I build business tools. Each service is 
            tailored to the specific needs of retail stores, cafes, and local service providers.
          </p>
        </div>

        <div className="grid gap-8 mb-32">
          {detailedServices.map((service, i) => (
            <div key={i} className="group p-8 md:p-12 bg-[#121216] border border-white/5 rounded-[2.5rem] hover:border-white/10 transition-all flex flex-col md:flex-row gap-10 items-start md:items-center">
              <div className={`w-20 h-20 shrink-0 ${service.color} rounded-[2rem] flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <div className="flex-1">
                <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2 block">{service.benefit}</span>
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                  {service.details}
                </p>
              </div>
              <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all">
                Learn More
              </a>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="p-12 bg-indigo-600 rounded-[3rem] relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">The Success Process</h2>
              <p className="text-indigo-100 text-lg mb-8">
                I take the complexity out of digital growth. My 3-step process ensures 
                we hit the ground running without overwhelming your day-to-day operations.
              </p>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Consultation', desc: 'We discuss your specific business goals and customer needs.' },
                  { step: '02', title: 'Strategy & Build', desc: 'I develop a custom solution and handle all the technical setup.' },
                  { step: '03', title: 'Launch & Support', desc: 'We go live and I provide ongoing support to ensure everything runs smoothly.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="text-2xl font-bold text-indigo-300 opacity-50">{item.step}</span>
                    <div>
                      <h4 className="text-white font-bold text-xl">{item.title}</h4>
                      <p className="text-indigo-100/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-white/10 rounded-full w-3/4"></div>
                  <div className="h-4 bg-white/10 rounded-full w-1/2"></div>
                  <div className="h-20 bg-white/10 rounded-2xl w-full"></div>
                  <div className="flex justify-between gap-4">
                    <div className="h-12 bg-indigo-500/50 rounded-xl w-full"></div>
                    <div className="h-12 bg-white/10 rounded-xl w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] -z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
