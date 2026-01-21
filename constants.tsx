
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
    title: 'Restaurant',
    description: 'A complete online presence with digital menu, table reservation system, and location map.',
    longDescription: 'Created a high-converting website for a local Italian restaurant. Features include a mobile-friendly menu, easy reservation form, and integration with Google Maps to help customers find them easily.',
    thumbnail: 'https://i.imgur.com/RW4r5D9.png',
    technologies: ['Mobile Optimized', 'Reservation System', 'SEO Ready'],
    type: 'web',
    liveUrl: 'https://restaurant-eight-dun.vercel.app/',
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
    author: 'Json Pedere',
    readTimeMinutes: 6,
    content: `In today's digital age, having a website is no longer optional for local businesses—it's essential. Here's why:\n\n## Visibility on Google\n\nWhen potential customers search for products or services "near me," you want your business to show up. A professional website with proper SEO helps you rank higher in local search results, making it easier for customers to find you.\n\n## 24/7 Information Hub\n\nYour website works around the clock, providing customers with your hours, location, menu or product catalog, and contact information—even when your store is closed. This convenience can be the difference between gaining or losing a customer.\n\n## Build Trust and Credibility\n\nCustomers expect legitimate businesses to have an online presence. A professional website signals that you're established, trustworthy, and serious about your business. It's often the first impression potential customers will have of you.\n\n## Compete with Larger Chains\n\nA well-designed website levels the playing field, allowing small local businesses to compete with larger chains. You can showcase what makes you unique—your personalized service, community involvement, or specialty products.\n\n## Getting Started\n\nThe good news? You don't need a massive budget or technical skills. Start with a simple, clean website that includes:\n- Your business name, logo, and tagline\n- Contact information and location map\n- Your products or services\n- Customer testimonials\n- A way for customers to reach you\n\nReady to take your local business online? Let's talk about creating a simple, effective website that brings you more customers.`,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
    tags: ['Business Tips', 'Growth']
  },
  {
    id: 'b2',
    title: 'How to Take Reservations Online for Free',
    date: 'Dec 20, 2024',
    excerpt: 'Stop paying high fees for reservation software. Here is a better way to manage your tables.',
    author: 'Json Pedere',
    readTimeMinutes: 7,
    content: `Managing restaurant reservations doesn't have to be expensive. Here are practical, budget-friendly solutions:\n\n## The Problem with Expensive Software\n\nMany restaurants pay $50-300/month for reservation management systems. While these platforms offer features, small restaurants often don't need the complexity—they just need a simple way to take bookings.\n\n## Free and Low-Cost Alternatives\n\n### 1. Google Forms + Google Sheets\nCreate a simple reservation form using Google Forms. Responses automatically populate a Google Sheet, giving you an organized reservation list. It's completely free and easy to manage.\n\n### 2. Built-In Website Forms\nAdd a reservation form directly to your website. Customers fill it out, and you receive an email notification. No third-party fees, and customers stay on your site.\n\n### 3. Social Media Bookings\nMany restaurants successfully take reservations via Facebook Messenger or Instagram DMs. While not automated, it's personal and costs nothing.\n\n## What You Really Need\n\nFor most small to medium restaurants, you need:\n- A way for customers to submit booking requests\n- Email/SMS notifications when bookings arrive\n- A simple calendar or spreadsheet to track reservations\n- Optional: Automated confirmation messages\n\n## Adding Professional Touch\n\nYou can create a professional reservation experience without expensive software:\n- Set up auto-reply emails confirming receipt\n- Use a free calendar tool to prevent double-bookings\n- Send reminder messages the day before\n\n## When to Upgrade\n\nConsider paid software if you:\n- Handle 100+ reservations per week\n- Need complex table management\n- Want integrated payment deposits\n- Require advanced analytics\n\nFor most local restaurants starting out or operating at moderate capacity, simple free tools work perfectly well.\n\nWant help setting up a free reservation system for your restaurant? I can build it into your website at no extra cost.`,
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
