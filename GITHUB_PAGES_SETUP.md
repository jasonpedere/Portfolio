# GitHub Pages Setup Instructions

Your project is now configured for GitHub Pages deployment. Here's what has been done:

## Changes Made

1. **vite.config.ts** - Added `base: '/Portfolio/'` configuration
   - This ensures assets load correctly from the GitHub Pages subdirectory
   - **Note:** If your repository name is different, update this path accordingly

2. **package.json** - Added deploy script
   - Run `npm run deploy` to build and deploy locally using gh-pages

3. **.github/workflows/deploy.yml** - Created automated deployment workflow
   - Automatically builds and deploys on push to `main` or `master` branch

## Setup Steps

### 1. Configure GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to **Settings → Pages**
3. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
   - This will use the automated workflow we created

### 2. Install gh-pages (Optional - for local deployment)

If you want to deploy manually from your machine:

```bash
npm install --save-dev gh-pages
```

### 3. Deploy Your Project

**Option A: Automatic Deployment (Recommended)**
- Push to `main` or `master` branch - GitHub Actions will deploy automatically

**Option B: Manual Deployment**
```bash
npm run deploy
```

### 4. Update Base Path (If Needed)

If your repository name is NOT "Portfolio", update the `base` path in `vite.config.ts`:

```typescript
base: '/YOUR-REPO-NAME/',
```

## Verify Deployment

After deployment:
1. Go to your GitHub repository settings → Pages
2. You'll see a link like `https://yourusername.github.io/Portfolio/`
3. Click the link to view your deployed site

## Troubleshooting

- **Assets not loading?** Check that the `base` path in `vite.config.ts` matches your repository name
- **Pages not found?** Enable GitHub Pages in repository settings under Pages → Source: GitHub Actions
- **Deployment failed?** Check the Actions tab in your GitHub repository for error logs
