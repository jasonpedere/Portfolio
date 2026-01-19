
import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<null | 'success' | 'loading'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0c] border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Let's grow your <br /><span className="text-indigo-500">business together.</span></h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Ready for a professional website that works as hard as you do? 
              Fill out the form and I'll get back to you with a free plan and quote.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Direct Email</div>
                  <div className="font-medium text-white">json@pedere.design</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Service Area</div>
                  <div className="font-medium text-white">Local & Global Support</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {SOCIALS.map(social => (
                <a 
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-[#121216] border border-white/10 rounded-[2.5rem] p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Your Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-indigo-500 transition-colors" 
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-indigo-500 transition-colors" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Your Business Name</label>
                <input 
                  required 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-indigo-500 transition-colors" 
                  placeholder="The Coffee Shop"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea 
                  required 
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" 
                  placeholder="Tell me what your business needs..."
                />
              </div>

              <button 
                disabled={status === 'loading'}
                className={`w-full py-5 rounded-2xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
                  status === 'success' ? 'bg-emerald-600' : 'bg-indigo-600 hover:bg-indigo-500'
                }`}
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : status === 'success' ? (
                  'Request Sent Successfully!'
                ) : (
                  <>
                    Send My Request
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
