# Vizax - Conference Website Solutions Setup Guide

## 🎉 Project Overview

This is a modern, fully customized React + TypeScript + Vite website for **Vizax**, a professional conference website solutions provider. The project features:

- ✅ Complete brand customization (Vizax branding throughout)
- ✅ React Router DOM for multi-page navigation
- ✅ Three main pages: Home, Products, About
- ✅ PayPal payment integration
- ✅ Responsive design with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ Modern dark theme aesthetic

## 📋 Tech Stack

- **React**: 19.1.1
- **TypeScript**: 5.8.3
- **Vite**: 7.1.0
- **Tailwind CSS**: 4.1.11
- **Framer Motion**: 12.23.12
- **React Router DOM**: Latest
- **PayPal React SDK**: @paypal/react-paypal-js
- **Lucide React**: 0.539.0 (for icons)

## 🚀 Setup and Installation

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React and React DOM
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- PayPal SDK
- Lucide React icons

### 2. Verify Build

```bash
npm run build
```

Expected output: Successful build with no errors

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at: **http://localhost:5173/**

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Ecombinators/
├── src/
│   ├── components/
│   │   ├── InteractiveLayer.tsx    # Animated background effects
│   │   ├── Layout.tsx               # Main layout with Navbar & Footer
│   │   └── PayPalPayment.tsx        # PayPal payment component
│   ├── pages/
│   │   ├── Home.tsx                 # Home page with all sections
│   │   ├── Products.tsx             # Products showcase page
│   │   └── About.tsx                # About us page
│   ├── App.tsx                      # Main app with routing
│   ├── main.tsx                     # Entry point
│   └── styles.css                   # Global styles
├── index.html                       # HTML template
├── package.json                     # Dependencies
├── tailwind.config.ts               # Tailwind configuration
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
├── PAYPAL_INTEGRATION_GUIDE.md      # PayPal setup guide
└── SETUP_GUIDE.md                   # This file
```

## 🎨 Brand Customization Completed

All instances of "The Ecombinators" have been replaced with "Vizax":

### Updated Files:
- ✅ `package.json` - Project name
- ✅ `index.html` - Title, meta tags, descriptions
- ✅ `src/App.tsx` - All components and content
- ✅ `src/pages/Home.tsx` - Hero, services, testimonials
- ✅ `src/components/Layout.tsx` - Navbar and Footer

### Contact Information:
- **Email**: team@vizax.tech
- **Phone**: +1 (555) 123-4567
- **Website**: vizax.tech

### Content Updates:
- Hero section emphasizes conference website solutions
- Features focused on conference management capabilities
- Live examples of conference websites
- All meta tags optimized for conference solutions

## 🗺️ Navigation Structure

### Main Routes:
- `/` - Home page (Hero, Live Examples, Features, Contact)
- `/pricing` - Pricing page (Conference website packages)
- `/about` - About page (Mission, values, team)

### Navigation Links:
The navbar includes:
- Home
- About
- Pricing
- Features (anchor link)
- Contact (anchor link)

## 💳 PayPal Integration

### Setup Steps:

1. **Get PayPal Credentials**:
   - Create account at https://developer.paypal.com/
   - Get your Client ID from the dashboard

2. **Configure Environment**:
   ```bash
   # Create .env file in root directory
   echo "REACT_APP_PAYPAL_CLIENT_ID=your_client_id_here" > .env
   ```

3. **Use the Component**:
   ```tsx
   import PayPalPayment from './components/PayPalPayment'
   
   <PayPalPayment
     amount="99.99"
     description="AI Consultation"
     onSuccess={(details) => console.log('Success:', details)}
     onError={(error) => console.error('Error:', error)}
   />
   ```

4. **Full Documentation**:
   See `PAYPAL_INTEGRATION_GUIDE.md` for complete integration details

## 🎯 Key Features

### Home Page (`/`)
- **Hero Section**: Compelling AI-focused headline
- **Services**: 4 AI service offerings
- **Case Studies**: 3 project examples with metrics
- **Why Us**: 4 value propositions
- **Testimonials**: 3 client testimonials
- **Contact Form**: With email and phone

### Products Page (`/products`)
- 6 AI product offerings
- Feature lists for each product
- Category tags
- Call-to-action section

### About Page (`/about`)
- Company mission and vision
- Key statistics (4 metrics)
- Core values (4 values)
- Team members (4 profiles)
- Join us CTA

## 🎨 Design System

### Colors:
- **Primary Accent**: `#00C2FF` (Cyan)
- **Background**: Dark gradient (`#080B10` to `#0E1117`)
- **Text**: White with various opacity levels

### Typography:
- **Font Family**: Inter (Google Fonts)
- **Headings**: Extrabold (800)
- **Body**: Regular (400) and Medium (500)

### Components:
- **Cards**: Glassmorphism effect with hover animations
- **Buttons**: Gradient primary, outlined secondary
- **Forms**: Dark inputs with accent focus rings

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npx tsc --noEmit
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components adapt gracefully to different screen sizes.

## ✨ Animations

Powered by Framer Motion:
- **Fade-in animations**: On scroll
- **Hover effects**: Scale and translate
- **Page transitions**: Smooth routing
- **Interactive background**: Cursor-following glow

## 🔒 Security Notes

1. **Environment Variables**: Never commit `.env` files
2. **PayPal**: Use sandbox for development, live for production
3. **API Keys**: Store securely, never in client code
4. **HTTPS**: Required for production PayPal integration

## 🚢 Deployment

### Build for Production:
```bash
npm run build
```

Output will be in the `dist/` directory.

### Deploy to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Use `gh-pages` package
- **Custom Server**: Serve `dist/` directory

### Environment Variables for Production:
Set these in your hosting platform:
- `REACT_APP_PAYPAL_CLIENT_ID` - Your live PayPal Client ID

## 📝 Customization Guide

### Update Contact Information:
Edit `src/pages/Home.tsx` and `src/components/Layout.tsx`:
```tsx
<Mail /> team@vizax.tech
<Phone /> +1 (555) 123-4567
```

### Add New Pages:
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add link in `src/components/Layout.tsx`

### Modify Services:
Edit the `services` array in `src/pages/Home.tsx`

### Update Team Members:
Edit the `teamMembers` array in `src/pages/About.tsx`

## 🐛 Troubleshooting

### Build Errors:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors:
```bash
# Check types
npx tsc --noEmit
```

### Tailwind Not Working:
```bash
# Rebuild
npm run build
```

### PayPal Buttons Not Showing:
- Check Client ID in `.env`
- Verify PayPal script loaded (browser console)
- Ensure amount is string format: "99.99"

## 📞 Support

For questions or issues:
- **Email**: team@vizax.tech
- **Documentation**: See `PAYPAL_INTEGRATION_GUIDE.md`

## 🎓 Next Steps

1. ✅ **Setup Complete** - All dependencies installed
2. ✅ **Brand Customized** - Vizax branding applied
3. ✅ **Pages Created** - Home, Products, About
4. ✅ **Routing Added** - React Router configured
5. ✅ **PayPal Integrated** - Payment component ready

### Recommended Next Actions:
- [ ] Add your PayPal Client ID to `.env`
- [ ] Test all pages and navigation
- [ ] Customize content for your specific needs
- [ ] Add real team photos and information
- [ ] Set up backend for form submissions
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Set up SEO optimization
- [ ] Add more case studies/projects
- [ ] Implement blog section (optional)
- [ ] Set up CI/CD pipeline

## 📄 License

This project is private and proprietary to Vizax.

---

**Built with ❤️ for Vizax - Transforming Business with AI**

