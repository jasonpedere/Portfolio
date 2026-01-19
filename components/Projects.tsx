
import React, { useState } from 'react';
import { ProjectType } from '../types';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectType>('all');

  const filteredProjects = PROJECTS.filter(p => filter === 'all' || p.type === filter);

  return (
    <section id="recent-work" className="py-24 bg-[#0a0a0c] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Recent Work</h2>
            <p className="text-slate-400 max-w-xl text-lg">
              Check out these websites I've built for local shop owners just like you. 
              These aren't just pretty pages—they bring in more customers.
            </p>
          </div>

          <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded-full border border-white/10">
            {['all', 'web', 'app'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as ProjectType)}
                className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  filter === type 
                    ? 'bg-white text-black shadow-lg' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {type === 'all' ? 'Everything' : type === 'web' ? 'Websites' : 'Mobile Apps'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-[#121216] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <a href={project.liveUrl} className="px-6 py-2 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:scale-110 transition-transform">
                     Visit Site <ExternalLink className="w-4 h-4" />
                   </a>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-mono text-slate-400 uppercase tracking-wider">{tech}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 flex-1">{project.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {project.achievements?.map((ach, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      {ach}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 text-white font-semibold group/btn">
                  See Business Case
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
