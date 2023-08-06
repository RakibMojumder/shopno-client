/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "i.ibb.co",
                port: ''
            },
        ],
    },
    target: 'server',
    optimizeFonts: false,
}

module.exports = nextConfig
