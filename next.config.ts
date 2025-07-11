import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use static export for manual builds, not for Vercel
  ...(process.env.BUILD_STATIC === 'true' && {
    output: 'export',
    distDir: 'out',
    trailingSlash: true,
    images: {
      unoptimized: true
    }
  }),
  
  // Default config for Vercel and development
  images: {
    unoptimized: true
  }
};

export default nextConfig;