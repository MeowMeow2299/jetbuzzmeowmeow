# 🔧 Google Tools Setup Guide

## 📊 **Google Search Console Setup**

### 1. Tạo Google Search Console Account
- Vào: https://search.google.com/search-console
- Chọn "Add Property"
- Nhập domain: `https://jeetbuzzgames.com`

### 2. Verify Domain Ownership
**Cách 1: HTML File Upload**
- Tải file `google-site-verification.html` từ Search Console
- Upload vào thư mục `public/` của website

**Cách 2: HTML Meta Tag**
- Copy meta tag từ Search Console
- Thêm vào `<head>` của `index.html`

**Cách 3: DNS Record**
- Thêm TXT record vào DNS settings

### 3. Submit Sitemap
- Vào Search Console > Sitemaps
- Submit: `https://jeetbuzzgames.com/sitemap.xml`

## 📈 **Google Analytics 4 Setup**

### 1. Tạo GA4 Property
- Vào: https://analytics.google.com
- Tạo property mới cho `jeetbuzzgames.com`
- Lấy Measurement ID (dạng: G-XXXXXXXXXX)

### 2. Update Code
- Thay `GA_MEASUREMENT_ID` trong `index.html` bằng ID thật
- Test tracking với Google Tag Assistant

## 🏷️ **Google Tag Manager Setup**

### 1. Tạo GTM Container
- Vào: https://tagmanager.google.com
- Tạo container cho `jeetbuzzgames.com`
- Lấy Container ID (dạng: GTM-XXXXXXX)

### 2. Update Code
- Thay `GTM-XXXXXXX` trong `index.html` bằng ID thật
- Setup triggers và tags trong GTM

## 📱 **Facebook Pixel Setup**

### 1. Tạo Facebook Pixel
- Vào: https://business.facebook.com/events_manager
- Tạo pixel mới cho website
- Lấy Pixel ID

### 2. Update Code
- Thay `YOUR_PIXEL_ID` trong `index.html` bằng ID thật
- Test với Facebook Pixel Helper

## 🔍 **SEO Monitoring**

### 1. Google Search Console
- Monitor search performance
- Check for crawl errors
- View search analytics
- Submit new content

### 2. Google Analytics
- Track user behavior
- Monitor conversion rates
- Set up goals and events
- View real-time data

### 3. Core Web Vitals
- Check page speed
- Monitor mobile usability
- Fix any issues found

## 📋 **Checklist After Setup**

- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Google Analytics tracking
- [ ] Google Tag Manager working
- [ ] Facebook Pixel active
- [ ] All tracking codes updated
- [ ] Test all tracking tools
- [ ] Monitor for 24-48 hours

## 🆘 **Troubleshooting**

### Common Issues:
1. **Verification failed** - Check DNS/HTML file
2. **No data in GA** - Check Measurement ID
3. **GTM not firing** - Check Container ID
4. **Pixel not tracking** - Check Pixel ID

### Testing Tools:
- Google Tag Assistant
- Facebook Pixel Helper
- Google PageSpeed Insights
- Mobile-Friendly Test
