# HAS Interiors

Marketing site for HAS Interiors (and its Bengaluru brand, FeatherWood), built with Next.js (App Router).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000, with hot reload
npm run build && npm start   # production build
```

## Where things live

- `src/app/*/page.tsx`: one folder per route (`/about`, `/services`, `/projects`, `/locations`, `/faq`, `/contact`). Each sets its own SEO `metadata`.
- `src/lib/site.ts`: contact details, services, store locations, FAQs and structured data. Edit content here.
- `src/components/sections.tsx`: reusable page sections.
- `src/app/globals.css`: all styles.
- `src/assets/images/`: images (served as AVIF/WebP automatically by `next/image`).
- `public/media/`: hero video and poster. `public/brand/`: logos.
- `src/app/sitemap.ts`, `src/app/robots.ts`: generated `/sitemap.xml` and `/robots.txt`.

To add a page: create `src/app/<route>/page.tsx` and add it to `navLinks` in `src/lib/site.ts`. The nav and sitemap pick it up automatically.

## Deploy

Import the repo on Vercel; it detects Next.js with no extra settings. Update `SITE_URL` in `src/lib/site.ts` if the domain isn't `https://hasinteriors.in`.

`_legacy-static/` and `_original-backup/` hold the previous static site and original assets for reference; they aren't deployed.
