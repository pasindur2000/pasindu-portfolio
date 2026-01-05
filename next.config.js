module.exports = {
  swcMinify: true,

  // Use a static-export-friendly image loader
  images: {
    loader: "akamai", // compatible with `next export`
    path: "", // required for static export
  },

  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
