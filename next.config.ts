import withSerwistInit from "@serwist/next";
import type {NextConfig} from "next";

const withSerwist = withSerwistInit({
    swSrc: "src/app/sw.ts",
    swDest: "public/sw.js",
});

const nextConfig: NextConfig = withSerwist({
    output: "standalone",
    images: {
        dangerouslyAllowLocalIP: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static.250king.top"
            },
            {
                protocol: "https",
                hostname: "pbs.twimg.com"
            }
        ]
    }
});

export default nextConfig;
