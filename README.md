# Archisha Ghanshani — Portfolio

> Personal portfolio website of **Archisha Ghanshani**, a Computer Science Engineering graduate specializing in Artificial Intelligence — built as a premium, editorial, engineering-focused web presence.

**Live at**: [archisha-portfolio.dev](https://archisha-portfolio.dev) <!-- Update with your deployed URL -->

---

## ✦ About

This portfolio communicates **quiet confidence, technical depth, and elegance**. It showcases software engineering projects, AI/ML work, research exploration, hackathon recognition, and work experience through a refined editorial design system — not a generic template.

---

## 🗂️ Sections

| Section | Description |
|---|---|
| **Hero** | Introduction with IST live-status badge and keyword ticker |
| **About** | Personal narrative and engineering philosophy |
| **Experience** | Timeline of professional roles |
| **Projects** | Featured systems (NeuroScript, Sentinel AI) + compact project grid |
| **Research** | Currently exploring: *Mechanistic Interpretability* (IN PROGRESS) |
| **Skills** | Categorised technical skill index |
| **Recognition** | Awards, hackathon wins, publications — with archival photo proofs |
| **Education** | Academic background |
| **Contact** | Email, GitHub, LinkedIn channels |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Bundler | Vite |
| Styling | Vanilla CSS (custom editorial design system) |
| Fonts | Instrument Serif · Inter · JetBrains Mono (Google Fonts) |
| Icons | Lucide React |
| Deployment | Vercel / Netlify / Cloudflare Pages |

---

## 🎨 Design System

- **Light Mode**: Warm linen (`#F7F6F2`) + deep oxblood (`#8B3A3A`)
- **Dark Mode**: Warm charcoal (`#111110`) + muted rose (`#C98282`)
- Typography: Editorial serif headings + clean sans-serif body + mono accents
- Transitions: Smooth `cubic-bezier(0.16, 1, 0.3, 1)` micro-animations
- No neon gradients, no glassmorphism blobs, no generic AI clichés

---

## 🚀 Running Locally

### Prerequisites
- Node.js `>= 18`
- npm `>= 9`

### Setup

```bash
# 1. Clone the repo
git clone https://github.com/archisha-g/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Visit **[http://localhost:5173](http://localhost:5173)** in your browser.

### Build for Production

```bash
npm run build
# Output: dist/
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── recognition/          # Authentic award photos & certificates
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── NeuroScriptVisual.tsx   # Interactive compiler pipeline diagram
│   │   ├── SentinelVisual.tsx      # Interactive threat pipeline diagram
│   │   ├── ResearchExploring.tsx   # Mechanistic Interpretability exploration
│   │   ├── Recognition.tsx         # Awards with archival photo lightbox
│   │   ├── ArchivalLightbox.tsx    # Modal viewer for certificates & photos
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── TinyCat.tsx             # Tiny editorial cat mascot 🐱
│   │   └── ...
│   ├── data/
│   │   └── portfolioData.ts        # All content — projects, experience, awards
│   ├── types.ts
│   ├── App.tsx
│   └── index.css                   # Complete design system (~2800 lines)
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🔑 Developer Mode

Press `Ctrl + Shift + D` anywhere on the site to open the **Developer Inspector** — a hidden drawer showing runtime environment, module info, and keyboard shortcuts.

---

## 📸 Recognition & Archival Proofs

The Recognition section links to **authentic photos and certificates** from:
- **Graph-E-Thon 2.0** (Top 5 Women in Tech + 3rd Overall)
- **QubitX 2025** (1st place, National Hackathon)
- **Hackaccino 3.0** (Winner, Bennett University)
- **GNA Hackathon 3.0** (1st Overall)
- **KRIYETA 4.0** (2nd position, IEEE)
- **Outstanding Placement Award** (Graphic Era University, 2026)

---

## 📄 License

© 2026 Archisha Ghanshani. All rights reserved.

---

<p align="center">Built with quiet confidence.</p>
