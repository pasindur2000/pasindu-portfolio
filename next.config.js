const isProd = process.env.NODE_ENV === "production";
const repoName = "pasindu-portfolio"; // replace with your GitHub repo name

module.exports = {
  swcMinify: true,

  // Set basePath for GitHub Pages
  basePath: isProd ? `/${repoName}` : "",

  // Set assetPrefix to match basePath
  assetPrefix: isProd ? `/${repoName}/` : "",

  // Use a static-export-friendly image loader
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true,
  },

  // Optional: Add trailing slash for better compatibility
  trailingSlash: true,

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
