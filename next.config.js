/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/listings",
        permanent: false,
      },
    ];
  },
};

module.exports = config;
