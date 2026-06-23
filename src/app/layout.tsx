import React from "react";
import { Toast } from "@heroui/react";
import { ThemeProvider } from "@wrksz/themes";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./global.css";

export const metadata: Metadata = {
    title: "GochiusaHub",
    description: "GochiusaHub - A hub for Gochiusa fans",
    manifest: "/manifest.json",
    icons: {
        icon: "/favicon.ico",
        apple: "/image/192.png",
    }
}

const Layout = ({children}: React.PropsWithChildren) => {
    return (
        <html lang="zh-cn" suppressHydrationWarning>
            <body className="bg-background text-foreground">
                <ThemeProvider>
                    <Toast.Provider />
                    <NextTopLoader showSpinner={false} />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

export default Layout;
