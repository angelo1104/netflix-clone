const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const config = {
  sassOptions: {
    cssModules: false,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = withPlugins([withImages, {}], config);
