/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.devtool = "source-map"; // Mude para source-map
    }
    return config;
  },
};

export default nextConfig;
