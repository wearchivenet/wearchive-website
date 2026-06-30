# Astra Arcana

A multilingual astrology and tarot consultation website with an editorial, queer-forward visual system inspired by the Progress Pride Flag.

## Stack

- Astro 5
- Tailwind CSS
- GSAP + ScrollTrigger
- Sanity CMS
- Cloudflare Workers

## Routes

Traditional Chinese is the default language under `/zh/`. English and French mirror the same structure under `/en/` and `/fr/`.

- `/[language]/astrology`
- `/[language]/tarot`
- `/[language]/journal`
- `/[language]/library`
- `/[language]/book`
- `/[language]/about`

## Development

```bash
npm install
npm run dev
```

Build the Cloudflare output:

```bash
npm run build
```

Preview the production Worker locally:

```bash
npm run preview
```

## Sanity

Set the following environment variables:

```bash
PUBLIC_SANITY_PROJECT_ID=your-project-id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2025-01-01
```

Run the Studio:

```bash
npm run studio
```

The CMS currently supports journal articles, library resources, reading services, and static pages.

## Design system

The dark editorial foundation uses the Progress Pride palette as light, motion, navigation, and interaction energy rather than as decorative stripes everywhere. Motion respects `prefers-reduced-motion`; GSAP animations use transforms and opacity for smooth rendering.

The current brand name, contact address, and booking link are working placeholders and should be replaced before launch.
