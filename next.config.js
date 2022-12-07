const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "dl.airtable.com",
      "v5.airtableusercontent.com",
    ],
  },
  staticPageGenerationTimeout: 10,
  experimental: {
    appDir: true,
  },
});
