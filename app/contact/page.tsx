import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Let's preserve history together"
        backgroundImage="/images/background_pic.jpg"
        pageName="Contact"
      />
      <ContactSection />
      <section className="py-32 flex items-center justify-center bg-black px-6 relative">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">
            <h3 className="text-3xl font-light tracking-[0.2em] text-foreground mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              COLLABORATE
            </h3>
            <div className="h-px w-16 bg-accent/60 mb-6 mx-auto"></div>
            <div className="space-y-4">
              <p className="text-gray-400">
                We're always looking for historians, museums, and educational institutions to partner with.
              </p>
              <p className="text-accent/80">
                Let's preserve history together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}