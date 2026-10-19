import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A package-lock.json in the home folder makes Next.js guess the wrong project root.
  turbopack: { root: __dirname },
};

export default nextConfig;
