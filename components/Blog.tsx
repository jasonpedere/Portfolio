
import React, { useState, useEffect } from 'react';
import { getBlogs } from '../utils/dataManager';
import { BlogPost } from '../types';
import { Calendar, ArrowUpRight, X } from 'lucide-react';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    setPosts(getBlogs());
    
    const handleUpdate = () => setPosts(getBlogs());
    window.addEventListener('blogsUpdated', handleUpdate);
    return () => window.removeEventListener('blogsUpdated', handleUpdate);
  }, []);

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPost]);

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
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer" onClick={() => setSelectedPost(post)}>
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
          {posts.length === 0 && (
            <div className="col-span-full text-center py-12 text-slate-500">
              No blog posts available at the moment.
            </div>
          )}
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-[#0a0a0c] border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedPost(null)}
              className="sticky top-4 left-full ml-4 z-10 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8 md:p-12">
              {/* Header Image */}
              <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tags */}
              <div className="flex gap-2 mb-4">
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-indigo-600/20 border border-indigo-600/30 text-indigo-400 text-xs font-bold rounded-lg uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-slate-500 text-sm font-mono mb-6">
                <Calendar className="w-4 h-4" />
                {selectedPost.date}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {selectedPost.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                {selectedPost.excerpt}
              </p>

              {/* Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                {selectedPost.content ? (
                  selectedPost.content.split('\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    } else if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={idx} className="text-xl font-bold text-white mt-6 mb-3">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    } else if (paragraph.trim() === '') {
                      return <div key={idx} className="h-4" />;
                    } else if (paragraph.startsWith('- ')) {
                      return (
                        <li key={idx} className="text-slate-300 ml-6 mb-2">
                          {paragraph.replace('- ', '')}
                        </li>
                      );
                    } else {
                      return (
                        <p key={idx} className="text-slate-300 mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    }
                  })
                ) : (
                  <p className="text-slate-400 italic">
                    Full article content coming soon...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
