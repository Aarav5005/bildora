# Bildora Website — Design Brief & Build Prompt

## What is Bildora?
Bildora is an AI automation agency based in India, serving clients globally.
We build AI automations, voice agents, websites, ERPs, and camera-based AI systems
that reduce manual work and replace outdated operations for businesses across any industry.

**Domain:** bildora.in
**Founded by:** Aarav Panchal
**Tone:** Professional, premium, global, trustworthy — not startup-cheesy

---

## Tech Stack
- **Framework:** React (Vite)
- **3D / Animation:** Three.js + React Three Fiber for 3D elements, Framer Motion for scroll/hover animations
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Font:** Load from Google Fonts — display font + clean sans body

---

## Aesthetic Direction

### Feel
- Clean, minimal, white-dominant
- One strong accent color (DO NOT decide — let the designer/AI pick based on what feels premium and modern in 2025)
- Lots of breathing room — generous whitespace
- High contrast text
- Subtle 3D elements that feel purposeful, not gimmicky
- The kind of site a London or Dubai agency would have — globally credible

### What to avoid
- Loud gradients everywhere
- Rainbow colors
- Cluttered sections
- Startup-template feel (hero + 3 cards + footer)
- Anything that looks like a Wix or Squarespace default

### Signature 3D Element
The hero section must have a living, breathing 3D element — could be:
- A floating abstract mesh / geometric shape that reacts to mouse movement
- Particle field that forms a shape on load
- A 3D grid that ripples on scroll
This is the ONE place to be bold. Everything else is quiet.

---

## Site Structure & Sections

### 1. Navbar
- Logo: "Bildora" wordmark — clean, geometric
- Links: Services, Work, About, Contact
- CTA button: "Book a Call" — opens Calendly
- Sticky, minimal, transparent on hero → white on scroll

### 2. Hero
- Headline: Large, punchy — something like:
  "We build AI systems that run your business."
  (copywriter should craft the final version — it must feel bold and direct, not salesy)
- Subheadline: One line describing what Bildora does
- Two CTAs: "See Our Work" (scrolls down) + "Book a Call" (Calendly link)
- Background: The signature 3D element lives here
- NO stock photos. NO illustrations. Just type + 3D.

### 3. Services (What We Build)
Five pillars, shown as clean cards with icon, title, one-line description, and "starting from" price:

| Service | Starting From |
|---|---|
| AI Automation | ₹8,000 / $200 |
| AI Voice Agents | ₹5,000 / $150 |
| Web & App Development | ₹12,000 / $300 |
| ERP & Business Systems | ₹40,000 / $900 |
| AI Camera Systems | ₹20,000 / $500 |

Each card: hover → subtle lift + accent border glow

### 4. How We Work (Process)
3-step process — simple, visual, no fluff:
1. **Understand** — We learn your business and pain points
2. **Build** — We design and deploy your AI system
3. **Grow** — You save time, we support and scale

No numbered markers unless they genuinely show sequence — these do.

### 5. Work / Case Studies
Section title: "Clients We've Worked With"
Show 3 client cards:
- **AsportsZone** — Shopify store + automation
- **MOX VOX** — Flutter app + WhatsApp automation + Google Review bot
- **The Spice Story** — Full restaurant website

Each card: Client name, industry tag, what was built, placeholder for video testimonial
Note: Video testimonials will be added once collected from clients.
Placeholder: A clean "Testimonial coming soon" or video embed placeholder.

### 6. About
Short, human, confident — not a wall of text.
- Who Aarav Panchal is
- What Bildora stands for
- Why clients trust us
- Small stat row: X projects delivered, X countries served, etc. (use realistic numbers)

### 7. Contact / Lead Capture
TWO paths:

**Path 1 — Contact Form**
Fields: Name, Business Name, Country, Service Interested In (dropdown), Budget Range, Message
On submit → sends email to Bildora email (use Formspree or EmailJS)

**Path 2 — Book a Call**
Calendly embed or button → opens Calendly booking page
Label: "Prefer to talk? Book a free 30-min discovery call."

NO WhatsApp button. Keep it professional.

### 8. Footer
- Logo + one-line tagline
- Quick links
- Email contact
- © 2025 Bildora. All rights reserved.
- Social links: LinkedIn, GitHub (optional)

---

## SEO Requirements
This site must rank. Build with:
- Semantic HTML throughout (h1, h2, h3, nav, main, section, footer — correct hierarchy)
- Meta title: "Bildora — AI Automation Agency | Voice Agents, ERP & Web Development"
- Meta description: "Bildora builds AI automations, voice agents, ERPs, and websites for businesses worldwide. Starting from ₹8,000. Book a free discovery call."
- Open Graph tags for social sharing
- Alt text on all images/icons
- Fast load — lazy load 3D only after hero is visible
- Clean URL structure
- Schema markup for agency (LocalBusiness or ProfessionalService)

---

## Copy Principles
- Every headline must answer: "What's in it for the client?"
- No buzzword soup ("leverage synergies", "unlock potential")
- Direct and confident — Bildora knows what it's doing
- Global English — no heavy Indian English phrasing
- CTAs are always action words: "Book a Call", "See Our Work", "Get a Quote"

---

## Lead Generation Goals
The site exists to do ONE thing: get a qualified lead to either:
1. Fill the contact form, OR
2. Book a discovery call

Every section should have a subtle CTA pointing toward one of these two actions.
Don't bury the CTAs. Don't make people hunt for how to contact you.

---

## Deliverables Checklist
- [ ] React app (Vite) with Tailwind
- [ ] Three.js / R3F hero 3D element
- [ ] Framer Motion scroll animations on section entry
- [ ] All 8 sections built
- [ ] Mobile responsive (must look good on phone — many Indian clients browse on mobile)
- [ ] Contact form wired to Formspree or EmailJS
- [ ] Calendly link placeholder
- [ ] SEO meta tags in index.html
- [ ] Clean, commented code — easy to hand off or update
- [ ] Deployed on Vercel (instructions in README)
