import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Let's preserve history together"
        backgroundImage="/images/background_pic.jpg"
      />
      <ContactSection />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900/50 to-black px-6 relative">
        <div className="absolute inset-0 gradient-dust opacity-20"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-light tracking-[0.2em] text-foreground mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                VISIT US
              </h3>
              <div className="h-px w-16 bg-accent/60 mb-6 mx-auto md:mx-0"></div>
              <div className="space-y-2 text-gray-400">
                <p>Saltbox Interactive Studios</p>
                <p>Historic District</p>
                <p>Frontier Town, USA</p>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-light tracking-[0.2em] text-foreground mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                COLLABORATE
              </h3>
              <div className="h-px w-16 bg-accent/60 mb-6 mx-auto md:mx-0"></div>
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
        </div>
      </section>
    </>
  );
}