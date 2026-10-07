import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

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
  cacheComponents: true,
  
  /* PPR zostało wyłączone, ponieważ blokowało eksport statyczny (output: "export") */
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
