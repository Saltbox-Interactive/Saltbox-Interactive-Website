import Hero from "@/components/sections/Hero";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Our Mission"
        backgroundImage="/images/background_pic.jpg"
      />
      <section className="min-h-screen flex items-center justify-center bg-black px-6 py-20 relative">
        <div className="absolute inset-0 gradient-dust opacity-20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em] text-foreground mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
              OUR STORY
            </h2>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent/60 to-transparent mb-8"></div>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              <p>
                Saltbox Interactive was founded on the belief that history should be experienced, not just read about.
                Our journey began with a simple question: What if we could use modern technology to step back in time?
              </p>
              <p>
                Today, we're a team of historians, developers, and artists united by our passion for preserving the past.
                We specialize in creating historically accurate digital experiences that transport users to pivotal moments in history.
              </p>
              <p>
                From the dusty streets of frontier towns to the steel rails that connected a nation, we're committed to
                capturing every detail, every story, and every lesson from our collective past.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-accent/20">
              <Image
                src="/images/dhanis1.jpg"
                alt="Historic D'Hanis"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-accent/20">
              <Image
                src="/images/dhanis2.jpg"
                alt="Historic D'Hanis"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-accent/20">
              <Image
                src="/images/dhanis3.jpg"
                alt="Historic D'Hanis"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}