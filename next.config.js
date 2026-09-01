/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/PORTFOLIO' : '',
  assetPrefix: isProd ? '/PORTFOLIO/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/PORTFOLIO' : '',
  },
  trailingSlash: true,
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
