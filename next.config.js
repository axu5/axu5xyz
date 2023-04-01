// const constants = require("./constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // output: "export",
    experimental: {
        appDir: true,
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github.com",
                port: "",
                pathname: "/axu5.png",
            },
        ],
    },
};

module.exports = nextConfig;
