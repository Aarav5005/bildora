# Bildora — AI Automation Agency Website

Official website for **Bildora** ([bildora.in](https://bildora.in)), an AI automation agency founded by Aarav Panchal. Built with React (Vite), Tailwind CSS, Three.js / React Three Fiber, Framer Motion, and Lucide React.

---

## 🌟 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **3D Interactive Canvas**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations**: Framer Motion & CSS Keyframes
- **Icons**: Lucide React
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *Inter*)
- **SEO & Schema**: JSON-LD Structured Data for `ProfessionalService`

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The site will start at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ☁️ Deployment on Vercel

1. Push your repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `bildora-website` repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

---

## 📁 Project Structure

```
├── public/
│   └── favicon.svg              # Geometric brand monogram & spark
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky glassmorphic navbar with currency switcher
│   │   ├── Hero.jsx             # High-contrast hero section with trust metrics
│   │   ├── HeroCanvas3D.jsx     # Interactive 3D geometric mesh & particle constellation
│   │   ├── Services.jsx         # 5 Core pillars with dynamic ₹ INR / $ USD pricing
│   │   ├── Process.jsx          # 3-Step sequential methodology (Understand, Build, Grow)
│   │   ├── CaseStudies.jsx      # Client showcases with video testimonial preview modals
│   │   ├── About.jsx            # Founder narrative (Aarav Panchal), ethos & verified stats
│   │   ├── Contact.jsx          # Dual-path lead capture (Form + 30-min booking)
│   │   ├── CalendlyModal.jsx    # Discovery call booking modal
│   │   └── Footer.jsx           # Navigation, contact email & social links
│   ├── App.jsx                  # Main application orchestrator
│   ├── index.css                # Tailwind directives & glassmorphic utilities
│   └── main.jsx                 # React root mount
├── index.html                   # Master SEO, Open Graph & JSON-LD schema
├── tailwind.config.js           # Brand color tokens & typography
└── vite.config.js               # Vite bundler configuration
```

---

## 📄 License & Ownership
© 2025 Bildora. All rights reserved. Founded by Aarav Panchal.
