# Supabase Backend Configuration Guide

## Overview
This guide will help you set up Supabase as your backend for the Portfolio project.

## What is Supabase?
Supabase is an open-source Firebase alternative that provides:
- **Authentication**: User sign-up, login, and session management
- **Database**: PostgreSQL-based relational database
- **Real-time Updates**: Live data subscriptions
- **Storage**: File and media storage
- **Edge Functions**: Serverless functions

## Step 1: Create a Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Sign up or log in with your account
3. Click "New Project"
4. Fill in the project details:
   - **Name**: Your project name (e.g., "Portfolio Backend")
   - **Database Password**: Create a strong password
   - **Region**: Choose the region closest to your users
5. Click "Create new project" and wait for it to initialize (2-5 minutes)

## Step 2: Get Your Credentials

1. Once your project is created, go to **Settings > API**
2. Copy the following values:
   - **Project URL**: This is your `VITE_SUPABASE_URL`
   - **anon public**: This is your `VITE_SUPABASE_ANON_KEY`

## Step 3: Configure Your Environment

1. Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and replace the placeholders:
   ```
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   GEMINI_API_KEY=your-gemini-key-here
   ```

3. Make sure `.env.local` is added to `.gitignore` (it should be by default)

## Step 4: Install Dependencies

```bash
npm install
```

This will install the Supabase client library.

## Step 5: Create Your First Table (Optional)

To create a table in Supabase:

1. Go to your Supabase dashboard
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**
4. Run this example to create a `projects` table:

```sql
CREATE TABLE projects (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  description TEXT,
  url TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW()) NOT NULL
);

-- Enable RLS (Row Level Security)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "public_read_projects" ON projects
  FOR SELECT USING (true);
```

## Step 6: Use Supabase in Your Components

### Example 1: Fetch Data

```typescript
import { fetchFromTable } from '@/services/supabaseService';

const projects = await fetchFromTable('projects', {
  select: 'id, title, description, url',
  limit: 10
});
```

### Example 2: Insert Data

```typescript
import { insertIntoTable } from '@/services/supabaseService';

const newProject = await insertIntoTable('projects', {
  title: 'My Project',
  description: 'A cool project',
  url: 'https://example.com'
});
```

### Example 3: Authentication

```typescript
import { signUp, signIn, getCurrentUser } from '@/services/supabaseService';

// Sign up
const { user } = await signUp('user@example.com', 'password123');

// Sign in
const session = await signIn('user@example.com', 'password123');

// Get current user
const user = await getCurrentUser();
```

## Available Functions in supabaseService.ts

### Authentication
- `signUp(email, password)` - Create a new user account
- `signIn(email, password)` - Log in a user
- `signOut()` - Log out the current user
- `getCurrentUser()` - Get the currently authenticated user
- `getSession()` - Get the current session

### Database Operations
- `fetchFromTable(tableName, options)` - Query data from a table
- `insertIntoTable(tableName, data)` - Insert a new row
- `updateInTable(tableName, id, data)` - Update an existing row
- `deleteFromTable(tableName, id)` - Delete a row

## Security Tips

1. **Never commit `.env.local`** - It contains sensitive keys
2. **Use Row Level Security (RLS)** - Enable RLS on your tables in Supabase
3. **Limit public access** - Only make tables public if necessary
4. **Rotate keys regularly** - Go to Settings > API to regenerate keys if compromised
5. **Use service role key carefully** - Only on the server side, never expose in frontend code

## Common Tasks

### Enable Email Authentication
1. Go to **Authentication > Providers** in your Supabase dashboard
2. Enable "Email" provider
3. Configure email settings (optional)

### Add a Phone Column to Users
In your SQL Editor:
```sql
ALTER TABLE public.profiles ADD COLUMN phone TEXT;
```

### Real-time Updates (Advanced)
```typescript
const client = getSupabaseClient();

client
  .from('projects')
  .on('*', (payload) => {
    console.log('Change received!', payload)
  })
  .subscribe()
```

## Troubleshooting

**Error: Missing Supabase configuration**
- Make sure `.env.local` file exists with correct keys
- Restart your dev server after adding env variables

**CORS errors**
- Go to Supabase dashboard > Settings > API
- Check your CORS configuration
- Add your domain to allowed origins if needed

**Authentication not working**
- Enable Email provider in Supabase dashboard
- Check that user email is confirmed
- Verify VITE_SUPABASE_ANON_KEY is correct

## Next Steps

1. ✅ Create a Supabase project
2. ✅ Configure environment variables
3. ✅ Create your database tables
4. ✅ Set up authentication (optional)
5. ✅ Integrate with your React components

For more information, visit the [Supabase Documentation](https://supabase.com/docs)
