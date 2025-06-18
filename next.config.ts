import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Configure TypeScript
  typescript: {
    // Enable type checking during build
    ignoreBuildErrors: false,
  },
  
  // Configure images
  images: {
    domains: ['localhost'],
  },
  
  // Configure webpack
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    
    return config;
  },
};

export default nextConfig;

// Config ini tetap perlu untuk middleware
export const config = {
  matcher: ['/admin/:path*'],
};
