---
name: aeo-optimization
description: |
  Optimize a website for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO).
  This skill guides an AI coding agent or developer to update robots.txt, generate dynamic sitemaps, 
  inject JSON-LD schema graphs (Organization, Service, Product, Article, FAQ), and structure markup 
  for crawler discovery.
---

# Answer Engine Optimization (AEO) & AI Search Discoverability Skill

Use this skill to optimize any website so that AI agents, search engines, and answer engines (like Perplexity, ChatGPT, Gemini, and Google's AI Overviews) can confidently discover, synthesize, and cite the brand, products, services, and content.

---

## 1. Crawlability Optimization (robots.txt)

Ensure that AI crawler bots are not blocked by default firewalls, CDNs, or framework route limits.

### Instructions:
1. Locate or create the static `robots.txt` in the site's public root.
2. Verify that there are no generic `Disallow: /` directives blocking AI bots.
3. Explicitly append rules to allow key AI user-agents:

```txt
User-agent: *
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: GoogleOther
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: GeminiGateway
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

---

## 2. Dynamic Sitemap Indexing

A comprehensive, clean sitemap is vital for LLM crawlers to discover deep resources like articles, team pages, case studies, and capability landing pages.

### Next.js App Router (sitemap.ts) Template:
```typescript
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yourdomain.com';

  // 1. Core static routes
  const staticRoutes = ['', '/about', '/services', '/contact'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Fetch dynamic routes (e.g. blog posts, projects)
  const posts = await getBlogPostsFromCMSOrMarkdown();
  const blogRoutes = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
```

---

## 3. Structured Entity Graphs (JSON-LD Schemas)

JSON-LD allows AI crawlers to parse facts directly in their preferred key-value format. You must inject these schemas into the `<head>` of relevant pages.

### Template A: Organization & LocalBusiness (Global Layout)
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "@id": "https://yourdomain.com/#organization",
  "name": "Your Company Name",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/images/logo.png",
  "image": "https://yourdomain.com/images/cover.jpg",
  "description": "A high-fidelity description containing your primary categories and location.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bentonville",
    "addressRegion": "AR",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.3729",
    "longitude": "-94.2088"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@yourdomain.com",
    "contactType": "customer service"
  }
}
```

### Template B: Service Catalog (Global Layout or Services Page)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "Organization",
    "name": "Your Company Name"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Company Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Service Name 1",
          "description": "Clear plain-text description of service capabilities."
        }
      }
    ]
  }
}
```

### Template C: Product / SoftwareApplication (Product Details Page)
```json
{
  "@context": "https://schema.org",
  "@type": ["Product", "SoftwareApplication"],
  "name": "Product Name",
  "image": "https://yourdomain.com/images/product.jpg",
  "description": "Specific details about a proprietary software layer, API, or tool.",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web-based",
  "brand": {
    "@type": "Brand",
    "name": "Your Company Name"
  }
}
```

### Template D: Article / BlogPosting (Blog Details Page)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Article Title Here",
  "image": ["https://yourdomain.com/images/article-cover.jpg"],
  "datePublished": "2026-06-26",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Your Company Name"
  },
  "description": "A high-density summary of the article's core answer."
}
```

### Template E: FAQPage Schema (Homepage or Q&A Sections)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Specific question containing target semantic entity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct, plain-text response addressing the question without corporate fluff."
      }
    }
  ]
}
```

---

## 4. Semantic Markup Optimization

Ensure headers, structure, and text content allow bots to extract information effortlessly.

### A. Case Studies Structure
Organize case studies using a consistent semantic flow containing:
- **The Challenge / Problem**: Describe the client's initial state, constraints, and requirements.
- **The AI Solution**: Detail the precise architecture, models used, and integrations constructed.
- **The ROI / Impact**: Share measurable financial, timeline, or capacity outcomes.

### B. High-Performance FAQ Accordion (Pure HTML)
Use native `<details>` and `<summary>` elements to create accordions. In modern browsers, you can set the `name` attribute to create an exclusive accordion set (opening one details element closes the others) with **zero JavaScript**:

```html
<details name="site-faq">
  <summary>What is an agentic workflow?</summary>
  <div>
    <p>An agentic workflow is an AI design pattern where...</p>
  </div>
</details>

<details name="site-faq">
  <summary>How do I integrate this skill?</summary>
  <div>
    <p>Simply copy this file to your directory and ask your assistant to read it...</p>
  </div>
</details>
```

---

## 5. Verification Checklist

To verify that AEO schemas and setups are correct:
1. **Source Inspection**: Render the page locally and check that all `<script type="application/ld+json">` elements are populated in the initial HTML document payload (essential for static crawlers).
2. **Dynamic Routes Compilation**: Ensure sitemaps are generated successfully and dynamically reflect all static and dynamic paths.
3. **Structured Data Validation**: Run the HTML payload through structured data testing tools to verify that there are no type nesting or schema errors.
