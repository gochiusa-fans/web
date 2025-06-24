import React from "react";
import BaseLayout from "@/component/layout/base";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "@/component/layout/footer";
import Navbar from "@/component/layout/navbar";
import Box from "@mui/material/Box";

interface Props {
    children: React.ReactNode;
}

const Layout = (props: Props) => {
    return (
        <BaseLayout>
            <CssBaseline/>
            <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
                <Box sx={{flex: 1}}>
                    <Navbar/>
                    {props.children}
                </Box>
                <Footer/>
            </Box>
        </BaseLayout>
    );
}

export default Layout;
