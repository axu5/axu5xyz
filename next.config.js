const constants = require("./constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: ".",
    },
    // basePath: constants.path,
    // assetPrefix: constants.path,
};

module.exports = nextConfig;
