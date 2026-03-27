import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/equipe.html",
        destination: "/a-propos",
        permanent: true,
      },
      {
        source: "/thierrylaverne.html",
        destination: "/a-propos",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
