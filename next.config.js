/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  fontLoaders: [
    { loader: '@next/font/google', options: { subsets: ['Poppins'] } },
  ],
};

module.exports = nextConfig;
