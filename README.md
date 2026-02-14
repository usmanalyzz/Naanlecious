# 🍕 Naanlecious - Restaurant Landing Page

A beautiful, modern, and fully responsive React.js landing page for Naanlecious - a trendy fast-food restaurant specializing in Pizza Naans, Burgers, Wraps, and more!

## ✨ Features

- **Modern Design**: Clean, vibrant, and eye-catching layout with food-themed colors (orange, red, yellow)
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **Contact Modal**: Beautiful popup showing all contact methods (Phone, WhatsApp, Email, Location)
- **Component-Based**: Well-structured React components for easy maintenance
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🎨 Sections

1. **Navbar** - Sticky navigation with logo and smooth scrolling links
2. **Hero Section** - Eye-catching banner with tagline and CTA buttons
3. **Menu Preview** - Interactive grid showcasing 6 menu categories with images and prices
4. **About Section** - Brand story and unique value propositions
5. **Testimonials** - Customer reviews with ratings and photos
6. **Contact Section** - Contact information, contact form, and social media links
7. **Footer** - Quick links, menu categories, and contact details

## 🛠️ Tech Stack

- **Framework**: React.js 19.1.1 (Vite 7.1.12)
- **Styling**: Tailwind CSS v3.4.18
- **Animations**: Framer Motion 12.23.24
- **Icons**: Lucide React 0.548.0
- **Images**: Unsplash (placeholder images)

## 📦 Installation

1. **Clone or navigate to the project directory**:

   ```bash
   cd /Users/usmanalyzz/Desktop/Naanlecious
   ```

2. **Install dependencies** (if not already installed):

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🚀 Build for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready for deployment.

## 📱 Responsive Design

The landing page is fully responsive and looks great on:

- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1440px and up)

## 🎨 Color Palette

- **Primary (Orange)**: #f97316 - Warmth and appetite appeal
- **Secondary (Red)**: #ef4444 - Energy and passion
- **Accent (Yellow)**: #eab308 - Happiness and positivity
- **Background**: Gradient combinations of orange, red, and yellow tones

## 🔧 Customization

### Updating Images

Replace placeholder image URLs in the component files:

- `Hero.jsx` - Hero section image
- `Menu.jsx` - Menu item images
- `About.jsx` - About section image
- `Testimonials.jsx` - Customer profile images

### Modifying Colors

Edit the color scheme in `tailwind.config.js` under the `theme.extend.colors` section.

### Changing Content

Update text, prices, and information directly in the respective component files in the `src/components/` directory.

## 📂 Project Structure

```
Naanlecious/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🌟 Key Features Breakdown

### Navbar

- Sticky navigation that changes style on scroll
- Mobile-responsive hamburger menu
- Smooth scroll to sections
- Animated logo and links

### Hero Section

- Animated background gradients
- Floating food cards
- Call-to-action buttons
- Statistics display (menu items, customers, rating)

### Menu Section

- 6 menu categories with images
- Hover effects on cards
- Price display
- Contact CTA to place orders

### About Section

- Brand storytelling
- 4 key features with icons
- High-quality imagery
- Animated statistics card

### Testimonials

- 3 customer reviews
- Star ratings
- Customer photos
- Average rating display

### Contact Section

- Contact information cards
- Working contact form (needs backend integration)
- Social media links
- Map placeholder (ready for Google Maps integration)

### Footer

- Multi-column layout
- Quick links and menu categories
- Contact information
- Social media links
- Animated heart icon

## 🔧 Troubleshooting

### Tailwind CSS PostCSS Error

If you encounter an error about `tailwindcss` and PostCSS plugin:

```bash
# Make sure you have Tailwind CSS v3 installed (not v4)
npm uninstall tailwindcss
npm install -D tailwindcss@3.4.17
```

Tailwind CSS v4 has different requirements. This project is configured for v3.

### Port Already in Use

Vite will automatically use the next available port if 5173 is occupied.

### Node Version Warning

The project works with Node.js 20.13.1, though you may see warnings about requiring 20.19+. These are just warnings and can be safely ignored.

---

## 🔮 Future Enhancements

- [ ] Integrate backend API for contact form
- [ ] Add Google Maps integration
- [ ] Implement online ordering system (e-commerce integration)
- [ ] Add shopping cart functionality
- [ ] Include real-time order tracking
- [ ] Integrate with delivery services (Uber Eats, DoorDash)
- [ ] Add blog section for recipes and news
- [ ] Implement newsletter signup
- [ ] Add multi-language support
- [ ] Add reservation system for dine-in

## 📄 License

This project is created for Naanlecious restaurant.

## 🤝 Support

For any questions or support, please contact:

- 📧 Email: hello@naanlecious.com
- 📱 Phone: +1 (555) 123-4567

---

**Made with ❤️ by the Naanlecious Team**

Enjoy your delicious journey! 🍕🍔🥤
# Naanlecious
