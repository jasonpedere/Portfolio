import React from 'react';
import { FileText, Scale, Shield, ArrowLeft, AlertTriangle, CheckCircle2 } from 'lucide-react';

const TermsPage: React.FC = () => {
  const terms = [
    {
      title: 'Use of the Site',
      description: 'You agree to use this site lawfully and not to disrupt, reverse-engineer, or misuse any part of it.'
    },
    {
      title: 'Services and Proposals',
      description: 'Estimates and timelines are provided in good faith. Final scopes, pricing, and deliverables are confirmed in a written agreement for each project.'
    },
    {
      title: 'Intellectual Property',
      description: 'Unless otherwise agreed, code and assets produced for a paid engagement transfer to you upon final payment. Shared frameworks and tools remain mine.'
    },
    {
      title: 'Confidentiality',
      description: 'Information you share for projects is kept confidential and only used to deliver the requested work.'
    },
    {
      title: 'Third-Party Tools',
      description: 'Integrations (hosting, analytics, payments, etc.) follow their own terms. I will outline these dependencies during scoping.'
    },
    {
      title: 'Liability',
      description: 'The site and services are provided "as is." I am not liable for indirect, incidental, or consequential damages to the maximum extent allowed by law.'
    },
    {
      title: 'Changes',
      description: 'These terms may be updated periodically. Continued use of the site after updates means you accept the revised terms.'
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

        <div className="bg-gradient-to-br from-indigo-900/40 via-[#121216] to-slate-900/40 border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-2xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 flex items-center justify-center text-white">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-indigo-300 font-semibold">Terms of Use</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Clear, simple expectations.</h1>
            </div>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            Please review these terms before using the site or engaging services. They keep collaboration straightforward and transparent.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {terms.map((term) => (
            <div key={term.title} className="p-6 md:p-8 bg-[#121216] border border-white/10 rounded-2xl flex gap-4">
              <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-300">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">{term.title}</h2>
                <p className="text-slate-300 leading-relaxed">{term.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#121216] border border-white/10 rounded-2xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-amber-300 font-mono text-xs uppercase tracking-widest">
              <AlertTriangle className="w-4 h-4" />
              Limitations
            </div>
            <p className="text-slate-300">Nothing on this site is legal advice. Always review agreements and policies with your own counsel if you need legal guidance.</p>
          </div>
          <div className="p-6 bg-[#121216] border border-white/10 rounded-2xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs uppercase tracking-widest">
              <Scale className="w-4 h-4" />
              Questions
            </div>
            <p className="text-slate-300">If something is unclear or you need a custom term for your project, reach out and I will clarify in writing before work begins.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
