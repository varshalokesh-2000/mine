import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }; // Avoid server-side issues
    return config;
  },
};

export default nextConfig;
