# Eriezon Crop Science India Pvt. Ltd. — Website PRD

> **Version:** 1.0 | **Date:** May 2026 | **Status:** Draft — Awaiting Stakeholder Review
> **Tech Stack:** Next.js Latest (App Router) + SCSS + CSS Modules + Vercel
> **Reference Companies:** Dhanuka Agritech, Syngenta India, Sumitomo Chemical India (SCIL), Best Agro, JU Agri Sciences, Bharat Rasayan, India Pesticides, Crop Growth India
> **Logo:** Logo is placed inside root folder and will be used on all pages

| Field               | Details                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Document Title      | Eriezon Crop Science India – Website PRD                                                                                 |
| Prepared For        | Eriezon Crop Science India Pvt. Ltd., Pune, Maharashtra                                                                  |
| Tech Stack          | Next.js 14 (App Router) + SCSS + CSS Modules + Vercel                                                                    |
| Target Audience     | Distributors, Dealers, Farmers, Institutional Buyers                                                                     |
| Reference Companies | Dhanuka Agritech, Syngenta India, SCIL, Best Agro, JU Agri Sciences, Bharat Rasayan, India Pesticides, Crop Growth India |
| Version             | v1.0 — May 2026                                                                                                          |
| Status              | Draft — Awaiting Stakeholder Review                                                                                      |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Business Objectives](#2-business-objectives)
3. [Target Audience & User Personas](#3-target-audience--user-personas)
4. [Competitor Analysis & Design Benchmarks](#4-competitor-analysis--design-benchmarks)
5. [Website Sitemap & Page Architecture](#5-website-sitemap--page-architecture)
6. [Page-by-Page Feature Requirements](#6-page-by-page-feature-requirements)
7. [UI/UX Design System](#7-uiux-design-system)
8. [SEO Strategy](#8-seo-strategy)
9. [Technical Architecture](#9-technical-architecture)
10. [Forms & Lead Capture](#10-forms--lead-capture)
11. [Phased Delivery Plan](#11-phased-delivery-plan)
12. [Performance & Quality Targets](#12-performance--quality-targets)
13. [Analytics & Conversion Tracking](#13-analytics--conversion-tracking)
14. [Security & Compliance](#14-security--compliance)
15. [Content Requirements from Eriezon Team](#15-content-requirements-from-eriezon-team)
16. [Open Questions & Decisions Required](#16-open-questions--decisions-required)
17. [Glossary](#17-glossary)

---

## 1. Executive Summary

Eriezon Crop Science India Pvt. Ltd. is an **ISO 9001:2015 certified** agrochemical company headquartered in Hinjewadi, Pune (Maharashtra). The company operates a distributorship model covering crop protection products including herbicides, insecticides, fungicides, and plant growth regulators.

This document defines the complete product requirements for building Eriezon's official corporate website. The website will serve as the **primary digital face** of the company — generating distributor leads, building brand credibility, showcasing the product portfolio, and supporting farmer education.

Based on competitive analysis of Dhanuka Agritech, Syngenta India, Sumitomo Chemical India (SCIL), and 7 other peer companies, this PRD defines all pages, features, user flows, SEO strategy, and technical architecture required for a market-competitive agrochemical website.

---

## 2. Business Objectives

### 2.1 Primary Goals

- Generate qualified **Distributorship / Dealership enquiries** online
- Establish Eriezon as a **credible, professional agrochemical brand** in the Indian market
- Provide a searchable, filterable **product catalog** to dealers and institutional buyers
- Rank on Google for key product-related and crop-related keywords **(SEO-first)**
- Support the distributor network with downloadable resources and onboarding information

### 2.2 Secondary Goals

- Educate farmers on crop protection solutions (farmer-facing content)
- Showcase ISO 9001:2015 certification and quality commitments
- Enable media/press to find company news, product launches, and CSR activities
- Support future e-commerce or dealer portal integration

---

## 3. Target Audience & User Personas

| Persona                           | Description & Goals                                                                                             |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Distributor / Dealer**          | Looking to take up distributorship in their region. Needs company credibility, product range, and contact info. |
| **Institutional Buyer (FPO/NGO)** | Evaluating products for bulk purchase. Needs technical specs, certifications, and company background.           |
| **Agronomist / Agri Consultant**  | Recommends products to farmers. Needs crop-wise solutions and technical data sheets.                            |
| **Farmer**                        | Seeking effective crop protection solutions. Needs simple language, crop & pest guides.                         |
| **Investor / Media**              | Needs company background, financials overview, certifications, leadership details.                              |
| **Job Seeker**                    | Looking for career opportunities. Needs an active Careers section.                                              |

---

## 4. Competitor Analysis & Design Benchmarks

| Company                                      | Key Website Feature                                                                           | Takeaway for Eriezon                                                             |
| -------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Dhanuka Agritech** (dhanuka.com)           | Crop-based package of solutions; pest & disease database; 7200+ distributor network highlight | Build a Crop Finder and Pest Solution tool; display network scale prominently    |
| **Syngenta India** (syngenta.co.in)          | "Think Like a Grower" positioning; product categories clearly separated; investor section     | Farmer-first messaging; clean product taxonomy; add About/Investor section       |
| **Sumitomo Chemical India** (sumichem.co.in) | Product sub-brands (SCIL Speciality, ECC, Basic); Farmer's Corner; Mandi rates; QR codes      | Sub-categorize products clearly; add Farmer's Corner; multilingual consideration |
| **JU Agri Sciences**                         | Strong Hindi/regional language presence; dealer locator map                                   | Add a Dealer Locator; consider Hindi toggle                                      |
| **Best Agro / Best Agrochemicals**           | Simple product catalog; strong state-wise distributor listing                                 | State-wise distributor directory page                                            |
| **Bharat Rasayan / India Pesticides**        | Investor relations section; compliance & regulatory certifications prominently displayed      | Show ISO cert, CIB registration, MSDS documents                                  |
| **Crop Growth India**                        | Clean product detail pages with dosage table, target crops, pack sizes                        | Rich product detail page with all technical fields                               |
| **See Ciba**                                 | Strong visual branding; clean section separation; mobile-optimized layout                     | Invest in high-quality hero imagery; mobile-first layout priority                |

---

## 5. Website Sitemap & Page Architecture

### 5.1 Main Navigation

| Nav Item        | Page / URL         | Priority      |
| --------------- | ------------------ | ------------- |
| Home            | `/`                | P1 — Critical |
| About Us        | `/about`           | P1 — Critical |
| Products        | `/products`        | P1 — Critical |
| Crop Solutions  | `/crop-solutions`  | P1 — Critical |
| Distributorship | `/distributorship` | P1 — Critical |
| Farmer's Corner | `/farmers-corner`  | P2 — High     |
| News & Media    | `/news`            | P2 — High     |
| Certifications  | `/certifications`  | P2 — High     |
| Careers         | `/careers`         | P3 — Medium   |
| Contact Us      | `/contact`         | P1 — Critical |

### 5.2 Sub-Pages

| Parent          | Sub-Page                  | URL                                 |
| --------------- | ------------------------- | ----------------------------------- |
| Products        | Product Listing           | `/products/[category]`              |
| Products        | Product Detail            | `/products/[category]/[slug]`       |
| Crop Solutions  | Crop Detail Page          | `/crop-solutions/[crop-name]`       |
| Crop Solutions  | Pest & Disease Guide      | `/crop-solutions/pest-guide`        |
| About Us        | Company History           | `/about#history`                    |
| About Us        | Leadership Team           | `/about#leadership`                 |
| About Us        | CSR Initiatives           | `/about/csr`                        |
| Distributorship | Apply for Distributorship | `/distributorship/apply`            |
| Distributorship | Find a Dealer             | `/distributorship/find-dealer`      |
| Farmer's Corner | Crop Calendar             | `/farmers-corner/crop-calendar`     |
| Farmer's Corner | Dosage Calculator         | `/farmers-corner/dosage-calculator` |
| Legal           | Privacy Policy            | `/privacy-policy`                   |
| Legal           | Terms & Conditions        | `/terms`                            |
| Legal           | Disclaimer                | `/disclaimer`                       |

---

## 6. Page-by-Page Feature Requirements

### 6.1 Home Page — `/`

The homepage is the primary conversion and trust-building page. It must immediately communicate who Eriezon is, what they offer, and how to become a distributor.

#### Sections & Components

**Hero Section**

- Full-width banner with headline + sub-headline
- Two CTAs: `Apply for Distributorship` and `Explore Products`
- Background: high-quality field imagery or animated crop video

**Trust Bar**

- ISO 9001:2015 badge
- Animated counters: Years in Industry | Products Count | States Served | Distributors

**Product Categories Grid**

- 6 cards: Herbicides, Insecticides, Fungicides, Plant Growth Regulators, Bio-Pesticides, Micronutrients
- Each card links to its respective product category page

**Crop Solutions Teaser**

- "Find Solutions by Crop" section
- Crop icons: Wheat, Rice, Cotton, Soybean, Sugarcane, Vegetables — each linking to crop pages

**Why Choose Eriezon — 3-column value props**

- ISO Certified Quality
- Extensive Distributor Network
- Farmer-Focused Formulations

**Distributorship CTA Band**

- Prominent green band with "Become a Distributor" CTA
- Brief 3-step process overview inline

**Latest News / Blog Teasers**

- 3 cards of latest news/product launches

**Testimonials**

- 3–4 distributor/dealer/farmer quotes with name & region

**Footer**

- Full sitemap links, social media icons, contact info, legal links, CIN number

---

### 6.2 About Us — `/about`

- **Company Story** — Founding vision, timeline of key milestones, growth narrative
- **Mission & Vision** — Icon-driven layout with clear statements
- **ISO 9001:2015 Certification** — Badge display + explanation of what it means for quality
- **Leadership Team** — Photo cards with name, designation, brief bio
- **Manufacturing & Operations** — Brief description of production capability and R&D
- **CSR Section link** — Sustainability and farmer welfare initiatives

---

### 6.3 Products — `/products`

The product section is the core of the site — SEO-heavy and highly structured.

#### Product Listing Page

- **Filter sidebar:** by Category (Herbicide, Insecticide, Fungicide, PGR, Bio), by Crop, by Pest/Disease, by Active Ingredient
- **Product cards grid:** Product Name | Category badge | Target Crop | Pack Sizes | "View Details" button
- **Search bar** across all products
- **Compare Products** feature (select up to 3 products side by side)

#### Product Detail Page — `/products/[category]/[slug]`

| Field                   | Content                                       |
| ----------------------- | --------------------------------------------- |
| Product Name            | Brand name + tagline                          |
| Category                | Badge (Herbicide / Insecticide / etc.)        |
| Technical Name          | Active ingredient                             |
| Mode of Action          | Brief description                             |
| Target Crops            | Listed with icons                             |
| Target Pests / Diseases | Listed with icons                             |
| Dosage Table            | Crop \| Pest \| Dose per Acre \| Water Volume |
| Pack Sizes              | e.g., 100ml, 250ml, 500ml, 1L                 |
| Method of Application   | Foliar spray / Soil drench / etc.             |
| Precautions & Safety    | Linked to MSDS PDF                            |
| Related Products        | Horizontal carousel of 4 products             |
| Downloads               | Brochure PDF + Technical Data Sheet           |
| Quote Request           | Modal form trigger button                     |

---

### 6.4 Crop Solutions — `/crop-solutions`

**Crop Grid** — Visual cards for major Indian crops:
Wheat, Rice, Cotton, Soybean, Maize, Sugarcane, Tomato, Potato, Onion, Chilli, Groundnut, Pulses

Each card links to a **Crop Detail Page** containing:

- Crop image and overview paragraph
- Key pests and diseases — with images and descriptions
- Eriezon's recommended products per pest/disease stage
- Crop Calendar — growth stage timeline with intervention points
- Downloadable Crop Guide PDF

---

### 6.5 Distributorship — `/distributorship`

> This is the highest-converting page — critical for Eriezon's business model.

- **Why Partner with Eriezon** — Quality products, margin structure, marketing support, training programs, ISO-certified supply chain
- **Eligibility Criteria** — Clearly listed requirements
- **Application Process** — Illustrated 4-step flow:
  `Fill Form → Team Review → Meeting / Discussion → Agreement Signing`
- **Distributorship Application Form** — (see Section 10.1 for full field list)
- **Find a Dealer Map** — Interactive Google Map with distributor pins across states
- **FAQs** — 8–10 common questions in accordion layout

---

### 6.6 Farmer's Corner — `/farmers-corner`

> Simple, visual, easy-to-understand language. Hindi toggle recommended for rural reach.

- **Crop Calendar** — Monthly guide: what to plant + what crop protection to apply
- **Pest Identification Guide** — Photo-based pest recognition + Eriezon product recommendation
- **Dosage Calculator** — Input: Crop type + field size (acres) → Output: recommended product + quantity
- **Safety & Handling Guide** — How to safely store and apply agrochemicals
- **Video Library** — Embedded YouTube videos: product demos + farming tips
- **WhatsApp Helpline CTA** — Click-to-chat button for farmer queries

---

### 6.7 News & Media — `/news`

- Blog/News listing — Cards with title, date, category tag, excerpt, read more link
- **Categories:** Product Launches | Industry News | Farmer Success Stories | Events & Exhibitions | CSR
- Individual article pages with full SEO meta (OG tags, canonical, schema markup)
- **Press Kit** — Downloadable logos, brand guidelines, company fact sheet
- **Events Gallery** — Photo gallery of field days, distributor meets, exhibitions

---

### 6.8 Certifications & Compliance — `/certifications`

- **ISO 9001:2015 Certificate** — Display certificate image + what it means for product quality
- **CIB (Central Insecticide Board) Registrations** — List of all registered products
- **MSDS (Material Safety Data Sheets)** — Downloadable PDFs per product
- **Export / Import Compliance badges** (if applicable)
- **Quality Policy** statement

---

### 6.9 Contact Us — `/contact`

- Registered Office address with embedded Google Maps iframe
- Customer Care phone + email
- **Contact Form** — Name, Company, Designation, State, Mobile, Email, Query Type, Message
- Social media links — LinkedIn, Facebook, YouTube, Instagram
- **WhatsApp floating button** — sticky across entire site on all pages

---

## 7. UI/UX Design System

### 7.1 Visual Identity

| Token           | SCSS Variable                  | Value                                  |
| --------------- | ------------------------------ | -------------------------------------- |
| Primary Color   | `$green-primary`               | `#1A6B2E` — Eriezon Deep Green         |
| Secondary Color | `$green-accent`                | `#4CAF50` — Accent Green               |
| Light Green BG  | `$green-light`                 | `#E8F5E9`                              |
| Dark Green      | `$green-dark`                  | `#0D3B1A`                              |
| Background      | `$bg-white` / `$bg-grey`       | `#FFFFFF` / `#F5F5F5`                  |
| Text Primary    | `$text-primary`                | `#1A1A1A`                              |
| Text Secondary  | `$text-secondary`              | `#555555`                              |
| Font — Headings | `$font-heading`                | `'Montserrat', sans-serif`             |
| Font — Body     | `$font-body`                   | `'Inter', sans-serif`                  |
| Border Radius   | `$radius-card` / `$radius-btn` | `8px` / `4px`                          |
| Icon Set        | —                              | Phosphor Icons — consistent throughout |

#### SCSS Variables File

All design tokens are defined once in a single file and imported across all modules:

```scss
// styles/_variables.scss

// Colors
$green-primary: #1a6b2e;
$green-accent: #4caf50;
$green-light: #e8f5e9;
$green-dark: #0d3b1a;
$bg-white: #ffffff;
$bg-grey: #f5f5f5;
$text-primary: #1a1a1a;
$text-secondary: #555555;
$border-color: #e0e0e0;

// Typography
$font-heading: "Montserrat", sans-serif;
$font-body: "Inter", sans-serif;

// Spacing
$section-pad-desktop: 80px;
$section-pad-mobile: 40px;
$max-width: 1280px;

// Border Radius
$radius-card: 8px;
$radius-btn: 4px;
$radius-hero: 16px;

// Shadows
$shadow-card: 0 2px 12px rgba(0, 0, 0, 0.08);
$shadow-hover: 0 6px 24px rgba(26, 107, 46, 0.15);
```

#### Styling Approach — SCSS + CSS Modules + Radix UI

| Layer                     | Tool                         | Purpose                                                |
| ------------------------- | ---------------------------- | ------------------------------------------------------ |
| Global styles & variables | `styles/_variables.scss`     | Design tokens, resets, typography                      |
| Component styles          | CSS Modules (`.module.scss`) | Scoped per-component, no class clashes                 |
| Interactive components    | Radix UI (unstyled)          | Dropdowns, modals, accordions, tabs — fully accessible |
| Animations                | Framer Motion                | Page transitions, counter animations, scroll reveals   |

**Why this over Tailwind:**

- No framework dependency — any developer can read and maintain plain SCSS
- Radix UI gives accessible dropdowns, modals, accordions out of the box — fully styled with your own SCSS
- Zero runtime CSS overhead — CSS Modules are extracted at build time
- Easier for the Eriezon team to hand off to a future developer without framework lock-in

#### Example Component Usage

```scss
// components/product/ProductCard.module.scss
@use "../../styles/variables" as *;

.card {
  background: $bg-white;
  border-radius: $radius-card;
  box-shadow: $shadow-card;
  padding: 24px;
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    box-shadow: $shadow-hover;
    transform: translateY(-2px);
  }
}

.categoryBadge {
  background: $green-light;
  color: $green-primary;
  font-family: $font-body;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 100px;
}

.ctaButton {
  background: $green-primary;
  color: $bg-white;
  border-radius: $radius-btn;
  font-family: $font-heading;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: $green-dark;
  }
}
```

```tsx
// components/product/ProductCard.tsx
import styles from "./ProductCard.module.scss";

export default function ProductCard({ name, category, crop }) {
  return (
    <div className={styles.card}>
      <span className={styles.categoryBadge}>{category}</span>
      <h3>{name}</h3>
      <p>{crop}</p>
      <button className={styles.ctaButton}>View Details</button>
    </div>
  );
}
```

### 7.2 Layout Principles

- **Mobile-first** responsive design — 60%+ of agri-site traffic in India is mobile
- Section spacing: `$section-pad-desktop` (80px) on desktop, `$section-pad-mobile` (40px) on mobile
- Max content width: `$max-width` (1280px), centered with `margin: 0 auto`
- **Sticky header** — logo, nav links, prominent "Become a Distributor" green CTA
- **Floating WhatsApp button** — bottom-right, visible on all pages
- Scroll-to-top button on long pages

#### Responsive Breakpoints (SCSS Mixins)

```scss
// styles/_mixins.scss
@mixin mobile {
  @media (max-width: 767px) {
    @content;
  }
}
@mixin tablet {
  @media (max-width: 1023px) {
    @content;
  }
}
@mixin desktop {
  @media (min-width: 1024px) {
    @content;
  }
}
@mixin wide {
  @media (min-width: 1280px) {
    @content;
  }
}
```

### 7.3 Performance Design Rules

- All images: **WebP format**, lazy loaded, with explicit `width` and `height` (prevent CLS)
- Hero images: preloaded via Next.js `Image` with `priority` prop
- Animations: Framer Motion with `prefers-reduced-motion` media query support
- Fonts: `next/font` for Google Fonts — no layout shift on font load
- CSS Modules are statically extracted at build time — **zero runtime CSS overhead**

---

## 8. SEO Strategy

### 8.1 Technical SEO (Next.js Advantages)

- **Static Site Generation (SSG)** for all product pages, crop pages, blog posts — pre-rendered HTML for Google
- **Server-Side Rendering (SSR)** for dynamic pages like Dealer Locator
- `next/head` for per-page meta titles (60 chars), descriptions (155 chars), OG tags, canonical URLs
- **XML Sitemap** — auto-generated via `next-sitemap` package
- `robots.txt` — properly configured to block staging/admin, allow all public pages
- **Structured Data (JSON-LD Schema)** — Organization, Product, BreadcrumbList, FAQPage, Article
- Core Web Vitals targets: LCP < 2.5s | CLS < 0.1 | INP < 200ms
- HTTPS enforced via Vercel (automatic SSL + HSTS)

### 8.2 Target Keywords

| Target Keyword                       | Page                           | Search Intent |
| ------------------------------------ | ------------------------------ | ------------- |
| agrochemical company India           | `/about`                       | Informational |
| distributorship agrochemical India   | `/distributorship`             | Commercial    |
| herbicide for wheat India            | `/products/herbicide/[slug]`   | Transactional |
| crop protection solutions cotton     | `/crop-solutions/cotton`       | Informational |
| insecticide for rice blast           | `/products/fungicide/[slug]`   | Transactional |
| agrochemical distributor Pune        | `/distributorship/find-dealer` | Navigational  |
| ISO certified pesticide manufacturer | `/certifications`              | Informational |
| best fungicide for soybean India     | `/crop-solutions/soybean`      | Transactional |
| plant growth regulator India         | `/products/pgr`                | Informational |
| crop protection dealer network India | `/distributorship`             | Commercial    |

### 8.3 On-Page SEO Rules

- Every **product page:** unique meta title, unique meta description, H1 with product name + active ingredient
- Every **crop page:** FAQ section with `FAQPage` schema markup (5–8 questions per crop)
- **Blog posts:** minimum 800 words, 2–3 internal links to product pages, structured with H2/H3
- **Image alt text:** descriptive, keyword-aware on all product and crop images
- **Breadcrumbs** on all inner pages with `BreadcrumbList` schema

---

## 9. Technical Architecture

### 9.1 Tech Stack

| Layer                 | Technology                                              |
| --------------------- | ------------------------------------------------------- |
| Framework             | Next.js 14 (App Router)                                 |
| Styling               | SCSS + CSS Modules + Radix UI                           |
| Hosting               | Vercel (free tier → upgrade as traffic scales)          |
| CMS                   | Sanity.io — products, blog, crops, team, news           |
| Forms                 | React Hook Form + Zod validation + Resend.io email      |
| Maps (Dealer Locator) | Google Maps JavaScript API with custom markers          |
| Analytics             | Google Analytics 4 + Vercel Analytics                   |
| Product Search        | Algolia InstantSearch (or Next.js built-in for Phase 1) |
| Image Optimization    | Next.js `Image` component + Cloudinary CDN              |
| SEO                   | next-seo + next-sitemap + JSON-LD                       |
| PDF Downloads         | Static files in `/public` or Sanity file uploads        |
| Internationalization  | next-intl for Hindi toggle (Phase 2)                    |

### 9.2 Sanity CMS Content Models

#### Product Schema

```ts
{
  name: string           // Brand name
  slug: slug
  category: reference    // → Category document
  activeIngredient: string
  technicalName: string
  modeOfAction: text
  targetCrops: array     // → reference[] Crop
  targetPests: array     // → reference[] Pest
  dosageTable: array     // [{ crop, pest, dosePerAcre, waterVolume }]
  packSizes: string[]    // ["100ml", "250ml", "500ml", "1L"]
  productImage: image
  brochurePDF: file
  msdsFile: file
  relatedProducts: array // → reference[] Product
}
```

#### Crop Schema

```ts
{
  cropName: string;
  slug: slug;
  cropImage: image;
  cropDescription: text;
  majorPests: array; // → reference[] Pest
  recommendedProducts: array; // → reference[] Product
  cropCalendar: array; // [{ month, stage, action, products }]
  downloadableGuide: file;
}
```

#### Blog / News Schema

```ts
{
  title: string;
  slug: slug;
  publishedAt: date;
  category: string; // "Product Launch" | "News" | "CSR" | "Events"
  author: string;
  excerpt: text;
  body: portableText;
  coverImage: image;
  seoMeta: {
    metaTitle: string;
    metaDescription: string;
    ogImage: image;
  }
}
```

### 9.3 Folder Structure

```
/app
  /page.tsx                        → Home
  /about
    /page.tsx
    /csr/page.tsx
  /products
    /page.tsx                      → Product Listing (all)
    /[category]/page.tsx           → Filtered by category
    /[category]/[slug]/page.tsx    → Product Detail
  /crop-solutions
    /page.tsx
    /[crop]/page.tsx               → Crop Detail
    /pest-guide/page.tsx
  /distributorship
    /page.tsx
    /apply/page.tsx
    /find-dealer/page.tsx
  /farmers-corner
    /page.tsx
    /crop-calendar/page.tsx
    /dosage-calculator/page.tsx
  /news
    /page.tsx
    /[slug]/page.tsx               → Article Detail
  /certifications/page.tsx
  /careers/page.tsx
  /contact/page.tsx
  /privacy-policy/page.tsx
  /terms/page.tsx

/components
  /ui/                             → shadcn/ui components
  /layout/                         → Header, Footer, Breadcrumbs, WhatsAppButton
  /product/                        → ProductCard, ProductGrid, DosageTable, ProductFilter
  /crop/                           → CropCard, CropCalendar, PestGuide
  /forms/                          → ContactForm, DistributorForm, QuoteModal
  /home/                           → HeroSection, TrustBar, CategoryGrid, Testimonials

/lib
  /sanity.ts                       → Sanity client
  /queries.ts                      → GROQ queries
  /utils.ts
  /schema.ts                       → Zod form schemas

/public
  /images/
  /pdfs/
  /icons/

/sanity
  /schemas/                        → All Sanity schema definitions
  /sanity.config.ts
```

---

## 10. Forms & Lead Capture

### 10.1 Distributorship Application Form

> Most important conversion form on the site.

| Field                   | Type / Validation                                     |
| ----------------------- | ----------------------------------------------------- |
| Full Name               | Text — Required                                       |
| Business / Firm Name    | Text — Required                                       |
| Type of Business        | Dropdown: Retailer / Distributor / Wholesaler / Other |
| State                   | Dropdown — all Indian states                          |
| District / City         | Text — Required                                       |
| Mobile Number           | Tel — 10-digit Indian mobile validation               |
| Email Address           | Email — Required                                      |
| Current Annual Turnover | Dropdown: range options                               |
| Existing Brands Handled | Text Area — Optional                                  |
| Message / Query         | Text Area — Optional                                  |
| GST Number              | Text — Optional                                       |
| Agree to Terms          | Checkbox — Required                                   |

**On Submit:**

- Email notification to Eriezon sales team via **Resend.io**
- Auto-confirmation email to applicant
- Lead stored in Sanity or forwarded to CRM webhook

### 10.2 Contact / General Inquiry Form

Fields: Name, Email, Phone, State, Query Type (Product / Distributorship / Farmer Support / Other), Message

Rate-limited to **5 submissions per IP per hour** via Next.js API route middleware.

### 10.3 Product Quote Request Form (Modal)

Triggered from Product Detail page "Request Quote" button.

Fields: Name, Company, Mobile, Email, Product Name _(pre-filled)_, Quantity Required, State

---

## 11. Phased Delivery Plan

| Phase                  | Timeline    | Deliverables                                                                                                              | Priority    |
| ---------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **Phase 1 — Core**     | Weeks 1–4   | Home, About, Product Catalog (static data), Contact, Distributorship Application Form, Basic SEO setup, Vercel deployment | P1 Critical |
| **Phase 2 — Content**  | Weeks 5–7   | Sanity CMS integration, all Product Detail Pages, Crop Solutions, News/Blog, Certifications, Careers                      | P1 Critical |
| **Phase 3 — Features** | Weeks 8–10  | Farmer's Corner, Dealer Locator Map, Dosage Calculator, Product Compare, Video Library, WhatsApp integration              | P2 High     |
| **Phase 4 — Growth**   | Weeks 11–14 | Hindi language toggle, Algolia search, GA4 custom events, Schema markup audit, Lighthouse 90+ audit                       | P3 Medium   |
| **Phase 5 — Future**   | Post-launch | Dealer Portal (login), E-commerce integration, Mobile app (React Native), Mandi price integration                         | Backlog     |

---

## 12. Performance & Quality Targets

| Metric                          | Target                                   |
| ------------------------------- | ---------------------------------------- |
| Google PageSpeed — Mobile       | ≥ 85                                     |
| Google PageSpeed — Desktop      | ≥ 95                                     |
| Largest Contentful Paint (LCP)  | < 2.5 seconds                            |
| Cumulative Layout Shift (CLS)   | < 0.1                                    |
| Interaction to Next Paint (INP) | < 200ms                                  |
| Time to First Byte (TTFB)       | < 600ms (Vercel Edge)                    |
| Accessibility Score             | ≥ 90 (WCAG 2.1 AA)                       |
| SEO Score (Lighthouse)          | 100                                      |
| Uptime SLA                      | 99.9% (Vercel)                           |
| Responsive Breakpoints          | 320px / 768px / 1024px / 1280px / 1536px |

---

## 13. Analytics & Conversion Tracking

- **Google Analytics 4** — Pageviews, sessions, bounce rate, geographic breakdown
- **Custom GA4 Events:**
  - `distributor_form_submit`
  - `product_view`
  - `crop_solution_view`
  - `brochure_download`
  - `quote_request`
  - `whatsapp_click`
  - `dealer_locator_search`
  - `dosage_calculator_use`
  - `video_play`
- **Google Search Console** — Indexing status, keyword performance, Core Web Vitals field data
- **Vercel Analytics** — Real-time performance monitoring
- **Hotjar** _(Phase 4)_ — Heatmaps and session recordings to optimize conversion pages
- **Monthly Reporting** — Google Looker Studio dashboard connected to GA4 + GSC

---

## 14. Security & Compliance

- **HTTPS only** — enforced via Vercel, HSTS header enabled
- **Form CSRF protection** — Next.js API routes with token validation
- **Rate limiting** on all API routes — prevent spam submissions
- **Content Security Policy (CSP)** headers configured via `next.config.js`
- **Privacy Policy page** — DPDP Act 2023 (India Digital Personal Data Protection) compliant
- **Cookie consent banner** — Required for Google Analytics
- No sensitive data stored on frontend — all form data processed server-side via API routes

---

## 15. Content Requirements from Eriezon Team

The following content must be provided by Eriezon **before** respective pages can be built:

| Content Item                                                                      | Required For                   |
| --------------------------------------------------------------------------------- | ------------------------------ |
| Company history and founding story (300–500 words)                                | About Page                     |
| Leadership team photos + bios                                                     | About Page                     |
| ISO 9001:2015 certificate scan / image                                            | Certifications Page            |
| Complete product list: name, category, active ingredient, target crop, pack sizes | All Product Pages              |
| Product brochures / technical data sheets (PDFs)                                  | Product Detail Pages           |
| MSDS files for each product                                                       | Certifications / Product Pages |
| High-resolution product packaging images                                          | Product Detail Pages           |
| CIB registration numbers for all registered products                              | Certifications Page            |
| Distributor / dealer success stories — 2–3 quotes with name & state               | Home / Distributorship         |
| Company photos: office, warehouse, field team                                     | About / Home                   |
| Logo files — SVG + PNG, white and dark variants                                   | Header / Footer                |
| Social media profile URLs (LinkedIn, Facebook, YouTube, Instagram)                | Footer / Contact               |

---

## 16. Open Questions & Decisions Required

- [ ] Will Eriezon manage content themselves via Sanity Studio, or will updates go through a developer?
- [ ] Is Hindi language support required in Phase 1 or can it wait for Phase 4?
- [ ] Should the Distributorship Application Form also integrate with a CRM (e.g., Zoho CRM, HubSpot)?
- [ ] Are there any products not yet CIB-registered that should be excluded from the public website?
- [ ] Will a blog be actively maintained with new content? _(Minimum 2 posts/month recommended for SEO)_
- [ ] Is a Dealer Locator map needed at launch, or can it start as a simple state-wise list/PDF?
- [ ] Does Eriezon want a separate B2B dealer login portal in Phase 1, or is this a future feature?
- [ ] What is the final domain name? (`eriezon.com` / `eriezoncropscience.com` / other?)
- [ ] Is there a budget for Algolia search, or should built-in filtering be used in Phase 1?
- [ ] Will product pages need multilingual (Hindi) product names and dosage tables?

---

## 17. Glossary

| Term         | Definition                                                                             |
| ------------ | -------------------------------------------------------------------------------------- |
| **PRD**      | Product Requirements Document — defines what the product must do                       |
| **SSG**      | Static Site Generation — pages pre-built at deploy time for maximum speed              |
| **SSR**      | Server-Side Rendering — pages built on request for dynamic data                        |
| **CMS**      | Content Management System — backend tool for managing website content without code     |
| **CIB**      | Central Insecticide Board — Indian government body for pesticide registration          |
| **MSDS**     | Material Safety Data Sheet — safety document for chemical products                     |
| **LCP**      | Largest Contentful Paint — Core Web Vital measuring loading speed                      |
| **CLS**      | Cumulative Layout Shift — Core Web Vital measuring visual stability                    |
| **INP**      | Interaction to Next Paint — Core Web Vital measuring interactivity                     |
| **OG Tags**  | Open Graph tags — control how pages appear when shared on social media                 |
| **JSON-LD**  | JavaScript Object Notation for Linked Data — used for SEO structured data              |
| **DPDP Act** | Digital Personal Data Protection Act 2023 — India's data privacy law                   |
| **GROQ**     | Graph-Relational Object Queries — query language used by Sanity CMS                    |
| **FPO**      | Farmer Producer Organization — collective farming body, a key institutional buyer type |
| **PGR**      | Plant Growth Regulator — a category of agrochemical products                           |
| **HSTS**     | HTTP Strict Transport Security — security header enforcing HTTPS                       |
| **CSP**      | Content Security Policy — browser security header preventing XSS attacks               |

---

_Document prepared for Eriezon Crop Science India Pvt. Ltd._
_Marketed by: Sr. No. 153/17, Opposite Tip Top Hotel, Expressway, Gaurav Icon Tower, Pune, Maharashtra - 411057_
_Reg. Office: C-167, Alpha-1, Greater Noida (G.B. Nagar) U.P. India - 201310_
_Toll Free No: 18005691901 | customercare@eriezon.com | www.eriezon.com_

> This document is confidential and intended for internal use only.
