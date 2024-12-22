import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, {
          test: /\.svg$/i,
          use: ['@svgr/webpack'],
        }]
      }
    };
  }
};

export default nextConfig;
