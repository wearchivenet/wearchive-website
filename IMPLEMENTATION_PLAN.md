# We Archive Website Implementation Plan

## Goals

Build a production-ready multilingual institutional website for We Archive using Astro, Tailwind CSS, Sanity CMS, and Vercel deployment conventions.

The design direction is inspired by international cultural institutions such as UNESCO: structured editorial layouts, strong serif typography, restrained ornament, generous white space, deep blue as the primary color, and soft gold accents. The implementation avoids copying any UNESCO layout directly.

## Technical Approach

1. Scaffold an Astro site with Tailwind CSS and Vercel adapter support.
2. Configure global typography:
   - Traditional Chinese: `"DFKai-SB", "KaiTi", "BiauKai", "Noto Serif TC", serif`
   - English and French: `"Baskerville", "Libre Baskerville", "Georgia", serif`
3. Add multilingual routing:
   - `/zh/`
   - `/en/`
   - `/fr/`
   - localized section pages under each language.
4. Add top-level section routes:
   - `/who-we-are`
   - `/our-work`
   - `/news`
   - `/resources`
   - `/donate`
   - `/about`
   These redirect to the Traditional Chinese version by default.
5. Create reusable layout and UI components:
   - Header
   - Mobile navigation
   - Language switcher
   - Footer
   - Hero
   - Section heading
   - Editorial card grid
   - CTA band
6. Configure Sanity Studio and schema types for:
   - News articles
   - Events
   - Projects
   - Publications
   - Videos
   - Gallery images
   - Partners
   - Team members
   - Static pages
7. Add shared Sanity fields across all editorial content:
   - title
   - slug
   - language
   - excerpt
   - main image
   - body content
   - publish date
   - SEO title
   - SEO description
8. Add fallback content in local data files so the website works before Sanity credentials are added.
9. Add README instructions for local development, Sanity setup, and Vercel deployment.
10. Verify the project with local dependency checks where possible.

## File Structure

```text
.
├── astro.config.mjs
├── package.json
├── README.md
├── IMPLEMENTATION_PLAN.md
├── sanity.config.ts
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   └── images/
│       └── logo.png
├── src/
│   ├── components/
│   │   ├── CallToAction.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── SectionHeading.astro
│   │   └── StoryCard.astro
│   ├── data/
│   │   └── content.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   ├── i18n.ts
│   │   └── sanity.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── who-we-are.astro
│   │   ├── our-work.astro
│   │   ├── news.astro
│   │   ├── resources.astro
│   │   ├── donate.astro
│   │   ├── about.astro
│   │   ├── zh/
│   │   │   ├── index.astro
│   │   │   └── [section].astro
│   │   ├── en/
│   │   │   ├── index.astro
│   │   │   └── [section].astro
│   │   └── fr/
│   │       ├── index.astro
│   │       └── [section].astro
│   └── styles/
│       └── global.css
└── studio/
    ├── deskStructure.ts
    └── schemas/
        ├── blockContent.ts
        ├── documentTypes.ts
        └── index.ts
```

## Deployment Notes

The site is Vercel-ready through `@astrojs/vercel`. Sanity credentials are configured through environment variables:

- `PUBLIC_SANITY_PROJECT_ID`
- `PUBLIC_SANITY_DATASET`
- `PUBLIC_SANITY_API_VERSION`

The site uses fallback content when these variables are missing.
