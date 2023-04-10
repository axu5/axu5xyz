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
        // unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github.com",
                port: "",
                pathname: "/axu5.png",
            },
        ],
    },
    async headers() {
        return [
            {
                source: "/tools/youtube2gif", // "tools/youtube2gif",
                headers: [
                    {
                        key: "Cross-Origin-Embedder-Policy",
                        value: "require-corp",
                    },
                    {
                        key: "Cross-Origin-Opener-Policy",
                        value: "same-origin",
                    },
                    // {
                    //     key: "Access-Control-Allow-Origin",
                    //     value: "*",
                    // },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
