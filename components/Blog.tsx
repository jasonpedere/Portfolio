
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowUpRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="tips" className="py-24 bg-[#0a0a0c] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tight">Success Tips</h2>
          <a href="#" className="hidden sm:flex items-center gap-2 text-indigo-400 font-semibold hover:underline">
            Visit Full Blog <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-indigo-600/90 backdrop-blur-sm text-white text-[10px] font-bold rounded-lg uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-mono mb-3">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-slate-400 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="w-fit border-b border-indigo-600/30 pb-1 text-indigo-400 text-sm font-bold group-hover:border-indigo-600 transition-all">
                Read Full Article
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
