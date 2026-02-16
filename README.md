# Ambler Mining Company

Professional corporate website for Ambler Mining Company - responsible mining operations in Alaska's Ambler Mining District.

## 🌐 Live Site

- **GitHub Pages**: https://alaskacg.github.io/ambler-mining-company/
- **Custom Domains**: 
  - amblerminingcompany.com
  - amblermines.com

## 🏗️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM
- **SEO**: react-helmet-async with JSON-LD schema
- **Icons**: Lucide React

## 📄 Pages

1. **Home** - Hero section, company overview, key statistics
2. **About** - Company history, leadership team, values, safety commitment
3. **Projects** - Active mining projects, exploration areas, resource estimates
4. **Sustainability** - Environmental practices, community involvement, safety record
5. **Careers** - Job opportunities, benefits, company culture
6. **Investors** - Financial information, reports, shareholder resources
7. **Contact** - Multiple contact methods, office locations, contact form

## 🔍 SEO Features

- ✅ react-helmet-async for dynamic meta tags
- ✅ JSON-LD structured data (Corporation, LocalBusiness)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card meta tags
- ✅ sitemap.xml
- ✅ robots.txt
- ✅ Semantic HTML5
- ✅ Mobile-responsive design
- ✅ Target keywords: Alaska mining, Ambler mining district, responsible mining Alaska, copper mining Alaska, zinc mining Alaska

## 🎨 Design

- Professional corporate aesthetic
- Blue/gray color scheme with earth tones
- Mining industry imagery
- Trust and safety emphasis
- Fully mobile-responsive

## 🚀 Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

The site automatically deploys to GitHub Pages via GitHub Actions workflow on every push to the `master` branch.

## 🔧 Custom Domain Configuration

To configure custom domains (amblerminingcompany.com, amblermines.com):

1. Add CNAME file to public directory
2. Configure DNS records:
   - A records pointing to GitHub Pages IPs
   - CNAME record for www subdomain
3. Update repository settings with custom domain

## 📊 Project Structure

```
ambler-mining-company/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   └── SEO.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Sustainability.tsx
│   │   ├── Careers.tsx
│   │   ├── Investors.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   └── main.tsx
├── .github/workflows/
│   └── deploy.yml
└── package.json
```

## 📝 License

Copyright © 2025 Ambler Mining Company. All rights reserved.

---

Built with ❤️ for responsible mining in Alaska
