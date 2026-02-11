import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   allowedDevOrigins:['local-origin.dev', '*.local-origin.dev', '192.168.*.*'],
   reactStrictMode: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'global.toyota',
        port: '',
        pathname: '/pages/models/images/camry/**',
      },
      {
        protocol: 'https',
        hostname: 'di-uploads-pod21.dealerinspire.com',
        port: '',
        pathname: '/performancehondafairfield/uploads/2022/07/Honda-Accord-feature-overview-fairfield-oh.jpg',
      },
      {
        protocol: 'https',
        hostname: 'vidi.ua',
        port: '',
        pathname: '/uploads/media/dc_site/0004/87/47a363b729db3c6910f8aaecc795fefb88bd38fe.jpeg',
      },
      {
        protocol: 'https',
        hostname: 'skodapartsdirect.co.uk',
        port: '',
        pathname: '/wp-content/uploads/Octavia-Estate-2021-Present.jpg',
      },
      {
        protocol: 'https',
        hostname: 'ymimg1.b8cdn.com',
        port: '',
        pathname: '/resized/car_model/2492/logo/mobile_listing_main_11326_st1280_046.jpg',
      },
    ],
  },
};

export default nextConfig;
