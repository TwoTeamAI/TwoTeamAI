# TwoTeamAI — Product Engineering Studio Website

TwoTeamAI is a dark, responsive product-engineering studio website built with React, Vite, and Tailwind CSS. It presents the studio's services, delivery process, technical standards, portfolio, and contact paths.

## Features

- **Homepage** — Hero, architecture sandbox, services, process roadmap, case-study spotlight, and final CTA
- **Portfolio** — CargoFlow, Employee Management System, AI Knowledge Assistant, and Cervicare case studies
- **Service and solution pages** — Detailed capabilities, workflows, outcomes, and technology stacks
- **Contact flow** — WhatsApp, Gmail compose, and project brief modal with name, email, phone, company, project type, timeline, and message fields
- **Responsive experience** — Centered mobile branding, mobile drawer navigation, compact mobile architecture view, and reduced mobile homepage content
- **Motion system** — Scroll reveals, staggered entrances, ambient hero motion, CTA shimmer, hover transitions, and reduced-motion support
- **Custom design system** — Syne/Plus Jakarta Sans/Geist Mono typography, Carbon/Charcoal/Mineral surfaces, Amber/Bronze/Emerald accents
- **Production ready** — Docker + Nginx configuration, optimized builds, accessibility features, and a root `.gitignore`

## Tech Stack

- React 18 + Vite 5
- React Router 6
- Tailwind CSS 3.4
- JavaScript with JSX

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000

### Production Build

```bash
npm run build
```

Output in `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Docker

```bash
docker build -t twoteamai .
docker run -p 8080:80 twoteamai
```

## Project Structure

```
twoteamai/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, MobileDrawer
│   │   ├── home/            # Homepage sections and Architecture Sandbox
│   │   └── shared/          # ContactModal, ProjectVisual, RevealOnScroll, TechBadge, WhatsAppFloatingBtn
│   ├── pages/               # Route pages
│   ├── data/                # Services, Solutions, and Projects data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── Dockerfile
├── nginx.conf
└── README.md
```

## Customization

### Colors

Edit `tailwind.config.js` → `theme.extend.colors`

### Typography

Edit `tailwind.config.js` → `theme.extend.fontFamily`

### Content

Edit files in `src/data/`:
- `servicesData.js` — Core services
- `solutionsData.js` — Problem-first solutions
- `projectsData.js` — Portfolio projects and case-study content

### Routes

- `/` — Homepage
- `/services` — Services
- `/solutions` — Solutions
- `/work` — Portfolio
- `/work/:id` — Case-study detail
- `/about` — Studio, team, principles, and engineering standards
- `/contact` — Contact options and project brief form

### Contact form note

The project brief form submits to `api/submit-project-brief.js`, a Vercel serverless function that writes records to Airtable. Configure `AIRTABLE_TOKEN`, `AIRTABLE_BASE_ID`, and `AIRTABLE_TABLE_NAME` as Vercel environment variables. The Airtable table should contain `Full Name`, `Email`, `Phone`, `Company`, `Project Type`, `Timeline`, `Message`, `Status`, and `Submitted At` fields. Never expose the Airtable token in the React client.

## Deployment

### Static Hosting (Vercel, Netlify, Cloudflare Pages)

Connect repository, build command: `npm run build`, output: `dist`

### Docker (AWS ECS, Google Cloud Run, DigitalOcean App Platform)

Use the included `Dockerfile` and `nginx.conf`

### Traditional VPS

```bash
npm run build
# Copy dist/ to nginx/www
```

## Performance

- Code-split by route
- Optimized bundle (vendor chunk)
- CSS minification
- Asset hashing
- Gzip/Brotli ready

## Accessibility

- Semantic HTML5
- ARIA labels & roles
- Focus management
- Color contrast (WCAG AA)
- Keyboard navigation
- Reduced motion support

## License

Private — All rights reserved.