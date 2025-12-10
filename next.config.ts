import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Removed static export to enable API routes
  // If you need static export for deployment, consider using a separate backend service
  reactStrictMode: true,
};

export default nextConfig;
