
import React from 'react';
import { Project, Skill, Testimonial, BlogPost } from './types';
import { 
  Mail,
  Linkedin, 
  Twitter,
  Utensils,
  Store,
  Smartphone
} from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Bella Italia Ristorante',
    description: 'A complete online presence with digital menu, table reservation system, and location map.',
    longDescription: 'Created a high-converting website for a local Italian restaurant. Features include a mobile-friendly menu, easy reservation form, and integration with Google Maps to help customers find them easily.',
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7ed9d42339?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Mobile Optimized', 'Reservation System', 'SEO Ready'],
    type: 'web',
    liveUrl: '#',
    githubUrl: '#',
    achievements: ['Increased online bookings by 40%', 'First page of Google for "Italian food nearby"']
  },
  {
    id: '2',
    title: 'Modern Threads Boutique',
    description: 'A clean, elegant online shop for a local fashion store to sell products beyond their physical location.',
    longDescription: 'Built a simple e-commerce store allowing a local boutique to reach customers nationwide. Integrated secure payments and an easy-to-use product management system.',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    technologies: ['E-commerce', 'Secure Payments', 'Inventory Management'],
    type: 'web',
    liveUrl: '#',
    githubUrl: '#',
    achievements: ['Sales increased by 25% in 3 months', 'Simplified shipping workflow']
  },
  {
    id: '3',
    title: 'QuickDine Mobile App',
    description: 'A custom loyalty and ordering app for a local coffee shop chain.',
    longDescription: 'Developed a lightweight mobile app for a local coffee business to handle pre-orders and reward loyal customers with points.',
    thumbnail: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
    technologies: ['iOS & Android', 'Push Notifications', 'Loyalty System'],
    type: 'app',
    liveUrl: '#',
    githubUrl: '#',
    achievements: ['5,000+ active app users', 'Reduced morning wait times by 15 mins']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Mobile-First Design', category: 'design', level: 100 },
  { name: 'Online Ordering Setup', category: 'frontend', level: 95 },
  { name: 'Google Search (SEO)', category: 'devops', level: 90 },
  { name: 'Secure Online Payments', category: 'backend', level: 95 },
  { name: 'Customer Chat Systems', category: 'mobile', level: 85 },
  { name: 'Easy Website Updates', category: 'design', level: 98 }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Giovanni Rossi',
    role: 'Owner',
    company: 'The Pasta House',
    content: 'Our new website has changed our business. We get more reservations than ever, and customers love seeing the menu on their phones.',
    avatar: 'https://i.pravatar.cc/150?u=giovanni'
  },
  {
    name: 'Emma Walters',
    role: 'Manager',
    company: 'Blue Sky Retail',
    content: 'Working with this developer was so easy. No technical talk—just results that helped us sell more products online.',
    avatar: 'https://i.pravatar.cc/150?u=emma'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Why Every Local Store Needs a Website in 2025',
    date: 'Jan 15, 2025',
    excerpt: 'Simple tips on how to appear on Google when local customers search for your products.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
    tags: ['Business Tips', 'Growth']
  },
  {
    id: 'b2',
    title: 'How to Take Reservations Online for Free',
    date: 'Dec 20, 2024',
    excerpt: 'Stop paying high fees for reservation software. Here is a better way to manage your tables.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop',
    tags: ['Restaurants', 'Savings']
  }
];

export const SOCIALS = [
  { name: 'Email', icon: <Mail className="w-5 h-5" />, url: 'mailto:hello@example.com' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: '#' },
  { name: 'Instagram', icon: <Twitter className="w-5 h-5" />, url: '#' }
];

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Recent Work', href: '#recent-work' },
  { label: 'About', href: '#about' },
  { label: 'Tips', href: '#tips' },
  { label: 'Get Started', href: '#contact' }
];
