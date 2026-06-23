import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
};

export default nextConfig;
