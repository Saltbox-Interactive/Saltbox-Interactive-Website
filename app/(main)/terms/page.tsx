import EmailSubscribe from "@/components/sections/EmailSubscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the terms and conditions for using Saltbox Interactive's website and services.",
  openGraph: {
    title: "Terms and Conditions | Saltbox Interactive",
    description: "Terms of use for Saltbox Interactive's website and services.",
    images: ["/images/background_pic.jpg"]
  }
};

export default function TermsPage() {
  return (
    <>
      <section className="py-20 bg-black pt-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-light tracking-wider text-white mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-400 mb-16">
            Terms of use for our website and services
          </p>

          <div className="space-y-12 text-gray-300">

            {/* Introduction */}
            <div>
              <p className="text-lg leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Welcome to Saltbox Interactive. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-3xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                Acceptance of Terms
              </h2>
              <p className="text-lg leading-relaxed">
                By accessing or using the Saltbox Interactive website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you should not use our website.
              </p>
            </div>

            {/* Use of Website */}
            <div>
              <h2 className="text-3xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                Use of Website
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  You agree to use our website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website. Prohibited behavior includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
                  <li>Harassing or causing distress or inconvenience to any person</li>
                  <li>Transmitting obscene or offensive content</li>
                  <li>Disrupting the normal flow of dialogue or activities on the website</li>
                  <li>Attempting to gain unauthorized access to our systems or networks</li>
                  <li>Using automated systems or software to extract data from our website</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-3xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                Intellectual Property Rights
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  All content on this website, including but not limited to text, graphics, logos, images, videos, audio clips, digital downloads, and software, is the property of Saltbox Interactive or its content suppliers and is protected by United States and international copyright laws.
                </p>
                <p className="text-lg leading-relaxed">
                  You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the website without express written permission from Saltbox Interactive.
                </p>
              </div>
            </div>

            {/* User Content */}
            <div>
              <h2 className="text-3xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                User-Submitted Content
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  If you submit content to our website (such as through contact forms or newsletter signups), you grant Saltbox Interactive a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute such content for business purposes.
                </p>
                <p className="text-lg leading-relaxed">
                  You represent and warrant that you own or have the necessary rights to submit such content and that it does not violate any third-party rights.
                </p>
              </div>
            </div>

            {/* External Links */}
            <div>
              <h2 className="text-3xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                Links to Third-Party Websites
              </h2>
              <p className="text-lg leading-relaxed">
                Our website may contain links to third-party websites or services that are not owned or controlled by Saltbox Interactive. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. We strongly advise you to read the terms and conditions and privacy policies of any third-party websites you visit.
              </p>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-3xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                Disclaimer of Warranties
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  This website and its content are provided "as is" without any representations or warranties of any kind, either express or implied. Saltbox Interactive makes no warranties or representations about the accuracy or completeness of this website's content.
                </p>
                <p className="text-lg leading-relaxed">
                  To the fullest extent permitted by law, Saltbox Interactive disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-3xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                Limitation of Liability
              </h2>
              <p className="text-lg leading-relaxed">
                In no event shall Saltbox Interactive, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or in any way connected with the use of our website.
              </p>
            </div>

            {/* Games and Software */}
            <div>
              <h2 className="text-3xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                Games and Software Products
              </h2>
              <p className="text-lg leading-relaxed">
                Any games or software products developed by Saltbox Interactive and available through third-party platforms (such as Steam) are subject to the terms and conditions of those platforms in addition to these terms. Please review the End User License Agreement (EULA) for each specific product.
              </p>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="text-3xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                Changes to Terms
              </h2>
              <p className="text-lg leading-relaxed">
                We reserve the right to modify or replace these Terms and Conditions at any time. We will provide notice of any material changes by posting the new Terms and Conditions on this page and updating the "Last updated" date. Your continued use of the website following any changes constitutes acceptance of those changes.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-3xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                Governing Law
              </h2>
              <p className="text-lg leading-relaxed">
                These Terms and Conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-light tracking-wider text-white mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                Contact Us
              </h2>
              <p className="text-lg leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at{' '}
                <a href="mailto:contact@saltboxinteractive.com" className="text-accent hover:underline">
                  contact@saltboxinteractive.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Email Subscribe Section */}
      <div className="relative bg-black" style={{ zIndex: 100 }}>
        <EmailSubscribe />
      </div>
    </>
  );
}
