"use client";
import React from "react";
import {Footer} from "@/component/layout/footer";
import {Navbar} from "@/component/layout/navbar";
import {SakuraCanvas} from "@/component/layout/background";

const Layout = ({children}: React.PropsWithChildren) => {
    React.useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }, []);

    return (
        <div className="flex min-h-dvh flex-col">
            <SakuraCanvas/>
            <Navbar/>
            <main className="flex flex-1 flex-col antialiased">{children}</main>
            <Footer/>
        </div>
    );
}

export default Layout;
