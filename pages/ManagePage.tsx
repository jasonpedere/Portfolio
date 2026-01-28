
import React, { useState, useEffect } from 'react';
import { Lock, Plus, Edit2, Trash2, Save, X, ArrowLeft, Code, Copy, Check } from 'lucide-react';
import { getProjects, saveProject, deleteProject, getBlogs, saveBlog, deleteBlog } from '../utils/dataManager';
import { fetchFromTable, insertIntoTable, updateInTable, deleteFromTable, getSupabaseClient } from '../services/supabaseService';
import { Project, BlogPost } from '../types';

const ManagePage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'projects' | 'blogs'>('projects');
  
  // Data State
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  
  // Editor State
  const [isEditing, setIsEditing] = useState(false);
  const [editType, setEditType] = useState<'project' | 'blog' | null>(null);
  const [formData, setFormData] = useState<any>({});

  // Error/Status State
  const [supabaseError, setSupabaseError] = useState<string | null>(null);

  // Export State
  const [showExport, setShowExport] = useState(false);
  const [exportCode, setExportCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    try {
      // Fetch projects from Supabase
      const supabaseProjects = await fetchFromTable('projects');
      
      // Transform Supabase data to match Project type
      const transformedProjects = supabaseProjects.map((p: any) => ({
        id: p.id.toString(),
        title: p.title,
        description: p.description,
        longDescription: p.long_description,
        thumbnail: p.image_url,
        technologies: p.technologies || [],
        type: p.type,
        liveUrl: p.url,
        githubUrl: p.github_url,
        achievements: p.achievements || []
      }));
      
      setProjects(transformedProjects);
      setSupabaseError(null);
    } catch (error) {
      console.error('Error fetching from Supabase:', error);
      setSupabaseError(error instanceof Error ? error.message : 'Unknown Supabase fetch error');
      // Fallback to localStorage if Supabase fails
      setProjects(getProjects());
    }
    
    // Blogs still use localStorage for now
    setBlogs(getBlogs());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '2285') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Access Key');
    }
  };

  const handleEdit = (item: any, type: 'project' | 'blog') => {
    setFormData({ ...item });
    setEditType(type);
    setIsEditing(true);
  };

  const handleCreate = (type: 'project' | 'blog') => {
    const id = Math.random().toString(36).substr(2, 9);
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    if (type === 'project') {
      setFormData({
        id,
        title: '',
        description: '',
        longDescription: '',
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800',
        technologies: [],
        type: 'web',
        liveUrl: '#',
        achievements: []
      });
    } else {
      setFormData({
        id,
        title: '',
        date: today,
        excerpt: '',
        author: '',
        readTimeMinutes: 5,
        content: '',
        image: 'https://images.unsplash.com/photo-1499750310159-5254f4cc157e?q=80&w=800',
        tags: []
      });
    }
    setEditType(type);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      if (editType === 'project') {
        // Transform to Supabase format
        const supabaseData = {
          title: formData.title,
          description: formData.description,
          long_description: formData.longDescription,
          image_url: formData.thumbnail,
          url: formData.liveUrl,
          github_url: formData.githubUrl,
          technologies: formData.technologies || [],
          type: formData.type,
          achievements: formData.achievements || []
        };

        // Check if this is an update or insert
        const existingProject = projects.find(p => p.id === formData.id);
        
        if (existingProject && !isNaN(Number(existingProject.id))) {
          // Update existing project in Supabase
          await updateInTable('projects', Number(existingProject.id), supabaseData);
        } else {
          // Insert new project to Supabase
          await insertIntoTable('projects', supabaseData);
        }
        
        setSupabaseError(null);
        alert('Project saved successfully to Supabase!');
      } else {
        saveBlog(formData as BlogPost);
        alert('Blog saved successfully!');
      }
      
      setIsEditing(false);
      refreshData();
    } catch (error) {
      console.error('Error saving:', error);
      setSupabaseError(error instanceof Error ? error.message : 'Failed to save');
      alert(`Error: ${error instanceof Error ? error.message : 'Failed to save'}`);
    }
  };

  const handleDelete = async (id: string, type: 'project' | 'blog') => {
    if (confirm('Are you sure you want to delete this?')) {
      try {
        if (type === 'project') {
          // Delete from Supabase
          await deleteFromTable('projects', Number(id));
          setSupabaseError(null);
          alert('Project deleted from Supabase!');
        } else {
          deleteBlog(id);
          alert('Blog deleted!');
        }
        refreshData();
      } catch (error) {
        console.error('Error deleting:', error);
        setSupabaseError(error instanceof Error ? error.message : 'Failed to delete');
        alert(`Error: ${error instanceof Error ? error.message : 'Failed to delete'}`);
      }
    }
  };

  const handleArrayInput = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value.split(',').map(s => s.trim()) });
  };

  const handleExport = () => {
    const dataName = activeTab === 'projects' ? 'PROJECTS' : 'BLOG_POSTS';
    const dataContent = activeTab === 'projects' ? projects : blogs;
    
    // Format the JSON to look like TypeScript code
    const jsonString = JSON.stringify(dataContent, null, 2);
    // Remove quotes from keys to make it look more like valid TS object properties (optional, but cleaner)
    const codeString = `export const ${dataName} = ${jsonString};`;
    
    setExportCode(codeString);
    setShowExport(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-[#121216] border border-white/10 rounded-3xl p-10 text-center">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-indigo-500" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Owner Access</h1>
          <p className="text-slate-400 mb-8">Please enter your secure access key.</p>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-center tracking-widest text-lg mb-6 focus:border-indigo-500 outline-none transition-colors"
              placeholder="••••"
            />
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition-all">
              Unlock Dashboard
            </button>
            <a href="#" className="block mt-6 text-sm text-slate-500 hover:text-white">Return Home</a>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {supabaseError && (
          <div className="mb-6 rounded-2xl border border-rose-500/40 bg-rose-900/20 text-rose-100 px-4 py-3 text-sm">
            Supabase error: {supabaseError}
          </div>
        )}
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-white/10">
              <ArrowLeft className="w-5 h-5" />
            </a>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={handleExport}
              className="px-4 py-2 bg-emerald-600/10 text-emerald-400 border border-emerald-600/20 rounded-xl text-sm font-bold hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-2"
            >
              <Code className="w-4 h-4" /> Get Code for Production
            </button>
            <div className="flex bg-white/5 p-1 rounded-xl">
              <button 
                onClick={() => setActiveTab('projects')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'projects' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveTab('blogs')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'blogs' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                Blogs
              </button>
            </div>
          </div>
        </div>

        {/* List View */}
        {!isEditing && !showExport && (
          <div className="space-y-4">
             <button 
              onClick={() => handleCreate(activeTab === 'projects' ? 'project' : 'blog')}
              className="w-full py-4 border-2 border-dashed border-white/10 rounded-2xl text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all flex items-center justify-center gap-2 font-medium mb-8"
            >
              <Plus className="w-5 h-5" /> Add New {activeTab === 'projects' ? 'Project' : 'Post'}
            </button>

            {activeTab === 'projects' ? (
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map(p => (
                  <div key={p.id} className="bg-[#121216] border border-white/5 p-6 rounded-2xl flex gap-4 group">
                    <img src={p.thumbnail} className="w-24 h-24 object-cover rounded-xl bg-white/5" />
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg line-clamp-1">{p.title}</h3>
                      <p className="text-slate-500 text-sm line-clamp-2 mb-4">{p.description}</p>
                      <div className="flex gap-2">
                        <button onClick={() => handleEdit(p, 'project')} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium text-white hover:bg-indigo-600 transition-colors flex items-center gap-1">
                          <Edit2 className="w-3 h-3" /> Edit
                        </button>
                        <button onClick={() => handleDelete(p.id, 'project')} className="px-3 py-1.5 bg-rose-500/10 rounded-lg text-xs font-medium text-rose-400 hover:bg-rose-500 hover:text-white transition-colors flex items-center gap-1">
                          <Trash2 className="w-3 h-3" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {blogs.map(b => (
                  <div key={b.id} className="bg-[#121216] border border-white/5 p-6 rounded-2xl flex gap-4 group">
                    <img src={b.image} className="w-24 h-24 object-cover rounded-xl bg-white/5" />
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg line-clamp-1">{b.title}</h3>
                      <p className="text-slate-500 text-sm mb-4">{b.date}</p>
                      <div className="flex gap-2">
                        <button onClick={() => handleEdit(b, 'blog')} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium text-white hover:bg-indigo-600 transition-colors flex items-center gap-1">
                          <Edit2 className="w-3 h-3" /> Edit
                        </button>
                        <button onClick={() => handleDelete(b.id, 'blog')} className="px-3 py-1.5 bg-rose-500/10 rounded-lg text-xs font-medium text-rose-400 hover:bg-rose-500 hover:text-white transition-colors flex items-center gap-1">
                          <Trash2 className="w-3 h-3" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Editor Form */}
        {isEditing && (
          <div className="bg-[#121216] border border-white/10 rounded-3xl p-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                {formData.id ? 'Edit' : 'Create'} {editType === 'project' ? 'Project' : 'Post'}
              </h2>
              <button onClick={() => setIsEditing(false)} className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid gap-6">
              {/* Common Fields */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Title</label>
                <input 
                  type="text" 
                  value={formData.title} 
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Image URL</label>
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    value={editType === 'project' ? formData.thumbnail : formData.image} 
                    onChange={(e) => setFormData({...formData, [editType === 'project' ? 'thumbnail' : 'image']: e.target.value})}
                    className="flex-1 bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none"
                  />
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                    <img src={editType === 'project' ? formData.thumbnail : formData.image} className="w-full h-full object-cover" alt="preview" onError={(e) => (e.target as HTMLImageElement).src = ''} />
                  </div>
                </div>
              </div>

              {/* Project Specifics */}
              {editType === 'project' && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Short Description</label>
                    <textarea 
                      value={formData.description} 
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none h-24"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Technologies (comma separated)</label>
                    <input 
                      type="text" 
                      value={formData.technologies?.join(', ') || ''} 
                      onChange={(e) => handleArrayInput('technologies', e.target.value)}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none"
                      placeholder="React, TypeScript, Tailwind..."
                    />
                  </div>
                   <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Achievements (comma separated)</label>
                    <input 
                      type="text" 
                      value={formData.achievements?.join(', ') || ''} 
                      onChange={(e) => handleArrayInput('achievements', e.target.value)}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none"
                      placeholder="Increased sales by 50%, Launched in 2 weeks..."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400">Live URL</label>
                      <input 
                        type="text" 
                        value={formData.liveUrl} 
                        onChange={(e) => setFormData({...formData, liveUrl: e.target.value})}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none"
                      />
                    </div>
                     <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400">Type</label>
                      <select 
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none"
                      >
                        <option value="web">Website</option>
                        <option value="app">Mobile App</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* Blog Specifics */}
              {editType === 'blog' && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Excerpt (Short Preview)</label>
                    <textarea 
                      value={formData.excerpt} 
                      onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none h-24"
                      placeholder="A short description that appears on the blog cards..."
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400">Author</label>
                      <input 
                        type="text" 
                        value={formData.author || ''}
                        onChange={(e) => setFormData({...formData, author: e.target.value})}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none"
                        placeholder="Who wrote this article?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400">Read Time (minutes)</label>
                      <input 
                        type="number" 
                        min={1}
                        value={formData.readTimeMinutes ?? ''}
                        onChange={(e) => setFormData({...formData, readTimeMinutes: Number(e.target.value) || undefined})}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none"
                        placeholder="e.g., 5"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Full Article Content</label>
                    <textarea 
                      value={formData.content || ''} 
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none h-64 font-mono text-sm"
                      placeholder="Full article text here... Use ## for headings, ### for subheadings, - for bullet points"
                    />
                    <p className="text-xs text-slate-500">Tip: Use ## for main headings, ### for subheadings, - for bullet points</p>
                  </div>
                   <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Tags (comma separated)</label>
                    <input 
                      type="text" 
                      value={formData.tags?.join(', ') || ''} 
                      onChange={(e) => handleArrayInput('tags', e.target.value)}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none"
                      placeholder="Business, Growth, SEO..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Date</label>
                    <input 
                      type="text" 
                      value={formData.date} 
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none"
                    />
                  </div>
                </>
              )}

              <div className="pt-6 flex gap-4">
                <button onClick={handleSave} className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                  <Save className="w-5 h-5" /> Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Export Modal */}
        {showExport && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-[#121216] border border-white/10 rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">Production Code</h2>
                  <p className="text-slate-400 text-sm">Copy this code and paste it into <code className="bg-white/10 px-1.5 py-0.5 rounded text-white font-mono">constants.tsx</code> to update your live site.</p>
                </div>
                <button onClick={() => setShowExport(false)} className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="relative">
                <pre className="w-full h-64 bg-black/50 border border-white/10 rounded-xl p-4 text-xs font-mono text-slate-300 overflow-y-auto whitespace-pre-wrap">
                  {exportCode}
                </pre>
                <button 
                  onClick={copyToClipboard}
                  className="absolute top-4 right-4 px-4 py-2 bg-white text-black rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-lg"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>
              </div>

              <div className="mt-6 flex justify-end">
                <button onClick={() => setShowExport(false)} className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-colors">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagePage;
