import EmailSubscribe from "@/components/sections/EmailSubscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn about how Saltbox Interactive collects, uses, and protects your information. Read our privacy policy and cookie usage guidelines.",
  openGraph: {
    title: "Privacy Policy | Saltbox Interactive",
    description: "Our commitment to protecting your privacy and data.",
    images: ["/images/dod-cover.jpg"],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="py-20 bg-black pt-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1
            className="text-5xl md:text-6xl font-light tracking-wider text-white mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-400 mb-16">Our commitment to protecting your privacy</p>

          <div className="space-y-12 text-gray-300">
            {/* Introduction */}
            <div>
              <p className="text-lg leading-relaxed">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-lg leading-relaxed mt-4">
                At Saltbox Interactive, we are committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, and safeguard your information when you visit
                our website.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2
                className="text-3xl font-light tracking-wider text-white mb-6"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Information We Collect
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  We collect information that you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us through our contact form</li>
                  <li>Interact with our website</li>
                </ul>
              </div>
            </div>

            {/* Google Analytics */}
            <div>
              <h2
                className="text-3xl font-light tracking-wider text-white mb-6"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Analytics and Cookies
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  We use Google Analytics to understand how visitors interact with our website.
                  Google Analytics uses cookies to collect information such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
                  <li>Pages you visit</li>
                  <li>Time spent on pages</li>
                  <li>How you arrived at our site</li>
                  <li>General geographic location (country/city level)</li>
                  <li>Device and browser information</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  This information is used solely to improve our website and user experience. You
                  can opt out of Google Analytics tracking by declining cookies when you first visit
                  our site.
                </p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2
                className="text-3xl font-light tracking-wider text-white mb-6"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                How We Use Your Information
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
                  <li>Send you updates and newsletters (if you've subscribed)</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Improve our website and services</li>
                  <li>Analyze website usage and trends</li>
                </ul>
              </div>
            </div>

            {/* Data Sharing */}
            <div>
              <h2
                className="text-3xl font-light tracking-wider text-white mb-6"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Information Sharing
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may
                  share information with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
                  <li>
                    Service providers who help us operate our website (such as Google Analytics)
                  </li>
                  <li>When required by law or to protect our rights</li>
                </ul>
              </div>
            </div>

            {/* Your Choices */}
            <div>
              <h2
                className="text-3xl font-light tracking-wider text-white mb-6"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Your Choices
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  You have the following rights regarding your information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
                  <li>
                    <strong>Cookies:</strong> You can decline cookies through our cookie consent
                    banner
                  </li>
                  <li>
                    <strong>Newsletter:</strong> You can unsubscribe from our newsletter at any time
                    using the link in our emails
                  </li>
                  <li>
                    <strong>Data Access:</strong> You can request access to the personal information
                    we hold about you
                  </li>
                  <li>
                    <strong>Data Deletion:</strong> You can request that we delete your personal
                    information
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2
                className="text-3xl font-light tracking-wider text-white mb-6"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Data Security
              </h2>
              <p className="text-lg leading-relaxed">
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or
                destruction.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2
                className="text-3xl font-light tracking-wider text-white mb-6"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Children's Privacy
              </h2>
              <p className="text-lg leading-relaxed">
                Our website is not intended for children under 13 years of age. We do not knowingly
                collect personal information from children under 13.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2
                className="text-3xl font-light tracking-wider text-white mb-6"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Changes to This Privacy Policy
              </h2>
              <p className="text-lg leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the "Last
                updated" date.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2
                className="text-3xl font-light tracking-wider text-white mb-6"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Contact Us
              </h2>
              <p className="text-lg leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please
                contact us at{" "}
                <a
                  href="mailto:contact@saltboxinteractive.com"
                  className="text-accent hover:underline"
                >
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
