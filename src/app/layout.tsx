import React from "react";
import {Metadata} from "next";

interface Props {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "GochiusaHub",
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
