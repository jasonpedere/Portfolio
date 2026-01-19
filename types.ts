
export type ProjectType = 'web' | 'app' | 'all';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  technologies: string[];
  type: ProjectType;
  liveUrl?: string;
  githubUrl?: string;
  achievements?: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'devops' | 'mobile';
  level: number; // 0 to 100
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  company: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
}
