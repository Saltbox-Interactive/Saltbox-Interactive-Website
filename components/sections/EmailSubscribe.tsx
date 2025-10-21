"use client";

import Image from "next/image";
import BracketLink from "@/components/ui/BracketLink";

export default function EmailSubscribe() {
  return (
    <section className="relative bg-black py-16 sm:py-20 md:py-24 border-b border-accent/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr] gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left - Logo */}
          <div className="flex justify-start lg:justify-start">
            <Image
              src="/images/saltbox-logo.svg"
              alt="Saltbox Interactive"
              width={180}
              height={60}
              className="w-32 sm:w-40 md:w-48 h-auto"
            />
          </div>

          {/* Center - Heading and Subscribe Button */}
          <div className="text-center space-y-6 sm:space-y-8">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.2em] text-white"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              SIGN UP TO OUR EMAIL
            </h2>

            <div className="flex justify-center">
              <BracketLink href="/contact">
                SUBSCRIBE
              </BracketLink>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-[3/2]">
            <Image
              src="/images/temp/dod-temp-12.jpg"
              alt="Historic site"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
