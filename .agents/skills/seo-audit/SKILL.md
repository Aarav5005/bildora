---
name: seo-audit
description: >-
  Comprehensive SEO audit skill adapted from claude-seo methodology.
  Covers technical SEO, on-page content, structured data (JSON-LD),
  AI-search optimization (GEO/AEO), local SEO, security headers,
  and performance. Use when auditing or improving website SEO.
---

# SEO Audit Skill

Comprehensive SEO analysis and optimization workflow adapted from the
[claude-seo](https://github.com/AgriciDaniel/claude-seo) methodology
for use in Antigravity IDE.

---

## When to Activate

- User asks to "improve SEO", "audit SEO", or "optimize for search"
- User asks about structured data, schema markup, or rich results
- User asks about meta tags, robots.txt, sitemap, or crawlability
- User asks about AI-search optimization (GEO, AEO, llms.txt)
- User asks about Core Web Vitals or page speed optimization

---

## Audit Checklist

### 1. Technical SEO Foundations

- [ ] **Canonical URL**: `<link rel="canonical">` on every page
- [ ] **robots.txt**: Proper allow/disallow, sitemap reference, bot-specific rules
- [ ] **sitemap.xml**: All pages listed, `<lastmod>` dates, image entries
- [ ] **Mobile viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- [ ] **HTTPS**: All resources loaded over HTTPS, HSTS header present
- [ ] **Language**: `<html lang="xx">` attribute set correctly
- [ ] **Status codes**: No 404s, proper 301 redirects
- [ ] **Crawl budget**: No infinite scroll or JS-heavy rendering blocking bots

### 2. On-Page SEO

- [ ] **Title tag**: 50-60 chars, includes primary keyword, unique per page
- [ ] **Meta description**: 150-160 chars, compelling, includes CTA
- [ ] **H1**: Exactly one per page, contains primary keyword
- [ ] **Heading hierarchy**: H1 > H2 > H3, no skips
- [ ] **Image alt text**: All `<img>` have descriptive `alt` attributes
- [ ] **Internal linking**: Sections properly linked via navigation
- [ ] **External links**: `rel="noopener noreferrer"` on `target="_blank"` links
- [ ] **Content length**: Sufficient content for search intent

### 3. Structured Data (JSON-LD)

- [ ] **Organization**: name, url, logo, email, founders, sameAs
- [ ] **WebSite**: url, name, publisher reference
- [ ] **ProfessionalService**: name, description, priceRange, areaServed, contactPoint
- [ ] **FAQPage**: All FAQ Q&A pairs as Question/Answer entities
- [ ] **Service**: Individual service offerings with offers/pricing
- [ ] **BreadcrumbList**: Navigation path for single-page sections
- [ ] **Person**: Founder entities with knowsAbout, jobTitle
- [ ] Validate with Google Rich Results Test

### 4. Social & Open Graph

- [ ] **og:type**: `website` for homepage
- [ ] **og:title**: Matches or complements `<title>`
- [ ] **og:description**: Compelling summary
- [ ] **og:image**: 1200x630px, absolute URL
- [ ] **og:url**: Canonical URL
- [ ] **og:locale**: Language/region code
- [ ] **og:site_name**: Brand name
- [ ] **twitter:card**: `summary_large_image`
- [ ] **twitter:site**: Brand handle
- [ ] **twitter:creator**: Author handle

### 5. Local SEO

- [ ] **geo.region**: ISO 3166-2 region code
- [ ] **geo.placename**: City/locality name
- [ ] **geo.position**: Latitude;longitude
- [ ] **ICBM**: Latitude, longitude (legacy support)
- [ ] **areaServed** in schema: Countries/regions served
- [ ] **address** in schema: Structured postal address

### 6. International SEO

- [ ] **hreflang**: `<link rel="alternate" hreflang="xx">` for each language/region
- [ ] **x-default**: Fallback hreflang for unmatched regions
- [ ] **Content-Language**: HTTP header or meta tag

### 7. AI-Search Optimization (GEO/AEO)

- [ ] **llms.txt**: Machine-readable summary at `/llms.txt`
- [ ] **Passage citability**: Content structured in Q&A, definition, and claim patterns
- [ ] **Primary sources**: Claims backed by verifiable evidence
- [ ] **Speakable**: Schema.org speakable property on key content

### 8. Security & Trust Signals

- [ ] **HSTS**: `Strict-Transport-Security` header
- [ ] **CSP**: `Content-Security-Policy` header
- [ ] **X-Content-Type-Options**: `nosniff`
- [ ] **X-Frame-Options**: `DENY` or `SAMEORIGIN`
- [ ] **Referrer-Policy**: `strict-origin-when-cross-origin`
- [ ] **Permissions-Policy**: Restrict unused APIs

### 9. Performance (Core Web Vitals)

- [ ] **LCP** < 2.5s: Preload hero image, optimize fonts
- [ ] **FID/INP** < 200ms: Minimize JS blocking
- [ ] **CLS** < 0.1: Set explicit dimensions on images/embeds
- [ ] **Font loading**: `font-display: swap`, preconnect to font CDN
- [ ] **Image optimization**: WebP/AVIF formats, lazy loading below fold
- [ ] **Critical CSS**: Inline above-fold styles

### 10. PWA & Manifest

- [ ] **manifest.json**: name, short_name, icons, theme_color, categories, lang
- [ ] **apple-touch-icon**: Properly linked
- [ ] **theme-color**: Meta tag matches manifest

---

## Methodology

Every recommendation should:
1. **State the observation**: What is currently happening
2. **Cite the source**: Google documentation, web.dev, or schema.org spec
3. **Provide the fix**: Exact code or configuration change
4. **Define falsifiability**: How to verify the fix worked

---

## References

- Google Search Central: https://developers.google.com/search
- Google AI Optimization Guide: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Schema.org: https://schema.org
- web.dev: https://web.dev
- llms.txt specification: https://llmstxt.org
- claude-seo source: https://github.com/AgriciDaniel/claude-seo
