// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // then link as "/contact/" everywhere
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  
  // Chunk loading issues fix
  experimental: {
    optimizeCss: false, // CSS optimization issues avoid karne ke liye
  },
  
  // Static files properly serve karne ke liye
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Production mein chunk loading errors handle karne ke liye
    if (!dev && !isServer) {
      config.output.crossOriginLoading = 'anonymous';
      
      // Chunk splitting optimization
      if (config.optimization && config.optimization.splitChunks) {
        config.optimization.splitChunks = {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        };
      }
    }
    return config;
  },
};

export default nextConfig;