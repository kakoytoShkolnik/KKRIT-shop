import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {protocol: 'http', hostname: 'localhost'},
      {protocol: 'https', hostname: 'kkrit-shop.vercel.app', pathname: '/api/images/**'},
    ]
  }
}
export default nextConfig;
