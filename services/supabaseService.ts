import { createClient, SupabaseClient } from '@supabase/supabase-js';

const getSupabaseUrl = () => {
  return import.meta.env.VITE_SUPABASE_URL || '';
};

const getSupabaseAnonKey = () => {
  return import.meta.env.VITE_SUPABASE_ANON_KEY || '';
};

let supabase: SupabaseClient | null = null;

export const initializeSupabase = (): SupabaseClient => {
  const url = getSupabaseUrl();
  const key = getSupabaseAnonKey();

  if (!url || !key) {
    throw new Error(
      'Missing Supabase configuration. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.'
    );
  }

  if (!supabase) {
    supabase = createClient(url, key);
  }

  return supabase;
};

export const getSupabaseClient = (): SupabaseClient => {
  if (!supabase) {
    return initializeSupabase();
  }
  return supabase;
};

// Example functions for common operations
export const signUp = async (email: string, password: string) => {
  const client = getSupabaseClient();
  const { data, error } = await client.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const signIn = async (email: string, password: string) => {
  const client = getSupabaseClient();
  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const signOut = async () => {
  const client = getSupabaseClient();
  const { error } = await client.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = async () => {
  const client = getSupabaseClient();
  const { data, error } = await client.auth.getUser();

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return data.user;
};

export const getSession = async () => {
  const client = getSupabaseClient();
  const { data, error } = await client.auth.getSession();

  if (error) {
    console.error('Error fetching session:', error);
    return null;
  }

  return data.session;
};

// Generic functions for working with tables
export const fetchFromTable = async (
  tableName: string,
  options?: {
    select?: string;
    filters?: Record<string, any>;
    limit?: number;
    offset?: number;
  }
) => {
  const client = getSupabaseClient();
  let query = client.from(tableName).select(options?.select || '*');

  // Apply filters
  if (options?.filters) {
    Object.entries(options.filters).forEach(([key, value]) => {
      query = query.eq(key, value);
    });
  }

  // Apply pagination
  if (options?.limit) {
    query = query.limit(options.limit);
  }
  if (options?.offset) {
    query = query.range(options.offset, options.offset + (options?.limit || 10) - 1);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const insertIntoTable = async (tableName: string, data: Record<string, any>) => {
  const client = getSupabaseClient();
  const { data: result, error } = await client.from(tableName).insert([data]).select();

  if (error) {
    throw new Error(error.message);
  }

  return result;
};

export const updateInTable = async (
  tableName: string,
  id: string | number,
  data: Record<string, any>
) => {
  const client = getSupabaseClient();
  const { data: result, error } = await client
    .from(tableName)
    .update(data)
    .eq('id', id)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return result;
};

export const deleteFromTable = async (tableName: string, id: string | number) => {
  const client = getSupabaseClient();
  const { error } = await client.from(tableName).delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
};
