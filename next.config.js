const isProd = process.env.NODE_ENV === "production";
const repoName = "pasindu-portfolio"; // replace with your GitHub repo name

module.exports = {
  swcMinify: true,
  output: "export", // Enable static export

  // Set basePath for GitHub Pages (no trailing slash)
  basePath: isProd ? `/${repoName}` : "",

  // Set assetPrefix to match basePath (no trailing slash)
  assetPrefix: isProd ? `/${repoName}` : "",

  // Use a static-export-friendly image loader
  images: {
    unoptimized: true,
  },

  // Add trailing slash for better compatibility
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
