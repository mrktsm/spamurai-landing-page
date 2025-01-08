import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faLock,
  faChartLine,
  faSearch,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-inter min-h-screen">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* Logo container with gradient border */}
                <div className="p-1 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-red-500">
                  <div className="bg-gray-900 rounded-full p-1">
                    <FontAwesomeIcon
                      icon={faShieldAlt}
                      className="h-6 w-6 text-red-500"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-4 text-xl font-bold bg-gradient-to-r from-red-400 to-pink-400 text-transparent bg-clip-text">
                Spamurai
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#results"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Results
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition-opacity"
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
                  href="#features"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#results"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Results
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full text-center hover:opacity-90 transition-opacity"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header with enhanced gradient */}
      <header className="relative pt-32 pb-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-pink-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-400 via-pink-400 to-red-400 text-transparent bg-clip-text mb-4">
            Spamurai
          </h1>
          <h2 className="text-2xl mb-6">
            AI-Powered Protection Against Email Threats
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Advanced security checks, spam detection, and real-time threat
            analysis powered by custom AI
          </p>
          <a
            href="#"
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity inline-block"
          >
            Add to Chrome - It's Free
          </a>
        </div>
      </header>

      {/* Video Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              <iframe
                width="100%"
                height="480"
                src="https://www.youtube.com/embed/IcT6Te3EuV4"
                title="Product Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-400 text-transparent bg-clip-text mb-8">
            Smart Protection for Your Inbox
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature cards remain the same but with enhanced hover effect */}
            <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-300">
                Custom-built AI model analyzes email patterns and identifies
                potential threats in real-time
              </p>
            </div>
            {/* Repeat similar styling for other feature cards */}
            <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              <FontAwesomeIcon
                icon={faLock}
                className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl mb-4">Security Verification</h3>
              <p className="text-gray-300">
                Automatic SPF and DKIM checks to verify email authenticity and
                prevent spoofing
              </p>
            </div>
            <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl mb-4">Spam Analytics</h3>
              <p className="text-gray-300">
                Track spam reduction over time with detailed graphs and
                improvement statistics
              </p>
            </div>
            <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl mb-4">Link Scanner</h3>
              <p className="text-gray-300">
                Deep scanning of embedded links and attachments for malware and
                phishing attempts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-400 text-transparent bg-clip-text mb-8">
            Real Results
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg text-center transform hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              <h3 className="text-4xl bg-gradient-to-r from-red-400 to-pink-400 text-transparent bg-clip-text font-bold mb-2">
                99.9%
              </h3>
              <p className="text-gray-300">Threat Detection Rate</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg text-center transform hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              <h3 className="text-4xl bg-gradient-to-r from-red-400 to-pink-400 text-transparent bg-clip-text font-bold mb-2">
                90%
              </h3>
              <p className="text-gray-300">Spam Reduction</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg text-center transform hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              <h3 className="text-4xl bg-gradient-to-r from-red-400 to-pink-400 text-transparent bg-clip-text font-bold mb-2">
                24/7
              </h3>
              <p className="text-gray-300">Real-time Protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-400 text-transparent bg-clip-text mb-6">
            Protect Your Inbox Today
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of users who trust Spamurai for their email security
          </p>
          <a
            href="#"
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity inline-block"
          >
            Install Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-8 mt-16 text-center relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-4">
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Spamurai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
