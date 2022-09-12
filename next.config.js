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
   typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
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
   eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
   },

};

module.exports = nextConfig;
