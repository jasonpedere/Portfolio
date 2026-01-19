
import { PROJECTS, BLOG_POSTS } from '../constants';
import { Project, BlogPost } from '../types';

const STORAGE_KEYS = {
  PROJECTS: 'json_pedere_projects',
  BLOGS: 'json_pedere_blogs'
};

// --- Projects Manager ---
export const getProjects = (): Project[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.PROJECTS);
  if (!stored) {
    // Initialize with default constants if empty
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(PROJECTS));
    return PROJECTS;
  }
  return JSON.parse(stored);
};

export const saveProject = (project: Project) => {
  const projects = getProjects();
  const index = projects.findIndex(p => p.id === project.id);
  
  if (index >= 0) {
    projects[index] = project; // Update
  } else {
    projects.unshift(project); // Add new to top
  }
  
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  // Dispatch event to update UI instantly
  window.dispatchEvent(new Event('projectsUpdated'));
};

export const deleteProject = (id: string) => {
  const projects = getProjects().filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  window.dispatchEvent(new Event('projectsUpdated'));
};

// --- Blogs Manager ---
export const getBlogs = (): BlogPost[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.BLOGS);
  if (!stored) {
    localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(BLOG_POSTS));
    return BLOG_POSTS;
  }
  return JSON.parse(stored);
};

export const saveBlog = (blog: BlogPost) => {
  const blogs = getBlogs();
  const index = blogs.findIndex(b => b.id === blog.id);
  
  if (index >= 0) {
    blogs[index] = blog;
  } else {
    blogs.unshift(blog);
  }
  
  localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(blogs));
  window.dispatchEvent(new Event('blogsUpdated'));
};

export const deleteBlog = (id: string) => {
  const blogs = getBlogs().filter(b => b.id !== id);
  localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(blogs));
  window.dispatchEvent(new Event('blogsUpdated'));
};
