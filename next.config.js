/** @type {import('next').NextConfig} */
const process = require('process');

const nextConfig = {
  experimental: {
    appDir: true
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }]
    });
    return config;
  }
};

module.exports = nextConfig;
