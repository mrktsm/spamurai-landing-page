import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white font-inter min-h-screen">
      {/* Navigation - keeping consistent with main site */}
      <nav className="bg-gray-950/95 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="flex-shrink-0">
                  {/* Logo container with gradient border */}
                  <div className="bg-gray-950 rounded-full p-1">
                    <img src="logo.png" alt="Logo" className="h-8 w-8" />
                  </div>
                </div>
                <div className="ml-2 text-xl font-normal bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text">
                  Spamurai
                </div>
              </Link>
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

      {/* Privacy Policy Content */}
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-normal bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text mb-8">
            Privacy Policy
          </h1>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg space-y-6">
            <p className="text-gray-300 mb-4">
              Effective Date: January 7, 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                1. Information We Collect
              </h2>
              <div className="text-gray-300 space-y-2">
                <h3 className="text-xl text-white mb-2">
                  Email Processing and Storage
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    We access your email data through Google's OAuth
                    authentication system
                  </li>
                  <li>
                    Emails are processed on our servers for spam analysis via
                    the Google API
                  </li>
                  <li>
                    We only permanently store:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Message IDs</li>
                      <li>AI-generated spam scores</li>
                      <li>Sender trust metrics</li>
                      <li>Malicious content detection flags</li>
                    </ul>
                  </li>
                  <li>
                    Original email content is not permanently stored after
                    analysis
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>
                  To provide and improve our spam protection services through
                  real-time email analysis
                </li>
                <li>
                  To identify and analyze spam-related trends using our stored
                  metrics
                </li>
                <li>
                  To maintain and improve the security and performance of our
                  service
                </li>
                <li>
                  To communicate with you regarding product updates or
                  promotional materials (if you opt-in)
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-300">
                We do not sell or share your personal information with third
                parties except in the following cases:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>
                  To AWS (our cloud service provider) who hosts our services in
                  the Eastern United States
                </li>
                <li>
                  To comply with legal obligations or in response to valid legal
                  requests
                </li>
                <li>
                  In the event of a merger, acquisition, or sale of our assets,
                  where your data may be transferred as part of the transaction
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">4. Data Security</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>
                  All data transmission between your browser and our servers is
                  encrypted using HTTPS
                </li>
                <li>Our services are hosted on secure AWS infrastructure</li>
                <li>
                  We do not store sensitive information, such as passwords, in
                  an unencrypted form
                </li>
                <li>Regular security monitoring and updates</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                5. Your Data Rights
              </h2>
              <p className="text-gray-300">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Access, correct, or delete your personal information</li>
                <li>Opt out of receiving marketing communications</li>
                <li>Request a copy of your data in a portable format</li>
                <li>Withdraw consent for email processing at any time</li>
              </ul>
              <p className="text-gray-300 mt-4">
                To exercise any of these rights, please contact us at
                markotsymbaluk@gmail.com
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">6. Data Retention</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>
                  Analysis results and message IDs are retained for up to one
                  year
                </li>
                <li>
                  You can request deletion of your data at any time by
                  contacting us
                </li>
                <li>
                  Some information may be retained longer if required by law
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                7. Data Storage Location
              </h2>
              <p className="text-gray-300">
                Our servers are located in the Eastern United States region
                through AWS EC2. By using our service, you consent to your data
                being processed in this location.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-red-400 mb-4">
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will
                notify users of any significant changes by posting the new
                policy on this page and updating the effective date above.
              </p>
            </section>

            <section className="space-y-4 mt-8">
              <p className="text-gray-300">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at markotsymbaluk@gmail.com
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
              to="/terms"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              Terms of Service
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

export default PrivacyPolicy;
