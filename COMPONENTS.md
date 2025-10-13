# Component Documentation

## 🎨 UI Components

### BracketLink
Reusable navigation link with animated brackets.

```tsx
import BracketLink from "@/components/ui/BracketLink";

<BracketLink href="/about">Learn More</BracketLink>
<BracketLink href="/projects" className="justify-center">View Projects</BracketLink>
```

### Typography
Consistent typography with Bebas Neue headings and Work Sans body text.

```tsx
import Typography from "@/components/ui/Typography";

<Typography.Heading size="xl">Title Here</Typography.Heading>
<Typography.Body size="lg">Body text here</Typography.Body>
```

**Heading Sizes**: `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`
**Body Sizes**: `sm`, `base`, `lg`, `xl`

### Container
Responsive container with predefined max-widths.

```tsx
import Container from "@/components/ui/Container";

<Container size="xl">Content</Container>
<Container size="sm" padding={false}>No padding</Container>
```

**Sizes**: `sm` (max-w-3xl), `md`, `lg`, `xl`, `2xl`, `full` (max-w-[1800px])

### SectionWrapper
Section container with optional noise overlay.

```tsx
import SectionWrapper from "@/components/ui/SectionWrapper";

<SectionWrapper className="py-20" noise={true}>
  <Container>Content</Container>
</SectionWrapper>
```

### AnimatedSection
Fade-in animation with Intersection Observer and motion preferences support.

```tsx
import AnimatedSection from "@/components/ui/AnimatedSection";

<AnimatedSection id="about" threshold={0.3} delay={200}>
  Content fades in on scroll
</AnimatedSection>
```

### StatusBadge
Project status indicator.

```tsx
import StatusBadge from "@/components/ui/StatusBadge";

<StatusBadge>Now Available</StatusBadge>
<StatusBadge>Coming 2026</StatusBadge>
```

### SocialLinks
Reusable social media icon links.

```tsx
import SocialLinks from "@/components/ui/SocialLinks";

<SocialLinks variant="default" />
<SocialLinks variant="small" />
```

### BackToTop
Floating button that appears on scroll.

```tsx
import BackToTop from "@/components/ui/BackToTop";

// Auto-integrates into layout
<BackToTop />
```

### LoadingSpinner
Animated loading indicator.

```tsx
import LoadingSpinner from "@/components/ui/LoadingSpinner";

<LoadingSpinner size="md" />
<LoadingSpinner size="lg" className="my-8" />
```

**Sizes**: `sm`, `md`, `lg`

### Skeleton
Loading skeleton for content placeholders.

```tsx
import Skeleton, { SkeletonCard, SkeletonText } from "@/components/ui/Skeleton";

<Skeleton variant="rectangular" width="100%" height="200px" />
<SkeletonCard /> // Pre-made card skeleton
<SkeletonText lines={3} /> // Text skeleton
```

### ImageGallery
Grid gallery with lightbox functionality.

```tsx
import ImageGallery from "@/components/ui/ImageGallery";

<ImageGallery
  images={[
    { src: "/image1.jpg", alt: "Description" },
    { src: "/image2.jpg", alt: "Description" },
  ]}
  columns={3}
  gap={4}
/>
```

### Lightbox
Full-screen image viewer with keyboard navigation.

```tsx
import Lightbox from "@/components/ui/Lightbox";

<Lightbox
  images={images}
  initialIndex={0}
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
/>
```

### FullWidthImage
Parallax background image with vignette.

```tsx
import FullWidthImage from "@/components/ui/FullWidthImage";

<FullWidthImage
  src="/image.jpg"
  alt="Description"
  scrollY={scrollY}
  parallaxSpeed={-0.2}
  fadeStart={1800}
  priority
/>
```

---

## 📦 Section Components

### ProjectShowcase
Reusable project display with image and content.

```tsx
import ProjectShowcase from "@/components/sections/ProjectShowcase";

<ProjectShowcase
  imageSrc="/project.jpg"
  imageAlt="Project description"
  status="Now Available"
  title="PROJECT TITLE"
  description="Project description..."
  linkHref="/projects/slug"
  imagePosition="left"
/>
```

---

## 🪝 Custom Hooks

### useScrollPosition
Track scroll position efficiently.

```tsx
import { useScrollPosition } from "@/hooks/useScrollPosition";

const scrollY = useScrollPosition();
```

### useTypingEffect
Animated typing effect.

```tsx
import { useTypingEffect } from "@/hooks/useTypingEffect";

const text = useTypingEffect({
  text: "Hello World",
  enabled: true,
  speed: 50,
});
```

### useReducedMotion
Respect user motion preferences.

```tsx
import { useReducedMotion } from "@/hooks/useReducedMotion";

const prefersReducedMotion = useReducedMotion();
```

### useSmoothScroll
Enable smooth scroll for anchor links.

```tsx
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

// Call in component
useSmoothScroll();
```

---

## 📊 Constants & Data

### Constants
```tsx
import { COLORS, ANIMATION, SCROLL, SOCIAL_LINKS } from "@/lib/constants";

// Use in components
style={{ color: COLORS.accent }}
```

### Content Data
```tsx
import { HOME_CONTENT, ABOUT_CONTENT, PROJECTS_CONTENT } from "@/lib/data/content";

// Use in pages
<Typography.Heading>{HOME_CONTENT.projects.discoverOldDhanis.title}</Typography.Heading>
```

---

## 🛡️ Error Handling

### ErrorBoundary
Catch and display errors gracefully.

```tsx
import ErrorBoundary from "@/components/ErrorBoundary";

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

---

## ♿ Accessibility Features

- ✅ `prefers-reduced-motion` support
- ✅ ARIA labels on all interactive elements
- ✅ Keyboard navigation (Lightbox, BackToTop)
- ✅ Focus states on buttons and links
- ✅ Screen reader announcements

---

## 🎯 Usage Examples

### Complete Page Layout
```tsx
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BracketLink from "@/components/ui/BracketLink";

export default function Page() {
  return (
    <>
      <AnimatedSection>
        <Container size="xl">
          <Typography.Heading size="xl">Page Title</Typography.Heading>
          <Typography.Body>Content here</Typography.Body>
          <BracketLink href="/next">Continue</BracketLink>
        </Container>
      </AnimatedSection>
    </>
  );
}
```

### Image Gallery Section
```tsx
import ImageGallery from "@/components/ui/ImageGallery";

const images = [
  { src: "/img1.jpg", alt: "Image 1" },
  { src: "/img2.jpg", alt: "Image 2" },
];

<ImageGallery images={images} columns={3} />
```

---

## 📝 Notes

- All components support `className` for custom styling
- Components use Tailwind CSS for styling
- All animations respect `prefers-reduced-motion`
- Images use Next.js Image optimization
- TypeScript types included for all props
