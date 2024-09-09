module.exports = {
  output: 'export', // For static export
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
  basePath: '/soundcrate', // Replace with your actual repo name
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // Handle 'fs' module on the client-side
      };
    }
    return config;
  },
};


