import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  jsonLd?: object;
}

export default function SEO({ 
  title, 
  description, 
  keywords = 'Alaska mining, Ambler mining district, responsible mining Alaska, copper mining Alaska, zinc mining Alaska',
  canonical,
  ogType = 'website',
  jsonLd
}: SEOProps) {
  const fullTitle = `${title} | Ambler Mining Company`;
  const siteUrl = 'https://amblerminingcompany.com';
  const canonicalUrl = canonical || siteUrl;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Ambler Mining Company",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Responsible mining operations in Alaska's Ambler Mining District",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Anchorage",
      "addressRegion": "AK",
      "addressCountry": "US"
    },
    "sameAs": []
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ambler Mining Company",
    "image": `${siteUrl}/logo.png`,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+1-907-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Anchorage",
      "addressRegion": "AK",
      "addressCountry": "US"
    }
  };

  const schemas = jsonLd || [organizationSchema, businessSchema];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:site_name" content="Ambler Mining Company" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
      
      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemas)}
      </script>
    </Helmet>
  );
}
