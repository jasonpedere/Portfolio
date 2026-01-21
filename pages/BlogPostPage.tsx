import React, { useMemo, useEffect } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import { getBlogs } from '../utils/dataManager';
import { BlogPost } from '../types';

interface BlogPostPageProps {
  postId: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ postId }) => {
  const post = useMemo<BlogPost | undefined>(() => {
    return getBlogs().find((p) => p.id === postId);
  }, [postId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0c] text-white flex items-center justify-center px-6 py-24">
        <div className="max-w-xl text-center space-y-4">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <p className="text-slate-400">We couldn’t find that article. It may have been removed or the link is incorrect.</p>
          <a href="#" className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-10">
          <a
            href="#tips"
            className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to tips
          </a>
        </div>

        <div className="aspect-video rounded-3xl overflow-hidden mb-10 border border-slate-800">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex items-center gap-2 text-slate-500 text-sm font-mono mb-6 flex-wrap">
          <Calendar className="w-4 h-4" />
          {post.date}
          {post.author && <span className="text-slate-500">• {post.author}</span>}
          {post.readTimeMinutes && <span className="text-slate-500">• {post.readTimeMinutes} min read</span>}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

        <p className="text-xl text-slate-300 mb-10 leading-relaxed">{post.excerpt}</p>

        <div className="flex gap-2 mb-8 flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-indigo-600/20 border border-indigo-600/30 text-indigo-400 text-xs font-bold rounded-lg uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          {post.content ? renderContent(post.content) : (
            <p className="text-slate-400 italic">Full article content coming soon...</p>
          )}
        </article>
      </div>
    </div>
  );
};

// Shared content renderer for simple markdown-ish formatting
const renderContent = (content: string) => {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let listBuffer: string[] = [];

  const flushList = (keyBase: string) => {
    if (listBuffer.length === 0) return;
    elements.push(
      <ul key={`${keyBase}-list`} className="list-disc list-inside text-slate-300 space-y-1 mb-4">
        {listBuffer.map((item, idx) => (
          <li key={`${keyBase}-li-${idx}`}>{item}</li>
        ))}
      </ul>
    );
    listBuffer = [];
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    if (trimmed === '') {
      flushList(`para-${idx}`);
      elements.push(<div key={`spacer-${idx}`} className="h-4" />);
      return;
    }

    if (trimmed.startsWith('## ')) {
      flushList(`heading-${idx}`);
      elements.push(
        <h2 key={`h2-${idx}`} className="text-2xl font-bold text-white mt-8 mb-4">
          {trimmed.replace('## ', '')}
        </h2>
      );
      return;
    }

    if (trimmed.startsWith('### ')) {
      flushList(`subheading-${idx}`);
      elements.push(
        <h3 key={`h3-${idx}`} className="text-xl font-bold text-white mt-6 mb-3">
          {trimmed.replace('### ', '')}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith('- ')) {
      listBuffer.push(trimmed.replace('- ', ''));
      return;
    }

    flushList(`para-${idx}`);
    elements.push(
      <p key={`p-${idx}`} className="text-slate-300 mb-4 leading-relaxed">
        {line}
      </p>
    );
  });

  flushList('final');
  return elements;
};

export default BlogPostPage;
