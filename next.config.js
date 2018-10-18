const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const nextConfig = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/todo': { page: '/todo' },
      '/test': { page: '/test' },
    };
  },
};

module.exports = withPlugins([withSass, withImages], nextConfig);
