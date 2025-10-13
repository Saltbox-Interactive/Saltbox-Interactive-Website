// Colors
export const COLORS = {
  accent: "#d4a574",
  background: "#000000",
  foreground: "#ffffff",
  gray: {
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
  },
} as const;

// Animation Durations (in milliseconds)
export const ANIMATION = {
  fast: 300,
  normal: 500,
  slow: 700,
  verySlow: 1000,
  typing: 50,
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Scroll Configuration
export const SCROLL = {
  heroThreshold: 300,
  slowSpeed: 6.0,
  parallaxSpeed: {
    slow: -0.2,
    medium: -0.3,
    fast: -0.5,
  },
} as const;

// Container Max Widths
export const CONTAINER_SIZES = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
  "2xl": "max-w-7xl",
  full: "max-w-[1800px]",
} as const;

// Typography Sizes
export const TYPOGRAPHY_SIZES = {
  heading: {
    sm: "text-2xl md:text-3xl",
    base: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl lg:text-7xl",
    "2xl": "text-6xl md:text-7xl lg:text-8xl",
    "3xl": "text-7xl md:text-8xl lg:text-9xl",
    "4xl": "text-8xl md:text-9xl",
  },
  body: {
    sm: "text-base md:text-lg",
    base: "text-lg md:text-xl",
    lg: "text-xl md:text-2xl",
    xl: "text-2xl md:text-3xl",
  },
} as const;

// Intersection Observer Options
export const OBSERVER_OPTIONS = {
  default: {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  },
} as const;

// Social Links
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/saltbox-interactive",
  youtube: "#", // Coming soon
  steam: "https://store.steampowered.com/app/3140860/Discover_Old_DHanis/",
} as const;
