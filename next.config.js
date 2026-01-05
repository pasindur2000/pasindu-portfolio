const isProd = process.env.NODE_ENV === "production";
const repoName = "pasindu-portfolio"; // replace with your GitHub repo name

module.exports = {
  swcMinify: true,

  // Use a static-export-friendly image loader
  images: {
    loader: "akamai", // compatible with `next export`
    path: "", // required for static export
  },

  // Fix CSS/JS paths for GitHub Pages
  assetPrefix: isProd ? `/${repoName}/` : "",

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
