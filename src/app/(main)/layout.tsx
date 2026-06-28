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
        <div
            className="
                relative
                bg-background
                text-foreground
                dark:before:hidden
                dark:after:hidden

                before:content-['']
                before:fixed
                before:left-0
                before:top-0
                before:h-screen
                before:w-[12%]
                before:max-w-40
                before:bg-[url('/image/side.svg')]
                before:bg-repeat-y
                before:bg-top-left
                before:pointer-events-none
                before:z-0
                before:transform-[scaleX(-1)]

                after:content-['']
                after:fixed
                after:right-0
                after:top-0
                after:h-screen
                after:w-[12%]
                after:max-w-40
                after:bg-[url('/image/side.svg')]
                after:bg-repeat-y
                after:bg-top-left
                after:pointer-events-none
                after:z-0
            "
        >
            <SakuraCanvas/>
            <div className="relative z-10">
                <Navbar/>
                <main className=" flex flex-1 flex-col antialiased">{children}</main>
                <Footer/>
            </div>
        </div>
    );
}

export default Layout;
