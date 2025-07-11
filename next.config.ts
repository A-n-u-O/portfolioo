import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Force static export
  distDir: 'out', // Explicit output directory
  images: {
    unoptimized: true // Required for static export
  }
};

export default nextConfig;