import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faLock,
  faChartLine,
  faSearch,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import WaveBackground from "../WaveBackground";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white h-full font-sans">
      {/* Gradient Circle Elements */}
      <div className="fixed top-1 left-[40%] w-96 h-96 rounded-full bg-gradient-to-r from-red-500/20 to-red-700/10 blur-3xl"></div>
      <div className="fixed top-3/4 right-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-red-600/10 to-red-400/5 blur-3xl"></div>
      <div className="fixed bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-red-500/15 to-red-800/5 blur-3xl"></div>

      {/* Navigation */}
      <WaveBackground />
      <nav className="bg-stone-950/95 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <div className="flex-shrink-0">
                    {/* Logo container with gradient border */}
                    <div className="bg-stone-950 rounded-full p-1">
                      <img
                        src="spamurai-example.png"
                        alt="Logo"
                        className="h-6 w-6"
                      />
                    </div>
                  </div>
                  <div className="text-xl font-semibold bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text">
                    SPAMURAI
                  </div>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-stone-300 hover:text-red-400 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#results"
                  className="text-stone-300 hover:text-red-400 transition-colors"
                >
                  Results
                </a>
                <a
                  href="https://chromewebstore.google.com/detail/spamurai-shield-your-inbo/aelogdngopigomkfnmpnngfnbdmehkjg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white font-medium py-2 px-4 rounded-full hover:bg-white hover:text-red-500 border-2 border-red-500 transition duration-200"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <FontAwesomeIcon
                icon={isMenuOpen ? faClose : faBars}
                className={`h-5 w-5 text-stone-300 hover:text-red-400 transition-colors duration-200 cursor-pointer ${
                  isMenuOpen ? "transform scale-90" : ""
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#features"
                  className="text-stone-300 hover:text-red-400 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#results"
                  className="text-stone-300 hover:text-red-400 transition-colors"
                >
                  Results
                </a>
                <a
                  href="https://chromewebstore.google.com/detail/spamurai-shield-your-inbo/aelogdngopigomkfnmpnngfnbdmehkjg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white font-medium py-2 px-4 rounded-full hover:bg-white hover:text-red-500 border-2 border-red-500 transition duration-200 w-fit"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header */}
      <header className="relative pt-32 pb-24 text-center overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-semibold bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-transparent bg-clip-text mb-4">
            SPAMURAI
          </h1>
          <h2 className="text-2xl font-normal mb-6">
            AI-Powered Protection Against Email Threats
          </h2>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto mb-8 font-light">
            Advanced security checks, spam detection, and real-time threat
            analysis powered by custom AI
          </p>
          <a
            href="https://chromewebstore.google.com/detail/spamurai-shield-your-inbo/aelogdngopigomkfnmpnngfnbdmehkjg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white font-medium py-3 px-8 rounded-full text-lg hover:bg-white hover:text-red-500 border-2 border-red-500 transition duration-200 inline-block"
          >
            Add to Chrome - It's Free
          </a>
        </div>
      </header>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Responsive Iframe Container */}
            <div
              className="relative"
              style={{ paddingTop: "63.5%" /* 16:10 aspect ratio */ }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                src="https://www.youtube.com/embed/kYLiuQEuTiY?controls=1&modestbranding=1&showinfo=0&rel=0"
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
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-normal bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text mb-8">
            Smart Protection for Your Inbox
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-stone-900/50 p-8 rounded-lg text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-medium mb-4">AI-Powered Analysis</h3>
              <p className="text-stone-300 font-light">
                Custom-built AI model analyzes email patterns and identifies
                potential threats in real-time
              </p>
            </div>
            <div className="group bg-stone-900/50 p-8 rounded-lg text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <FontAwesomeIcon
                icon={faLock}
                className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-medium mb-4">
                Security Verification
              </h3>
              <p className="text-stone-300 font-light">
                Automatic SPF and DKIM checks to verify email authenticity and
                prevent spoofing
              </p>
            </div>
            <div className="group bg-stone-900/50 p-8 rounded-lg text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-medium mb-4">Spam Analytics</h3>
              <p className="text-stone-300 font-light">
                Track spam reduction over time with detailed graphs and
                improvement statistics
              </p>
            </div>
            <div className="group bg-stone-900/50 p-8 rounded-lg text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-medium mb-4">Link Scanner</h3>
              <p className="text-stone-300 font-light">
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
            <div className="bg-stone-900/50 p-8 rounded-lg text-center transform hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <h3 className="text-4xl bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text font-normal mb-2">
                99.9%
              </h3>
              <p className="text-stone-300 font-light">Threat Detection Rate</p>
            </div>
            <div className="bg-stone-900/50 p-8 rounded-lg text-center transform hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <h3 className="text-4xl bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text font-normal mb-2">
                90%
              </h3>
              <p className="text-stone-300 font-light">Spam Reduction</p>
            </div>
            <div className="bg-stone-900/50 p-8 rounded-lg text-center transform hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <h3 className="text-4xl bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text font-normal mb-2">
                24/7
              </h3>
              <p className="text-stone-300 font-light">Real-time Protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center relative">
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-normal bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text mb-6">
            Protect Your Inbox Today
          </h2>
          <p className="text-lg text-stone-300 mb-8 font-light">
            Start your journey to a safer inbox with Spamurai today.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/spamurai-shield-your-inbo/aelogdngopigomkfnmpnngfnbdmehkjg"
            target="_blank"
            rel="noopener noreferrer"
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
              className="text-stone-400 hover:text-red-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-stone-400 hover:text-red-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-stone-400 text-sm font-light">
            © 2025 Spamurai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
