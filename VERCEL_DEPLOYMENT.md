# Vercel Deployment Guide

## Prerequisites
1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI (optional): `npm i -g vercel`

## Environment Variables Setup
Before deploying, you need to add your environment variables in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - `VITE_API_KEY` - Your Gemini API key
   - `VITE_SUPABASE_URL` - Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## Deployment Options

### Option 1: Deploy via Vercel Dashboard (Recommended)
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel will auto-detect the Vite framework
4. Add your environment variables
5. Click "Deploy"

### Option 2: Deploy via CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### Option 3: Deploy via Git
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push to main branch

## Post-Deployment
- Your site will be available at: `https://your-project-name.vercel.app`
- Set up a custom domain in Vercel settings if desired
- Enable automatic deployments for your main branch

## Build Configuration
The project is configured with:
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: Vite
- Node Version: 18.x (default)

## Troubleshooting
- If build fails, check that all dependencies are in `package.json`
- Verify environment variables are set correctly
- Check build logs in Vercel dashboard for specific errors
