// const constants = require("./constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "/",
    },
    // basePath: "/",
    assetPrefix: "/",
};

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
});

module.exports = {
    ...nextConfig,
    ...withMDX({
        pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    }),
};
