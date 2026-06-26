import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.trycloudflare.com",
    "192.168.78.173",
    "192.168.*.*",
    "10.*.*.*",
  ],
  async rewrites() {
    return [
      {
        // URL pública /v2 sirve el contenido de app/mvp-47-usd-v2
        source: "/v2",
        destination: "/mvp-47-usd-v2",
      },
      {
        // URL pública /v3 sirve el contenido de app/mvp-59-usd-v3
        source: "/v3",
        destination: "/mvp-59-usd-v3",
      },
    ];
  },
};

export default nextConfig;
