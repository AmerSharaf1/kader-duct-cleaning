# Kader Duct Cleaning — Business Website

Professional air duct and dryer vent cleaning business website built with Next.js and Tailwind CSS.

## Live Site

**Production URL:** https://kaderductcleaning.vercel.app

## Accounts & Access

| Service | Account | Link |
|---------|---------|------|
| GitHub | AmerSharaf1 | https://github.com/AmerSharaf1/kader-duct-cleaning |
| Vercel | ameersharaf10-3039 | https://vercel.com/ameers-projects-0cfdc20b/kader_duct_cleaning |

## Auto-Deploy Setup

Every push to the `master` branch on GitHub automatically redeploys the live site on Vercel.

To enable this (one-time, if not already done):
1. Go to Vercel dashboard → project `kader_duct_cleaning` → **Settings** → **Git**
2. Click **Connect Git Repository** → GitHub → select `AmerSharaf1/kader-duct-cleaning`

## Making Changes & Deploying

```bash
# 1. Make your edits to any file

# 2. Stage and commit
git add .
git commit -m "describe your change"

# 3. Push to GitHub — Vercel auto-deploys from here
git push
```

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout & metadata (SEO title, description)
    page.tsx          # Main page — imports all sections
    globals.css       # Global styles
  components/
    Navbar.tsx        # Fixed top nav with mobile hamburger menu
    Hero.tsx          # Hero section with headline, CTA, stats
    Services.tsx      # 3 service cards (Air Duct, Dryer Vent, HVAC)
    WhyUs.tsx         # 6 reasons to choose Kader Duct
    HowItWorks.tsx    # 4-step process section
    Testimonials.tsx  # 3 customer reviews
    Contact.tsx       # Quote request form
    Footer.tsx        # Footer with links, contact info, social icons
```

## Services Offered

- **Air Duct Cleaning** — Starting at $199
- **Dryer Vent Cleaning** — Starting at $99
- **HVAC Inspection & Sanitization** — Starting at $149

## Contact Info on Site

- Phone: (647) 123-4567
- Email: info@kaderduct.com
- Hours: Mon–Sat 7am–8pm | Sun 9am–5pm

> Update the phone, email, and hours in `src/components/Contact.tsx` and `src/components/Footer.tsx`.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Vercel
- **Repo:** GitHub
