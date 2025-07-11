import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: 'export' for development
  // Only use it for static builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    distDir: 'out',
    trailingSlash: true,
    images: {
      unoptimized: true
    }
  }),
  
  // For development, use standard config
  ...(process.env.NODE_ENV === 'development' && {
    images: {
      unoptimized: true // Optional: if you want consistent image handling
    }
  })
};

export default nextConfig;