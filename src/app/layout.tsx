import React from "react";
import {Metadata} from "next";

interface Props {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "GochiusaHub",
    description: "GochiusaHub - A hub for Gochiusa fans",
    manifest: "/manifest.json",
    icons: {
        icon: "/favicon.ico",
        apple: "/image/192.png",
    }
}

const Layout = (props: Props) => {
    return (
        <html lang="zh-Hans">
            <body style={{height: '100vh'}}>
                {props.children}
            </body>
        </html>
    );
}

export default Layout;
