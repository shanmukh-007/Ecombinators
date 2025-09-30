# Vizax - Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: **http://localhost:5173/**

---

## 📦 Essential Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server (port 5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🗺️ Site Structure

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Main landing page with all sections |
| Products | `/products` | AI solutions and products showcase |
| About | `/about` | Company info, team, and values |

---

## 📝 Quick Edits

### Update Contact Info
**File**: `src/pages/Home.tsx` (lines 185-186)
```tsx
<Mail /> team@vizax.tech
<Phone /> +1 (555) 123-4567
```

### Update Company Name
**Files**: 
- `src/components/Layout.tsx` (line 37)
- `src/pages/Home.tsx` (footer)

### Add PayPal Client ID
**File**: `.env` (create in root directory)
```env
REACT_APP_PAYPAL_CLIENT_ID=your_client_id_here
```

---

## 🎨 Key Features

✅ React 19 + TypeScript + Vite  
✅ Tailwind CSS styling  
✅ Framer Motion animations  
✅ React Router navigation  
✅ PayPal payment integration  
✅ Fully responsive design  
✅ Dark theme aesthetic  

---

## 📚 Documentation

- **Full Setup Guide**: `SETUP_GUIDE.md`
- **PayPal Integration**: `PAYPAL_INTEGRATION_GUIDE.md`
- **This File**: Quick reference

---

## 🆘 Common Issues

**Issue**: Build fails  
**Fix**: `rm -rf node_modules package-lock.json && npm install`

**Issue**: Port 5173 in use  
**Fix**: Kill process or use different port: `npm run dev -- --port 3000`

**Issue**: PayPal buttons not showing  
**Fix**: Add Client ID to `.env` file

---

## 🎯 What's Included

### Pages Created:
- ✅ Home page with Hero, Services, Work, Testimonials, Contact
- ✅ Products page with 6 AI solutions
- ✅ About page with mission, team, values

### Components:
- ✅ Layout (Navbar + Footer)
- ✅ InteractiveLayer (animated background)
- ✅ PayPalPayment (payment integration)

### Branding:
- ✅ All "Ecombinators" → "Vizax"
- ✅ Email: team@vizax.tech
- ✅ Phone: +1 (555) 123-4567
- ✅ AI-focused content throughout

---

## 🚢 Deploy

### Build:
```bash
npm run build
```

### Output:
`dist/` directory ready for deployment

### Deploy To:
- Vercel: `vercel deploy`
- Netlify: Drag & drop `dist/`
- Any static host

---

**Need Help?** See `SETUP_GUIDE.md` for detailed instructions.

