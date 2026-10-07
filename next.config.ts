import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Opcje wymagane do statycznego eksportu na GitHub Pages */
  output: "export",
  images: {
    unoptimized: true,
  },
  
  /* Konfiguracja ścieżki pod repozytorium: autor_name/azs-aikido */
  basePath: "/azs-aikido",
  assetPrefix: "/azs-aikido",

  /* Twoje dotychczasowe opcje konfiguracyjne */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
