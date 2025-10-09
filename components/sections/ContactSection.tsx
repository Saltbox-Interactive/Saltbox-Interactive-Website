"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-40 px-6 relative bg-gradient-to-b from-black via-gray-900/30 to-black"
    >
      <div className="absolute inset-0 gradient-dust opacity-20"></div>

      <div
        className={`relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-foreground mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
            CONNECT WITH US
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            Join us in preserving history for future generations
          </p>
        </div>

        <div className="container mx-auto max-w-4xl">
          <Card className="bg-black/40 border-accent/20">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-wider uppercase text-accent/60 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-accent/20 text-foreground placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs tracking-wider uppercase text-accent/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-accent/20 text-foreground placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs tracking-wider uppercase text-accent/60 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-accent/20 text-foreground placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-wider uppercase text-accent/60 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-transparent border border-accent/20 text-foreground placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your interest in historical preservation..."
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto min-w-[200px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {submitStatus === 'success' && (
                  <p className="mt-4 text-accent">Message sent successfully! We'll get back to you soon.</p>
                )}

                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-500">Failed to send message. Please try again or email us directly.</p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

          <div className="mt-16 text-center">
            <p className="text-accent/60 text-sm tracking-wider uppercase mb-4">Direct Contact</p>
            <a href="mailto:discover@saltboxinteractive.com" className="text-foreground hover:text-accent transition-colors duration-300 tracking-wider text-lg">
              discover@saltboxinteractive.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}