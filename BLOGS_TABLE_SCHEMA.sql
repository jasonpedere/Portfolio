-- Create blogs table in Supabase
-- Run this SQL in Supabase Dashboard > SQL Editor

CREATE TABLE blogs (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  author TEXT,
  read_time_minutes INTEGER,
  content TEXT NOT NULL,
  image TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable Row Level Security (RLS)
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON blogs
  FOR SELECT
  USING (true);

-- Allow authenticated insert/update/delete (optional - adjust as needed)
CREATE POLICY "Allow authenticated insert" ON blogs
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update" ON blogs
  FOR UPDATE
  USING (true);

CREATE POLICY "Allow authenticated delete" ON blogs
  FOR DELETE
  USING (true);
