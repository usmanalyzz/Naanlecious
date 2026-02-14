# 🚀 Deployment Guide for Naanlecious

This guide provides step-by-step instructions for deploying your Naanlecious landing page to various hosting platforms.

## Prerequisites

Before deploying, ensure you have:

- ✅ Node.js installed (v20.13.1 or higher)
- ✅ npm installed
- ✅ Git installed (for most platforms)
- ✅ All dependencies installed (`npm install`)
- ✅ Production build tested locally (`npm run build` && `npm run preview`)

## 🌐 Deployment Options

### 1. Vercel (Recommended) - Easiest & Free

**Why Vercel?** Built by the creators of Next.js, perfect for React apps, zero configuration.

#### Steps:

1. **Install Vercel CLI**:

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy**:

   ```bash
   cd /Users/usmanalyzz/Desktop/Naanlecious
   vercel
   ```

4. **Follow the prompts**:

   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: naanlecious (or your choice)
   - Directory: ./
   - Build settings: (accept defaults)

5. **Production deployment**:
   ```bash
   vercel --prod
   ```

**Alternative: Deploy via Vercel Dashboard**

1. Visit [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel auto-detects Vite configuration
5. Click "Deploy"

---

### 2. Netlify - Popular & Free

**Why Netlify?** Great for static sites, easy CI/CD, free SSL.

#### Via Netlify CLI:

1. **Install Netlify CLI**:

   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**:

   ```bash
   npm run build
   ```

3. **Deploy**:

   ```bash
   netlify deploy
   ```

4. **For production**:
   ```bash
   netlify deploy --prod
   ```

#### Via Netlify Dashboard:

1. Visit [netlify.com](https://netlify.com)
2. Click "Add new site" → "Deploy manually"
3. Build your project: `npm run build`
4. Drag and drop the `dist` folder
5. Your site is live!

**With Git Integration**:

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

---

### 3. GitHub Pages - Free Static Hosting

#### Steps:

1. **Install gh-pages package**:

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:

   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://YOUR_USERNAME.github.io/naanlecious"
   }
   ```

3. **Create a git repository** (if not already):

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

4. **Add remote and push**:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/naanlecious.git
   git push -u origin main
   ```

5. **Deploy**:

   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: gh-pages branch
   - Save

---

### 4. Firebase Hosting - Google's Platform

#### Steps:

1. **Install Firebase CLI**:

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:

   ```bash
   firebase login
   ```

3. **Initialize Firebase**:

   ```bash
   firebase init hosting
   ```

   Configuration:

   - Public directory: `dist`
   - Single-page app: Yes
   - Automatic builds with GitHub: (Optional) Yes

4. **Build your project**:

   ```bash
   npm run build
   ```

5. **Deploy**:
   ```bash
   firebase deploy
   ```

---

### 5. Railway - Full-Stack Platform

1. Visit [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Railway auto-detects Vite
4. Click "Deploy"
5. Your site is live with a custom domain!

---

### 6. Render - Modern Cloud Platform

1. Visit [render.com](https://render.com)
2. Click "New Static Site"
3. Connect your Git repository
4. Configuration:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Click "Create Static Site"

---

## 🔧 Pre-Deployment Checklist

- [ ] Test production build locally:
  ```bash
  npm run build
  npm run preview
  ```
- [ ] Check all links work correctly
- [ ] Verify all images load properly
- [ ] Test on mobile devices
- [ ] Test contact form (if backend integrated)
- [ ] Update meta tags and favicon
- [ ] Set up custom domain (if needed)
- [ ] Configure SSL certificate
- [ ] Set up analytics (Google Analytics, etc.)

---

## 🌍 Custom Domain Setup

Most platforms allow custom domains:

1. **Purchase a domain** (GoDaddy, Namecheap, Google Domains)
2. **Add domain to hosting platform**:
   - Vercel: Project Settings → Domains
   - Netlify: Site Settings → Domain Management
   - GitHub Pages: Repository Settings → Pages → Custom Domain
3. **Update DNS records**:
   - Add A records or CNAME records as instructed by platform
   - Wait for DNS propagation (up to 48 hours)

---

## 📊 Performance Optimization

Before deployment, optimize performance:

1. **Image Optimization**:

   - Use WebP format
   - Compress images
   - Use lazy loading

2. **Code Splitting**:

   - Already handled by Vite

3. **Caching**:

   - Configure in hosting platform

4. **Analytics**:
   - Add Google Analytics
   - Add Hotjar for user behavior

---

## 🔄 Continuous Deployment

Set up automatic deployments on Git push:

1. **Connect Git repository** to hosting platform
2. **Configure build settings**
3. **Every push to main branch** triggers deployment
4. **Preview deployments** for pull requests

---

## 🛠️ Environment Variables

If you need environment variables:

1. Create `.env` file (add to .gitignore)
2. Add variables with `VITE_` prefix:
   ```
   VITE_API_URL=https://api.naanlecious.com
   VITE_ANALYTICS_ID=UA-XXXXXXXXX
   ```
3. Access in code: `import.meta.env.VITE_API_URL`
4. Configure in hosting platform's dashboard

---

## 📱 Progressive Web App (PWA) - Optional

Convert to PWA for offline support:

```bash
npm install -D vite-plugin-pwa
```

Update `vite.config.js` with PWA configuration.

---

## 🎉 Post-Deployment

After successful deployment:

1. ✅ Test live site thoroughly
2. ✅ Submit sitemap to Google Search Console
3. ✅ Set up monitoring (Uptime Robot)
4. ✅ Share with team and stakeholders
5. ✅ Celebrate! 🎊

---

## 📞 Support

For deployment issues:

- Check platform documentation
- Visit platform's community forums
- Contact platform support

**Recommended Platform**: Vercel (easiest, fastest, best performance)

---

**Happy Deploying! 🚀**
