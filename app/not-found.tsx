import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="absolute inset-0 gradient-dust opacity-20"></div>
      
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.2em] text-foreground mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
          404
        </h1>
        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent/60 to-transparent mb-8"></div>
        <h2 className="text-2xl md:text-3xl font-light tracking-wider text-accent/80 mb-6">
          Lost in Time
        </h2>
        <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-xl mx-auto">
          It seems this page has vanished into the mists of history. 
          Let's get you back to the present.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/">
            <Button variant="outline" size="lg">
              Return Home
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="primary" size="lg">
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}