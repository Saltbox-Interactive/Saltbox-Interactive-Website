"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6 relative bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="absolute inset-0 gradient-dust opacity-20"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em] text-foreground mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
            CONNECT
          </h2>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent/60 to-transparent mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join us in preserving history for future generations
          </p>
        </div>

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
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-accent/20 text-foreground focus:outline-none focus:border-accent/60 transition-colors duration-300"
                >
                  <option value="" className="bg-gray-900">Select a subject</option>
                  <option value="collaboration" className="bg-gray-900">Historical Collaboration</option>
                  <option value="technical" className="bg-gray-900">Technical Partnership</option>
                  <option value="media" className="bg-gray-900">Press & Media</option>
                  <option value="general" className="bg-gray-900">General Inquiry</option>
                </select>
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
                <Button type="submit" variant="outline" size="lg" className="w-full md:w-auto min-w-[200px]">
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-accent/60 text-sm tracking-wider uppercase mb-4">Direct Contact</p>
          <a href="mailto:preserve@saltboxinteractive.com" className="text-foreground hover:text-accent transition-colors duration-300 tracking-wider">
            preserve@saltboxinteractive.com
          </a>
        </div>
      </div>
    </section>
  );
}