import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const apiOrigin =
  process.env.API_INTERNAL_URL ||
  process.env.NEXT_PUBLIC_API_ORIGIN ||
  "http://127.0.0.1:7008";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "7008",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "7008",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "api.vastraaglobal.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "imagedelivery.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.vastraaglobal.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "videodelivery.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "customer-t5pahgb6yg5h6rnh.cloudflarestream.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    if (process.env.NEXT_PUBLIC_API_URL?.startsWith("http")) {
      return [];
    }
    return [
      {
        source: "/api/:path*",
        destination: `${apiOrigin}/api/:path*`,
      },
      {
        source: "/uploads/:path*",
        destination: `${apiOrigin}/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;
