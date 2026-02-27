# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

No test framework is configured.

## Architecture

**Next.js App Router** site for Rayo Consulting (Italian AI consultancy). All pages live in `app/`, components in `components/`, and MDX content in `content/`.

### Routing & Redirects
Pages follow file-based App Router conventions. `next.config.ts` contains extensive 301 redirects for legacy routes (old i18n `/en/*`, `/it/*` paths, old URL schemes for projects/case-studies). When adding new pages, check if existing redirects conflict.

### Content System
Blog posts, case studies, and job listings are MDX files in `content/{blog,cases,jobs}/`. Loaded server-side via `utils/mdx.ts` using `gray-matter` for frontmatter and `next-mdx-remote` for rendering. Posts are sorted by `publishedAt` date.

### Styling
**Tailwind CSS v4** configured via PostCSS (`postcss.config.mjs`). Design tokens live in `app/globals.css` as CSS custom properties in OKLch color space, mapped to Tailwind via `@theme inline`. Use `cn()` from `lib/utils.ts` (clsx + tailwind-merge) for conditional class names. Primary brand color: `#0047FF`. Font: Manrope (Google Font).

### Animation Strategy
Three layers of animation are used:
1. **GSAP + ScrollTrigger** — scroll-driven text reveals and staggered lists via `utils/gsap-animations.ts`
2. **Framer Motion** — component-level hover and entrance animations
3. **Lenis** — smooth scroll wrapper in `components/SmoothScroller.tsx`

### 3D / Advanced Visualizations
Three.js via `@react-three/fiber` and `@react-three/drei`. Globe component is in `components/ui/globe.tsx`. Neural network visualization in `components/NeuralNetwork.tsx`. These are client components (`"use client"`).

### Component Conventions
- Server components by default; add `"use client"` only when needed (event handlers, browser APIs, animation hooks)
- UI primitives in `components/ui/` (shadcn/ui "new-york" style with Lucide icons)
- Class variants via `class-variance-authority`

### Key Integrations
- **Calendly** — `components/CalendlyWidget.tsx`
- **Google AdSense** — `components/AdSenseLoader.tsx` + `components/GoogleAdUnit.tsx`
- **Analytics** — `components/Analytics.tsx`
- **Cookie consent** — `components/CookieBanner.tsx`

### SEO
Structured data (JSON-LD) is embedded in `app/layout.tsx` for ProfessionalService, Organization, OfferCatalog, and FAQPage schemas. OG image at `public/og-image.png` (1200×630).
