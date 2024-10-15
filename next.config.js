/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "**",
      "i.ibb.co",
      "res.cloudinary.com",
      "codecony.com",
      "avatar.iran.liara.run",
    ],
    // remotePatterns: [
    //     {
    //         protocol: 'https',
    //         hostname: "**",
    //         port: ''
    //     },
    //     {
    //         protocol: 'https',
    //         hostname: "i.ibb.co",
    //         port: ''
    //     },
    //     {
    //         protocol: 'https',
    //         hostname: "res.cloudinary.com",
    //         port: ''
    //     },
    // ],
  },
  target: "server",
  optimizeFonts: false,
};

module.exports = nextConfig;
