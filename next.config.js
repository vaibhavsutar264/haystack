/** @type {import('next').NextConfig} */
const nextConfig = {
   // flags: {
   //    DEV_SSR: true,
   // },
   reactStrictMode: true,
   unstable_runtimeJS: false,
   amp: false,
   experimental: {
      externalDir: true,
   },
   images: {
      domains: [
         'haystackanalytics.in'
      ]
   },
   webpack5: true,
   webpack: (config) => {
      config.resolve.fallback = { fs: false };

      return config;
   },

};

module.exports = nextConfig;
