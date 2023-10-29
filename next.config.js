/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: false,
    },
    styledComponents: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
