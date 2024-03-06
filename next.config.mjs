/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["sun9-7.userapi.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dksmet.ru',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'world-zip.ru',
        port: ''
      },
      {
        protocol: "https",
        hostname: "epsilon-service.ru",
        port: ""
      },
      {
        protocol: "https",
        hostname: "derelik.club",
        port: ""
      },
      {
        protocol: "https",
        hostname: "citylom.ru",
        port: ""
      },
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "zakupka-loma.ru",
        port: ""
      }
      
    ],
  }
};

export default nextConfig;
