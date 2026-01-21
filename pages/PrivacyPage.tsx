import React from 'react';
import { ShieldCheck, Lock, Mail, ArrowLeft, Info, Clock3, Server, Globe } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      icon: <Info className="w-5 h-5" />,
      title: 'Information We Collect',
      items: [
        'Contact details you submit through forms (name, email, phone).',
        'Business details you share when requesting services.',
        'Basic site usage data (pages visited, device type) collected through privacy-friendly analytics.'
      ]
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'How We Use It',
      items: [
        'Reply to inquiries and schedule consultations.',
        'Prepare proposals, scope work, and deliver projects.',
        'Improve site performance and security.',
        'Send important service updates. No spam or reselling.'
      ]
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: 'Data Protection',
      items: [
        'Access limited to the small delivery team.',
        'Data stored with reputable cloud providers using encryption in transit.',
        'We retain only what is needed to provide services or meet legal obligations.'
      ]
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: 'Third Parties',
      items: [
        'Hosting, email, and analytics vendors process data on our behalf.',
        'Vendors are chosen for strong security practices and limited data use.',
        'We do not sell or trade your personal information.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <a href="#" className="inline-flex items-center gap-2 text-indigo-400 hover:text-white font-semibold transition-colors group">
            <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center group-hover:bg-indigo-600 transition-all">
              <ArrowLeft className="w-4 h-4 text-white" />
            </div>
            Back to Home
          </a>
        </div>

        <div className="bg-gradient-to-br from-indigo-900/40 via-[#121216] to-cyan-900/30 border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-2xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 flex items-center justify-center text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-indigo-300 font-semibold">Privacy Notice</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Your data stays yours.</h1>
            </div>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            I collect only the information required to respond to you, deliver services, and keep the site secure. There are no hidden trackers, data brokers, or surprise mailing lists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {sections.map((section) => (
            <div key={section.title} className="p-6 md:p-8 bg-[#121216] border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-300">
                  {section.icon}
                </span>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <ul className="space-y-3 text-slate-300">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-1 w-2 h-2 rounded-full bg-indigo-400" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#121216] border border-white/10 rounded-2xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs uppercase tracking-widest">
              <Clock3 className="w-4 h-4" />
              Retention
            </div>
            <p className="text-slate-300">Contact and project records are kept only as long as needed for active work, accounting, or legal requirements.</p>
          </div>
          <div className="p-6 bg-[#121216] border border-white/10 rounded-2xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs uppercase tracking-widest">
              <Globe className="w-4 h-4" />
              Cookies
            </div>
            <p className="text-slate-300">Only essential and performance cookies are used. You can disable cookies in your browser; core site content will remain accessible.</p>
          </div>
          <div className="p-6 bg-[#121216] border border-white/10 rounded-2xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs uppercase tracking-widest">
              <Mail className="w-4 h-4" />
              Contact
            </div>
            <p className="text-slate-300">Have a data question or want your information removed? Email hello@example.com and I will respond promptly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
