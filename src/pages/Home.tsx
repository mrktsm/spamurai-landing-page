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
import { Link } from "react-router-dom";
import WaveBackground from "../WaveBackground";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white h-full font-sans">
      {/* Navigation */}
      <WaveBackground />
      <nav className="bg-gray-950/95 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <div className="flex-shrink-0">
                    {/* Logo container with gradient border */}
                    <div className="bg-gray-950 rounded-full p-1">
                      <img src="logo_red.png" alt="Logo" className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="ml-2 text-xl font-normal bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text">
                    Spamurai
                  </div>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#results"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Results
                </a>
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
                  href="#features"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#results"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Results
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Contact
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

      {/* Header with enhanced gradient */}
      <header className="relative pt-32 pb-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 via-red-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-normal bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-transparent bg-clip-text mb-4">
            Spamurai
          </h1>
          <h2 className="text-2xl font-normal mb-6">
            AI-Powered Protection Against Email Threats
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 font-light">
            Advanced security checks, spam detection, and real-time threat
            analysis powered by custom AI
          </p>
          <a
            href="#"
            className="bg-red-500 text-white font-medium py-3 px-8 rounded-full text-lg hover:bg-white hover:text-red-500 border-2 border-red-500 transition duration-200 inline-block"
          >
            Add to Chrome - It's Free
          </a>
        </div>
      </header>

      {/* Video Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-lg overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.2)]"
              style={{ display: "block", width: "100%", height: "480px" }}
            >
              <iframe
                width="100%"
                height="480"
                src="https://www.youtube.com/embed/IcT6Te3EuV4?controls=0&modestbranding=1&showinfo=0&rel=0"
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-normal bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text mb-8">
            Smart Protection for Your Inbox
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-medium mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-300 font-light">
                Custom-built AI model analyzes email patterns and identifies
                potential threats in real-time
              </p>
            </div>
            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <FontAwesomeIcon
                icon={faLock}
                className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-medium mb-4">
                Security Verification
              </h3>
              <p className="text-gray-300 font-light">
                Automatic SPF and DKIM checks to verify email authenticity and
                prevent spoofing
              </p>
            </div>
            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-medium mb-4">Spam Analytics</h3>
              <p className="text-gray-300 font-light">
                Track spam reduction over time with detailed graphs and
                improvement statistics
              </p>
            </div>
            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-medium mb-4">Link Scanner</h3>
              <p className="text-gray-300 font-light">
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
          <h2 className="text-3xl font-normal bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text mb-8">
            Real Results
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg text-center transform hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <h3 className="text-4xl bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text font-normal mb-2">
                99.9%
              </h3>
              <p className="text-gray-300 font-light">Threat Detection Rate</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg text-center transform hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <h3 className="text-4xl bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text font-normal mb-2">
                90%
              </h3>
              <p className="text-gray-300 font-light">Spam Reduction</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg text-center transform hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <h3 className="text-4xl bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text font-normal mb-2">
                24/7
              </h3>
              <p className="text-gray-300 font-light">Real-time Protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-normal bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text mb-6">
            Protect Your Inbox Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 font-light">
            Join thousands of users who trust Spamurai for their email security
          </p>
          <a
            href="#"
            className="bg-red-500 text-white font-medium py-3 px-8 rounded-full text-lg hover:bg-white hover:text-red-500 border-2 border-red-500 transition duration-200 inline-block"
          >
            Install Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-8 mt-16 text-center relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-4">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              Privacy Policy
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
}

export default Home;
