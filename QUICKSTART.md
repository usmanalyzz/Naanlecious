# 🚀 Quick Start Guide - Naanlecious

Get your Naanlecious landing page up and running in minutes!

## ⚡ Quick Setup (3 Steps)

### 1️⃣ Verify Installation

You should already have all dependencies installed. If not:

```bash
cd /Users/usmanalyzz/Desktop/Naanlecious
npm install
```

### 2️⃣ Start Development Server

```bash
npm run dev
```

### 3️⃣ Open in Browser

Visit: **http://localhost:5173**

That's it! 🎉 Your site is now running locally.

---

## 📝 Available Commands

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Create production-ready build in `dist/` |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint to check code quality         |

---

## 🎨 Customization Quick Guide

### Change Colors

Edit `tailwind.config.js` → `theme.extend.colors`

### Update Menu Items

Edit `src/components/Menu.jsx` → `menuItems` array

### Change Images

Replace URLs in component files:

- Hero: `src/components/Hero.jsx`
- Menu: `src/components/Menu.jsx`
- About: `src/components/About.jsx`
- Testimonials: `src/components/Testimonials.jsx`

### Update Contact Info

Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`

### Modify Text Content

Each section has its content in its respective component file in `src/components/`

---

## 🌐 Make It Live

### Option 1: Vercel (Easiest)

```bash
npm install -g vercel
vercel
```

### Option 2: Netlify

```bash
npm run build
# Then drag & drop 'dist' folder to netlify.com
```

See `DEPLOYMENT.md` for detailed deployment instructions.

---

## 📱 Testing on Mobile

### View on Your Phone (Same Network)

1. Find your computer's local IP: `ifconfig` (Mac/Linux) or `ipconfig` (Windows)
2. Start dev server: `npm run dev`
3. On phone, visit: `http://YOUR_IP:5173`

---

## 🆘 Troubleshooting

### Port Already in Use?

```bash
# Vite will automatically use next available port
# Or manually specify:
npm run dev -- --port 3000
```

### Dependencies Not Working?

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors?

```bash
npm run lint
# Fix any errors shown
```

### Tailwind CSS PostCSS Error?

If you see an error about PostCSS plugin:

```bash
# Ensure you're using Tailwind v3 (not v4)
npm uninstall tailwindcss
npm install -D tailwindcss@3.4.17
npm run dev
```

---

## 📂 Project Structure Overview

```
src/
├── components/          # All React components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section with CTA
│   ├── Menu.jsx        # Menu showcase
│   ├── About.jsx       # About section
│   ├── Testimonials.jsx # Customer reviews
│   ├── Contact.jsx     # Contact form & info
│   └── Footer.jsx      # Footer
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles + Tailwind
```

---

## ✨ Features Checklist

- [x] Responsive design (mobile, tablet, desktop)
- [x] Smooth animations (Framer Motion)
- [x] Modern UI with Tailwind CSS
- [x] Interactive components
- [x] Food imagery
- [x] Contact form (ready for backend)
- [x] Social media links
- [x] SEO-friendly structure
- [x] Fast loading (Vite optimization)

---

## 🎯 Next Steps

1. ✅ **Replace placeholder images** with actual restaurant photos
2. ✅ **Update menu items** with real prices and descriptions
3. ✅ **Customize colors** to match your exact brand
4. ✅ **Add your logo** (replace Pizza icon in Navbar)
5. ✅ **Connect contact form** to backend/email service
6. ✅ **Deploy to production** (see DEPLOYMENT.md)
7. ✅ **Set up custom domain**
8. ✅ **Add Google Analytics**

---

## 💡 Pro Tips

- **Hot Reload**: Save any file and see changes instantly
- **Component-based**: Each section is a separate component for easy editing
- **Tailwind**: Use utility classes for quick styling changes
- **Icons**: All icons from Lucide React (300+ available)
- **Animations**: Framer Motion provides smooth, performant animations

---

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 🎉 You're All Set!

Your beautiful Naanlecious landing page is ready to wow your customers!

**Need Help?** Check the README.md or DEPLOYMENT.md files.

---

**Happy Coding! 🍕**
