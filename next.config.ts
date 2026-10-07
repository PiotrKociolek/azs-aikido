import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Opcje wymagane do statycznego eksportu na GitHub Pages */
  output: "export",
  images: {
    unoptimized: true,
  },
  
  /* Konfiguracja ścieżki pod Twoje repozytorium na GitHubie */
  basePath: "/azs-aikido",
  assetPrefix: "/azs-aikido",

  /* Opcje eksperymentalne i optymalizacyjne */
  experimental: {
    agentFeedback: true,
  },

  /* 
    Wyłączamy cacheComponents, ponieważ automatycznie wymusza PPR,
    co blokuje kompilację statyczną (output: "export")
  */
  cacheComponents: false, 
  partialPrefetching: false, 

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
