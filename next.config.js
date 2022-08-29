/** @type {import('next').NextConfig} */
const nextConfig = {
   // flags: {
   //    DEV_SSR: false,
   //  },
   reactStrictMode: true,
   amp: false,
   experimental: {
      externalDir: true,
   },
};

module.exports = nextConfig;
