import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/privacy-policy",
        statusCode: 301,
      },
      {
        source: "/terms",
        destination: "/terms-of-service",
        statusCode: 301,
      },
      {
        source: "/help",
        destination: "/faq",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
