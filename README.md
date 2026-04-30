# MinhSonLe-Portfolio

Personal portfolio for Minh Son Le — Backend Java Engineer.

Live: https://minhsonle.sunhomelab.com

## Stack

- **Astro 5** — static site generator
- **Tailwind CSS 3** — styling
- **Cloudflare Pages** — hosting
- **Cloudflare DNS** (sunhomelab.com) — domain

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Edit content

All site copy lives in [src/data/site.ts](src/data/site.ts):

- `site` — name, title, contact, summary
- `skillGroups` — skill chips grouped by category
- `experience` — job entries
- `projects` — project cards (`featured: true` for the large hero cards)
- `education` / `certifications` — about section right column

The resume PDF lives at [public/resume.pdf](public/resume.pdf). Replace it
to update the download.

## Deploy — Cloudflare Pages

### 1. Push this repo to GitHub

The repo is `DaRealSun/MinhSonLe-Portfolio`.

### 2. Create the Pages project

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize and pick the `MinhSonLe-Portfolio` repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `20` (set `NODE_VERSION=20` env var if needed)
4. Save and deploy. The first deploy gives you `<project>.pages.dev`.

### 3. Add the custom domain `minhsonle.sunhomelab.com`

1. In the Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter `minhsonle.sunhomelab.com`.
3. Cloudflare will auto-create the CNAME in the `sunhomelab.com` zone (it's
   in the same account).
4. Wait for the certificate (usually < 1 minute).

That's it — pushing to `main` redeploys automatically.

## File map

```
src/
  components/   # Hero, About, Skills, Experience, Projects, Contact, Nav, Footer
  data/site.ts  # all site content
  layouts/
    Base.astro  # html shell, fonts, scroll-reveal script
  pages/
    index.astro # composes all sections
  styles/
    global.css  # tailwind + custom utilities
public/
  resume.pdf    # downloadable resume
  favicon.svg
  _headers      # Cloudflare Pages cache + security headers
```
