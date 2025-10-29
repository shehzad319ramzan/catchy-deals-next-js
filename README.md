# Catchy Deals

A modern, responsive Next.js e-commerce deals website featuring the best Amazon bargains with a vibrant purple-pink gradient design.

## Features

- 🎨 Modern, user-friendly design with vibrant purple-pink gradient theme
- 📱 Fully responsive for all screen sizes (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 (App Router)
- 🎨 Styled with Tailwind CSS
- 🖼️ Optimized images with Next.js Image component
- ♿ Accessible and SEO-friendly
- 🌈 Beautiful gradient effects on headings, buttons, and sections

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── ProductDeals.tsx # Product deals section
│   ├── ProductCard.tsx  # Individual product card
│   ├── About.tsx        # About section
│   └── Footer.tsx       # Footer component
└── types/
    └── product.ts       # Product type definitions
```

## Responsive Breakpoints

- Mobile: < 640px (1 column)
- Tablet: 640px - 1024px (2-3 columns)
- Desktop: > 1024px (4 columns)

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Autoprefixer** - Browser compatibility

## License

This project is created for demonstration purposes.

