# Spamurai Landing Page

<p align="center">
  <img src="public/logo_red.png" alt="Spamurai Logo" width="150" />
</p>

This repository contains the landing page website for Spamurai, an AI-powered Chrome extension for email protection. The website serves as the primary marketing and information hub for the Spamurai Chrome extension.

Visit the live site at [spamurai.online](https://spamurai.online)

For the actual Chrome extension, visit our [extension repository](https://github.com/mrktsm/spamurai).

## Overview

This landing page showcases Spamurai's features and capabilities, including:
- AI-powered email threat detection
- Security verification systems
- Spam analytics and reporting
- Link and attachment scanning

The website is designed to funnel users to the Chrome Web Store (coming soon) where they can install the Spamurai extension.

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Icons**: Font Awesome
- **Deployment**: AWS
- **Domain**: spamurai.online

## Project Structure

```
spamurai-landing/
├── src/
│   ├── pages/
│   │   ├── Home.tsx            # Main landing page
│   │   ├── PrivacyPolicy.tsx   # Privacy policy page
│   │   └── TermsOfService.tsx  # Terms of service page
│   ├── components/
│   │   └── WaveBackground.tsx  # Animated background component
│   ├── ScrollToTop.tsx         # Scroll restoration utility
│   └── App.tsx                 # Main application component
├── public/
│   └── logo_red.png
└── index.html
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/spamurai-landing.git
```

2. Install dependencies:
```bash
cd spamurai-landing
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Related Projects

- [Spamurai Chrome Extension](https://github.com/yourusername/spamurai-extension) - The main Chrome extension repository
- Chrome Web Store Link (Coming Soon)

## 💻 Development

This project uses:
- TypeScript for type safety
- Tailwind CSS for styling
- React Router for navigation
- Vite for fast development and optimized builds

## Deployment

The website is deployed on AWS and accessible at spamurai.online. The deployment process includes:
1. Building the production bundle
2. AWS deployment
3. Domain configuration

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more details.
