# We Archive Website

Complete multilingual institutional website for We Archive, built with Astro, Tailwind CSS, Sanity CMS, and Vercel deployment support.

## Stack

- Astro
- Tailwind CSS
- Sanity CMS
- Vercel adapter

## Routes

Default Traditional Chinese routes:

- `/zh/`
- `/zh/who-we-are`
- `/zh/our-work`
- `/zh/news`
- `/zh/resources`
- `/zh/donate`
- `/zh/about`

English and French routes:

- `/en/`
- `/fr/`
- Same section slugs under each language.

Top-level routes such as `/who-we-are`, `/news`, and `/donate` redirect to the Traditional Chinese versions.

## Local Development

Install dependencies:

```bash
npm install
```

Start the website:

```bash
npm run dev
```

Preview the production build:

```bash
npm run build
npm run preview
```

## Sanity Setup

Create a Sanity project at [sanity.io](https://www.sanity.io/) and copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Set:

```bash
PUBLIC_SANITY_PROJECT_ID=your-project-id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2025-01-01
```

Run Sanity Studio:

```bash
npm run studio
```

The CMS includes schemas for:

- News articles
- Events
- Projects
- Publications
- Videos
- Gallery images
- Partners
- Team members
- Static pages

Each type includes title, slug, language, excerpt, main image, body content, publish date, SEO title, and SEO description.

## Vercel Deployment

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add the Sanity environment variables in Vercel project settings.
4. Use the default build command:

```bash
npm run build
```

Astro is configured with `@astrojs/vercel/serverless`, so the site is ready for Vercel deployment.

## Design Notes

The visual direction is inspired by international cultural institutions: deep blue, soft gold accents, editorial spacing, strong typography, accessible contrast, and restrained page structure.

No paid font files are included. Typography uses system font stacks:

- Chinese: `"DFKai-SB", "KaiTi", "BiauKai", "Noto Serif TC", serif`
- English/French: `"Baskerville", "Libre Baskerville", "Georgia", serif`
