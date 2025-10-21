"use client";

import Image from "next/image";
import BracketLink from "@/components/ui/BracketLink";

export default function EmailSubscribe() {
  return (
    <section className="relative bg-black py-16 sm:py-20 md:py-24 pb-36 sm:pb-44 md:pb-52 border-b border-accent/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left - Logo */}
          <div className="flex justify-start lg:absolute lg:left-0 lg:-ml-12">
            <Image
              src="/images/saltbox-logo.svg"
              alt="Saltbox Interactive"
              width={180}
              height={60}
              className="w-32 sm:w-40 md:w-48 h-auto"
            />
          </div>

          {/* Center - Heading and Subscribe Button */}
          <div className="flex-1 text-left space-y-6 sm:space-y-8 lg:mx-auto lg:max-w-xl lg:pt-0">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.2em] text-white"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              SUBSCRIBE TO OUR EMAIL TO DISCOVER WITH US.
            </h2>

            <div className="flex justify-start">
              <BracketLink href="/contact">
                SUBSCRIBE
              </BracketLink>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-[3/2] lg:w-1/3 lg:absolute lg:right-0 lg:mr-[-6rem]">
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
