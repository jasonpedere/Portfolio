
import React, { useState } from 'react';
import { Lightbulb, Send, Loader2 } from 'lucide-react';
import { getProjectConsultation } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    const result = await getProjectConsultation(input);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#121216] border border-white/10 rounded-3xl overflow-hidden p-8 md:p-12 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-indigo-600/20 rounded-2xl flex items-center justify-center">
              <Lightbulb className="text-indigo-400 w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Free Business Website Plan</h2>
              <p className="text-slate-400 text-sm">Tell me about your business, and I'll tell you how a website helps.</p>
            </div>
          </div>

          <form onSubmit={handleConsult} className="relative mb-6">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., 'I own a bakery and want to sell cakes online'"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center hover:bg-indigo-500 transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 text-white animate-spin" /> : <Send className="w-5 h-5 text-white" />}
            </button>
          </form>

          {response && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 animate-in fade-in slide-in-from-top-2 duration-500">
              <h4 className="text-xs font-mono text-indigo-400 mb-2 uppercase tracking-widest">Growth Recommendation</h4>
              <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">{response}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
