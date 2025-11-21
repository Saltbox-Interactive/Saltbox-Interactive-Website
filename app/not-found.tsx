import Typography from "@/components/ui/Typography";
import Container from "@/components/ui/Container";
import BracketButton from "@/components/ui/BracketButton";
import BoxButton from "@/components/ui/BoxButton";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="absolute inset-0 gradient-dust opacity-20"></div>
      <div className="absolute inset-0 bg-noise opacity-5"></div>

      <Container size="md" className="text-center relative z-10">
        <Typography.Heading size="4xl" className="mb-4 tracking-[0.3em]">
          404
        </Typography.Heading>
        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent/60 to-transparent mb-8"></div>
        <Typography.Heading size="xl" className="text-accent/80 mb-6">
          Lost in Time
        </Typography.Heading>
        <Typography.Body
          size="lg"
          className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          It seems this page has vanished into the mists of history. The past is full of mysteries,
          but this page isn't one of them—it simply doesn't exist.
        </Typography.Body>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <BracketButton href="/">Return Home</BracketButton>
          <BoxButton href="/projects">View Projects</BoxButton>
        </div>

        <div className="border-t border-gray-800 pt-12 mt-12">
          <Typography.Heading size="base" className="text-gray-400 mb-6 uppercase tracking-wider">
            Quick Links
          </Typography.Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Link
              href="/about"
              className="text-gray-500 hover:text-accent transition-colors text-sm"
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className="text-gray-500 hover:text-accent transition-colors text-sm"
            >
              All Projects
            </Link>
            <Link
              href="/news"
              className="text-gray-500 hover:text-accent transition-colors text-sm"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="text-gray-500 hover:text-accent transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
