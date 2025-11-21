import withSerwistInit from "@serwist/next";
import type {NextConfig} from "next";

const withSerwist = withSerwistInit({
    swSrc: "src/app/sw.ts",
    swDest: "public/sw.js",
});

const nextConfig: NextConfig = withSerwist({
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s1.250king.top"
            },
            {
                protocol: "https",
                hostname: "pbs.twimg.com"
            }
        ]
    }
});

export default nextConfig;
