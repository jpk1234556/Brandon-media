# Brandon Media - Performance Optimization Guide

## 🚀 Deployment Optimizations

### Server Configuration (.htaccess for Apache)

```apache
# Gzip Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self';"
</IfModule>
```

### Nginx Configuration

```nginx
# Gzip compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

# Browser caching
location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|webp)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location ~* \.(html)$ {
    expires 1h;
    add_header Cache-Control "public";
}

# Security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

## 📊 Performance Checklist

### ✅ Completed Optimizations

- [x] Critical CSS inlined in HTML head
- [x] Async loading for non-critical CSS and fonts
- [x] DNS prefetch for external resources
- [x] Preload critical images with fetchpriority
- [x] Lazy loading for below-the-fold images
- [x] Service Worker caching strategy
- [x] JavaScript performance optimizations (throttling, debouncing)
- [x] Hardware acceleration for animations
- [x] Reduced motion support for accessibility
- [x] Performance monitoring and Web Vitals tracking

### 🎯 Target Performance Metrics

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Time to Interactive (TTI)**: < 3s

## 🔧 Build Process (Optional)

### Using Vite for Development

```bash
npm init vite@latest brandon-media --template vanilla
cd brandon-media
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

## 🌐 CDN Deployment

### Recommended CDN Services

1. **Cloudflare** - Free tier with global CDN
2. **Netlify** - Automatic deployments from Git
3. **Vercel** - Edge functions and optimization
4. **GitHub Pages** - Free hosting for static sites

### Cloudflare Setup

1. Add domain to Cloudflare
2. Enable Auto Minify (CSS, JS, HTML)
3. Enable Brotli compression
4. Set Browser Cache TTL to 1 year
5. Enable "Always Online" mode

## 📱 Mobile Optimization

- Responsive design with mobile-first approach
- Touch-friendly navigation
- Optimized images for different screen densities
- Reduced animations on mobile devices
- Cyber cursor disabled on touch devices

## 🔍 Testing Tools

- **Google PageSpeed Insights**
- **GTmetrix**
- **WebPageTest.org**
- **Lighthouse (Chrome DevTools)**
- **Core Web Vitals Chrome Extension**

## 🚀 Deployment Commands

```bash
# Build for production
npm run build

# Test locally
python -m http.server 8000

# Deploy to GitHub Pages
git add .
git commit -m "Performance optimizations deployed"
git push origin main
```

## 🎨 Future Enhancements

- [ ] WebP image format implementation
- [ ] Critical path CSS extraction
- [ ] JavaScript code splitting
- [ ] HTTP/2 push for critical resources
- [ ] Edge-side rendering (ESR)
- [ ] Progressive Web App (PWA) features