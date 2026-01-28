import { getSupabaseClient } from './supabaseService';
import { PROJECTS, BLOG_POSTS } from '../constants';

export const migrateProjectsToSupabase = async () => {
  try {
    console.log('Starting projects migration to Supabase...');
    console.log('Environment:', {
      url: import.meta.env.VITE_SUPABASE_URL,
      keyExists: !!import.meta.env.VITE_SUPABASE_ANON_KEY
    });
    
    const client = getSupabaseClient();
    console.log('Supabase client initialized');

    // Transform project data to match Supabase table structure
    const projectsToInsert = PROJECTS.map(project => ({
      title: project.title,
      description: project.description,
      long_description: project.longDescription,
      image_url: project.thumbnail,
      url: project.liveUrl,
      github_url: project.githubUrl,
      technologies: project.technologies,
      type: project.type,
      achievements: project.achievements
    }));

    console.log('Projects to insert:', projectsToInsert);

    // Insert all projects
    for (const project of projectsToInsert) {
      console.log(`Inserting project: ${project.title}`);
      
      const { data, error } = await client
        .from('projects')
        .insert([project])
        .select();

      if (error) {
        console.error(`Error inserting ${project.title}:`, error);
        throw error;
      }

      console.log(`✓ Migrated project: ${project.title}`, data);
    }

    console.log('✓ All projects migrated successfully!');
    return true;
  } catch (error) {
    console.error('Error migrating projects:', error);
    throw error;
  }
};

export const migrateBlogsToSupabase = async () => {
  try {
    console.log('Starting blogs migration to Supabase...');
    console.log('Environment:', {
      url: import.meta.env.VITE_SUPABASE_URL,
      keyExists: !!import.meta.env.VITE_SUPABASE_ANON_KEY
    });
    
    const client = getSupabaseClient();
    console.log('Supabase client initialized');

    // Transform blog data to match Supabase table structure
    const blogsToInsert = BLOG_POSTS.map(blog => ({
      title: blog.title,
      date: blog.date,
      excerpt: blog.excerpt,
      author: blog.author,
      read_time_minutes: blog.readTimeMinutes,
      content: blog.content,
      image: blog.image,
      tags: blog.tags
    }));

    console.log('Blogs to insert:', blogsToInsert);

    // Insert all blogs
    for (const blog of blogsToInsert) {
      console.log(`Inserting blog: ${blog.title}`);
      
      const { data, error } = await client
        .from('blogs')
        .insert([blog])
        .select();

      if (error) {
        console.error(`Error inserting ${blog.title}:`, error);
        throw error;
      }

      console.log(`✓ Migrated blog: ${blog.title}`, data);
    }

    console.log('✓ All blogs migrated successfully!');
    return true;
  } catch (error) {
    console.error('Error migrating blogs:', error);
    throw error;
  }
};
