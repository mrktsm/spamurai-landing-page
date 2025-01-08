import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faLock,
  faChartLine,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="bg-gray-900 text-white font-inter min-h-screen">
      <header className="bg-gray-800 py-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-red-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Spamurai
          </h1>
          <h2 className="text-2xl mb-6">
            AI-Powered Protection Against Email Threats
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Advanced security checks, spam detection, and real-time threat
            analysis powered by custom AI
          </p>
          <a
            href="#"
            className="bg-red-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition-transform transform hover:translate-y-1"
          >
            Add to Chrome - It's Free
          </a>
        </div>
      </header>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/IcT6Te3EuV4"
              title="Product Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl mb-8">Smart Protection for Your Inbox</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg text-center hover:transform hover:translate-y-2 transition-all">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-4xl text-red-500 mb-4"
              />
              <h3 className="text-xl mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-300">
                Custom-built AI model analyzes email patterns and identifies
                potential threats in real-time
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg text-center hover:transform hover:translate-y-2 transition-all">
              <FontAwesomeIcon
                icon={faLock}
                className="text-4xl text-red-500 mb-4"
              />
              <h3 className="text-xl mb-4">Security Verification</h3>
              <p className="text-gray-300">
                Automatic SPF and DKIM checks to verify email authenticity and
                prevent spoofing
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg text-center hover:transform hover:translate-y-2 transition-all">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-4xl text-red-500 mb-4"
              />
              <h3 className="text-xl mb-4">Spam Analytics</h3>
              <p className="text-gray-300">
                Track spam reduction over time with detailed graphs and
                improvement statistics
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg text-center hover:transform hover:translate-y-2 transition-all">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-4xl text-red-500 mb-4"
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

      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl mb-8">Real Results</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg text-center">
              <h3 className="text-4xl text-red-500 mb-2">99.9%</h3>
              <p className="text-gray-300">Threat Detection Rate</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg text-center">
              <h3 className="text-4xl text-red-500 mb-2">90%</h3>
              <p className="text-gray-300">Spam Reduction</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg text-center">
              <h3 className="text-4xl text-red-500 mb-2">24/7</h3>
              <p className="text-gray-300">Real-time Protection</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl mb-6">Protect Your Inbox Today</h2>
          <p className="text-lg text-gray-400 mb-8">
            Join thousands of users who trust Spamurai for their email security
          </p>
          <a
            href="#"
            className="bg-red-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition-transform transform hover:translate-y-1"
          >
            Install Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 mt-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-8 mb-4">
            <a href="#" className="text-gray-400 hover:text-red-500">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500">
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
