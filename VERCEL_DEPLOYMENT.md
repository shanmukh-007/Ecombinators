# Vercel Deployment Guide for Vizax

## 🚀 Quick Deploy

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to https://vercel.com/
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration

3. **Configure Environment Variables**:
   - In Vercel dashboard, go to "Settings" → "Environment Variables"
   - Add: `VITE_PAYPAL_CLIENT_ID` = `your_live_paypal_client_id`
   - Click "Save"

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Add Environment Variables**:
   ```bash
   vercel env add VITE_PAYPAL_CLIENT_ID
   ```
   Enter your PayPal Client ID when prompted.

5. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## 🔧 Build Configuration

Vercel automatically detects Vite projects. The default settings work perfectly:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📝 Environment Variables

### Required Variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_PAYPAL_CLIENT_ID` | PayPal Client ID (Live) | `AaBbCc123...` |

### How to Add in Vercel:

1. Go to your project in Vercel dashboard
2. Click "Settings"
3. Click "Environment Variables"
4. Add each variable:
   - **Key**: `VITE_PAYPAL_CLIENT_ID`
   - **Value**: Your PayPal Live Client ID
   - **Environment**: Production (and Preview if needed)
5. Click "Save"
6. Redeploy your project

## 🐛 Troubleshooting Build Errors

### Error: TypeScript Errors

**Solution**: All TypeScript errors have been fixed in the latest code:
- Removed unused imports
- Fixed `process.env` → `import.meta.env`
- Prefixed unused parameters with `_`

### Error: Module Not Found

**Solution**: Make sure all dependencies are in `package.json`:
```bash
npm install
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

### Error: Build Command Failed

**Solution**: Test build locally first:
```bash
npm run build
```

If it works locally but fails on Vercel:
1. Check Node.js version (Vercel uses Node 18 by default)
2. Clear Vercel cache: Settings → General → Clear Cache
3. Redeploy

## 📱 Mobile Responsiveness

The mobile menu has been added with:
- ✅ Hamburger menu icon on mobile
- ✅ Full-screen mobile navigation
- ✅ All navigation links accessible
- ✅ "Book a Call" button visible on mobile
- ✅ Smooth animations

Test on mobile:
- Chrome DevTools (F12 → Toggle Device Toolbar)
- Real mobile device
- Vercel preview URL on mobile

## 🔒 Security Checklist

Before deploying to production:

- [ ] Use **Live** PayPal Client ID (not Sandbox)
- [ ] Add environment variables in Vercel
- [ ] Test payment flow with real PayPal account
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Review all contact information
- [ ] Test all pages and links
- [ ] Check mobile responsiveness
- [ ] Set up custom domain (optional)

## 🌐 Custom Domain

### Add Custom Domain:

1. Go to Vercel dashboard → Your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `vizax.tech`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (up to 48 hours)

### DNS Configuration:

For `vizax.tech`:
```
Type: A
Name: @
Value: 76.76.21.21
```

For `www.vizax.tech`:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📊 Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Edge caching
- ✅ Gzip compression
- ✅ HTTP/2 support

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch → Production deployment
- Every pull request → Preview deployment
- Automatic builds on commit

## 📈 Analytics

Enable Vercel Analytics:
1. Go to your project dashboard
2. Click "Analytics" tab
3. Click "Enable Analytics"
4. View real-time traffic and performance

## 🆘 Common Issues

### Issue: "Module not found: Can't resolve 'react-router-dom'"

**Solution**: 
```bash
npm install react-router-dom
git add package.json package-lock.json
git commit -m "Add react-router-dom"
git push
```

### Issue: PayPal buttons not showing in production

**Solution**:
1. Check environment variable is set correctly
2. Use **Live** Client ID (not Sandbox)
3. Check browser console for errors
4. Verify PayPal app is approved for production

### Issue: Mobile menu not working

**Solution**: The mobile menu has been fixed with:
- Hamburger icon (☰) visible on mobile
- Click to open/close menu
- All navigation links accessible
- Smooth animations

### Issue: Build succeeds but site shows blank page

**Solution**:
1. Check browser console for errors
2. Verify all routes are configured correctly
3. Check that `index.html` is in root directory
4. Clear browser cache

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Project Issues**: Check build logs in Vercel dashboard

## ✅ Pre-Deployment Checklist

- [ ] All TypeScript errors fixed
- [ ] Build succeeds locally (`npm run build`)
- [ ] All pages load correctly
- [ ] Mobile menu works
- [ ] Navigation links work
- [ ] Contact form displays correctly
- [ ] PayPal integration configured
- [ ] Environment variables set in Vercel
- [ ] Custom domain configured (if applicable)
- [ ] Analytics enabled (optional)

## 🎉 Post-Deployment

After successful deployment:

1. **Test Everything**:
   - Visit your live URL
   - Test all pages
   - Test mobile menu
   - Test navigation
   - Verify contact information

2. **Monitor**:
   - Check Vercel Analytics
   - Monitor error logs
   - Test payment flow

3. **Share**:
   - Share your live URL
   - Update social media
   - Add to portfolio

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vite Docs**: https://vitejs.dev/
- **React Router**: https://reactrouter.com/
- **PayPal Developer**: https://developer.paypal.com/

---

**Your Vizax website is ready for production! 🚀**

