import type { NextConfig } from "next";

module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.graphassets.com',
      },
     ]
    },

}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
