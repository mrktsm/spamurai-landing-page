import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white font-inter min-h-screen">
      <nav className="bg-gray-950/95 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-gray-950 rounded-full p-1">
                  <img src="logo.png" alt="Logo" className="h-8 w-8" />
                </div>
              </div>
              <div className="ml-2 text-xl font-normal bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text">
                Spamurai
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Home
                </Link>
                <a
                  href="#"
                  className="bg-red-500 text-white font-medium py-2 px-4 rounded-full hover:bg-white hover:text-red-500 border-2 border-red-500 transition duration-200"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon
                  icon={isMenuOpen ? faX : faBars}
                  className="h-6 w-6"
                />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="/"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-red-600 to-red-500 text-white font-medium py-2 px-4 rounded-full text-center hover:opacity-90 transition-opacity"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Terms Content */}
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-normal bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text mb-8">
            Terms of Service
          </h1>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg space-y-6">
            <p className="text-gray-300 mb-4">
              Effective Date: January 7, 2025
            </p>

            <p className="text-gray-300 mb-6">
              Please read these Terms of Service ("Terms") carefully before
              using the Spamurai Chrome extension ("the Service").
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300">
                By installing, accessing, or using Spamurai, you agree to be
                bound by these Terms. If you disagree with any part of the
                terms, you may not access or use the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-300">
                Spamurai is a free Chrome extension that provides:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Email spam detection using AI technology</li>
                <li>Real-time email threat analysis</li>
                <li>Link and attachment scanning</li>
                <li>Email authentication verification</li>
                <li>Spam analytics and reporting</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                3. Google Account Access
              </h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>
                  The Service requires access to your Google account through
                  OAuth authentication
                </li>
                <li>You must have a valid Google account to use the Service</li>
                <li>
                  You grant Spamurai permission to:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Read and process your emails for spam detection</li>
                    <li>Access necessary email metadata</li>
                    <li>
                      Store specific analytics data related to spam detection
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                4. User Responsibilities
              </h2>
              <p className="text-gray-300">You agree to:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Use the Service in accordance with these Terms</li>
                <li>Maintain the security of your Google account</li>
                <li>Use the Service only for lawful purposes</li>
                <li>
                  Not attempt to circumvent or disable the Service or its
                  security features
                </li>
                <li>
                  Not use the Service to access, store, or transmit harmful code
                  or malware
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                5. Privacy and Data Protection
              </h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>
                  Your use of the Service is also governed by our Privacy Policy
                </li>
                <li>
                  We process data in accordance with our Privacy Policy and
                  applicable data protection laws
                </li>
                <li>
                  We implement reasonable security measures to protect your data
                </li>
                <li>
                  You understand that email processing occurs on our servers
                  located in the United States
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                6. Intellectual Property
              </h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>
                  The Service, including all related software, designs, and
                  content, is owned by Spamurai
                </li>
                <li>
                  You are granted a limited, non-exclusive, non-transferable
                  license to use the Service
                </li>
                <li>
                  You may not copy, modify, distribute, sell, or lease any part
                  of the Service
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">7. No Warranty</h2>
              <p className="text-gray-300">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND. As a free service, we make no guarantees
                regarding:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Accuracy of spam detection</li>
                <li>Service availability or uptime</li>
                <li>Security against all possible threats</li>
                <li>Compatibility with all email systems or browsers</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-300">
                As this is a free service, we are not liable for any damages
                arising from your use of the Service.
              </p>
              <p className="text-gray-300 mt-4">We are not responsible for:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>False positives or false negatives in spam detection</li>
                <li>Any loss of data</li>
                <li>Consequences of email processing delays</li>
                <li>Third-party actions or content</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                9. Service Modifications
              </h2>
              <p className="text-gray-300">We reserve the right to:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Modify or discontinue the Service at any time</li>
                <li>Change these Terms at any time</li>
                <li>Update the Service's features or functionality</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Users will be notified of significant changes through our
                website or the Chrome extension
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">10. Termination</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>You may stop using this free Service at any time</li>
                <li>
                  We may terminate or suspend your access if you violate these
                  Terms
                </li>
                <li>
                  Upon termination:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Your license to use the Service ends</li>
                    <li>
                      Any stored data may be deleted according to our Privacy
                      Policy
                    </li>
                    <li>Relevant Terms will survive termination</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                11. General Provisions
              </h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>
                  These Terms constitute the entire agreement between you and
                  Spamurai
                </li>
                <li>
                  If any provision is found unenforceable, the remaining
                  provisions remain in effect
                </li>
                <li>
                  Failure to enforce any right or provision does not constitute
                  a waiver
                </li>
                <li>
                  These Terms are governed by the laws of the United States
                </li>
              </ul>
            </section>

            <section className="space-y-4 mt-8">
              <h2 className="text-2xl text-red-400 mb-4">
                12. Contact Information
              </h2>
              <p className="text-gray-300">
                For any questions about these Terms, please contact us at
                markotsymbaluk@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-4">
            <Link
              to="/"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-gray-400 text-sm font-light">
            © 2025 Spamurai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
