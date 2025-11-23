# Saltbox Interactive Website

A modern, responsive website for Saltbox Interactive game studio built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ Built with Next.js 15 and React 19
- 🎨 Styled with Tailwind CSS v4
- 📱 Fully responsive design
- 🎮 Game showcase section
- 📰 News/blog section
- 📧 Contact form
- 🌓 Dark mode optimized

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
├── app/                  # Next.js app directory
├── components/
│   ├── layout/          # Header, Footer components
│   ├── sections/        # Page sections (Hero, Games, About, etc.)
│   └── ui/              # Reusable UI components
├── lib/
│   └── utils/           # Utility functions
└── public/              # Static assets
```

## Customization

- Update company information in `app/layout.tsx`
- Add game images and content in `components/sections/GamesSection.tsx`
- Customize colors and styling in `app/globals.css`
- Add social media links in `components/layout/Footer.tsx`

## Technologies

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
