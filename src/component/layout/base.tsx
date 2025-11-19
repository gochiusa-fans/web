"use client";
import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";

interface Props {
    children: React.ReactNode;
}

const Base = (props: Props) => {
    React.useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/service-worker.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }, []);

    const theme = createTheme({
        colorSchemes: {
            dark: true
        }
    })
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
}

export default Base;
