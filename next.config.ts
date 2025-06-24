import type {NextConfig} from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
