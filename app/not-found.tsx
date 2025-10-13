import Typography from "@/components/ui/Typography";
import Container from "@/components/ui/Container";
import BracketLink from "@/components/ui/BracketLink";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="absolute inset-0 gradient-dust opacity-20"></div>
      <div className="absolute inset-0 bg-noise opacity-5"></div>

      <Container size="sm" className="text-center relative z-10">
        <Typography.Heading size="4xl" className="mb-4 tracking-[0.2em]">
          404
        </Typography.Heading>
        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent/60 to-transparent mb-8"></div>
        <Typography.Heading size="base" className="text-accent/80 mb-6">
          Lost in Time
        </Typography.Heading>
        <Typography.Body className="text-gray-400 mb-12 max-w-xl mx-auto">
          It seems this page has vanished into the mists of history.
          Let's get you back to the present.
        </Typography.Body>
        <div className="flex flex-wrap gap-6 justify-center">
          <BracketLink href="/">Return Home</BracketLink>
          <BracketLink href="/projects">View Projects</BracketLink>
        </div>
      </Container>
    </section>
  );
}