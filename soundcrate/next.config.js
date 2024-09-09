module.exports = {
  // Remove the 'export' setting to enable dynamic routing and SSR
  // output: 'export',
  images: {
    unoptimized: true, // Optionally keep this if image optimization isn't required
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
};



