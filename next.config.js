/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // if the host is `example.com`,
      // this redirect will be applied
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
