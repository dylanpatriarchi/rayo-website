import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // --- Language & Home Variants ---
      { source: '/en', destination: '/', permanent: true },
      { source: '/it', destination: '/', permanent: true },
      { source: '/en/', destination: '/', permanent: true },
      { source: '/it/', destination: '/', permanent: true },

      // --- Services ---
      { source: '/en/services', destination: '/services', permanent: true },
      { source: '/it/services', destination: '/services', permanent: true },

      // --- Contact ---
      { source: '/en/contact', destination: '/contact', permanent: true },
      { source: '/it/contact', destination: '/contact', permanent: true },
      { source: '/work-with-us', destination: '/contact', permanent: true },

      // --- Projects / Case Studies / Work ---

      // General Indices
      { source: '/projects', destination: '/cases', permanent: true },
      { source: '/it/projects', destination: '/cases', permanent: true },
      { source: '/en/case-studies', destination: '/cases', permanent: true },
      { source: '/case-studies', destination: '/cases', permanent: true },
      { source: '/work', destination: '/cases', permanent: true },
      { source: '/works/:slug*', destination: '/cases', permanent: true },

      // Specific Old Projects (Redirect to Index)
      { source: '/it/work/en/astros', destination: '/cases', permanent: true },
      { source: '/it/work/it/flexfolio', destination: '/cases', permanent: true },
      { source: '/work/en/comingsoon', destination: '/cases', permanent: true },
      { source: '/en/case-studies/mar22-project', destination: '/cases', permanent: true },

      // --- Legal ---
      { source: '/cookies', destination: '/cookie-policy', permanent: true },
      { source: '/en/cookies', destination: '/cookie-policy', permanent: true },
      { source: '/it/cookies', destination: '/cookie-policy', permanent: true },
      { source: '/en/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/it/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/en/terms', destination: '/privacy-policy', permanent: true }, // Map terms to privacy as fallback
      { source: '/it/terms', destination: '/privacy-policy', permanent: true },
      { source: '/terms', destination: '/privacy-policy', permanent: true },

      // --- Local SEO Landing Pages (Redirect to Home) ---
      { source: '/gubbio', destination: '/', permanent: true },
      { source: '/web-gubbio', destination: '/', permanent: true },
      { source: '/san-giustino', destination: '/', permanent: true },
      { source: '/web-terni', destination: '/', permanent: true },
      { source: '/en/sansepolcro', destination: '/', permanent: true },

      // --- Misc ---
      { source: '/newsletter', destination: '/', permanent: true },
      { source: '/en/unsubscribe', destination: '/', permanent: true },
      { source: '/en/thank-you', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
