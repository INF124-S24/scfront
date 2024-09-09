module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
};

const nextConfig = {
  basePath: "/soundcrate",
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;