import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Esempi di redirect 301 (Moved Permanently) per SEO
      // Se avevi una pagina /chi-siamo.php o /chi-siamo, la mandiamo su /about
      {
        source: '/chi-siamo',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contatti',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/servizi',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/progetti',
        destination: '/cases',
        permanent: true,
      },
      // Esempio: Redirect da vecchio file PHP
      // {
      //   source: '/old-page.php',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
