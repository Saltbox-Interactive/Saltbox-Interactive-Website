"use client";

import { useState } from "react";
import Image from "next/image";
import BracketButton from "@/components/ui/BracketButton";

export default function EmailSubscribe() {
  const [showForm, setShowForm] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nameValue, email: emailValue }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-black py-16 sm:py-20 md:py-24 pb-40 sm:pb-52 md:pb-64 border-b border-accent/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left - Logo */}
          <div className="flex justify-start lg:absolute lg:left-[-7rem] lg:-top-8">
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
              EXPLORE THE PAST WITH US. SUBSCRIBE.
            </h2>

            <div className="flex justify-start">
              <button
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center gap-2 group py-2"
              >
                <span className="text-accent transition-all duration-300 group-hover:-translate-x-1 text-base sm:text-lg">
                  [
                </span>
                <span
                  className="text-base sm:text-lg font-light tracking-[0.15em] text-gray-400 group-hover:text-accent transition-colors duration-300 uppercase"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {showForm ? "CLOSE" : "SUBSCRIBE"}
                </span>
                <span className="text-accent transition-all duration-300 group-hover:translate-x-1 text-base sm:text-lg">
                  ]
                </span>
              </button>
            </div>
          </div>

          {/* Right - Image or Form */}
          <div className="relative w-full lg:w-1/3 lg:absolute lg:right-0 lg:mr-[-6rem] overflow-hidden">
            <div
              className={`relative w-full aspect-[4/3] lg:aspect-[3/2] transition-all duration-700 ease-in-out ${
                showForm ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              <Image
                src="/images/temp/dod-temp-12.jpg"
                alt="Historic site"
                fill
                className="object-cover"
              />
            </div>

            <div
              className={`absolute inset-0 flex items-start transition-all duration-700 ease-in-out ${
                showForm ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
              }`}
            >
              {!isSubmitted ? (
                <div className="w-full space-y-6">
                  <input
                    type="text"
                    placeholder="Name"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    className="w-full bg-black border border-accent/20 text-white px-4 py-5 focus:outline-none focus:border-accent transition-colors text-base"
                  />
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      className="w-full bg-black border border-accent/20 text-white px-4 py-5 focus:outline-none focus:border-accent transition-colors text-base"
                    />
                    {!emailValue && (
                      <span className="absolute left-[4.25rem] top-1/2 -translate-y-1/2 text-accent text-base pointer-events-none">*</span>
                    )}
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                  <div className="flex justify-start">
                    <BracketButton onClick={handleSubmit} className={isSubmitting ? 'opacity-50 pointer-events-none' : ''}>
                      {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                    </BracketButton>
                  </div>
                </div>
              ) : (
                <div className="w-full flex items-start py-0">
                  <p
                    className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.2em] text-white"
                    style={{ fontFamily: 'var(--font-bebas)' }}
                  >
                    THANKS FOR SUBSCRIBING.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
