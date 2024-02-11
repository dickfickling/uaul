/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path",
        has: [
          {
            type: "host",
            value: "uaul.fickling.us",
          },
        ],
        permanent: false,
        destination: "https://uaul.d10g.co/:path",
      },
    ];
  },
};

module.exports = nextConfig;
