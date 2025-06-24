"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import EggIcon from "@/component/icon/egg";
import HomeIcon from "@/component/icon/home";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import PhotoIcon from "@/component/icon/photo";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {NextLinkComposed} from "@/component/link";

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const theme = createTheme({
        palette: {
            primary: {
                main: "#955e4b"
            }
        }
    })
    const pages = [
        {name: "首页", url: "/", icon: <HomeIcon/>},
        {name: "愚人节活动", url: "/april", icon: <EggIcon/>},
        {name: "一起拍照", url: "/photo", icon: <PhotoIcon/>},
    ]

    return (
        <>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List sx={{width: 250}}>
                    {
                        pages.map((page, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton
                                    component={NextLinkComposed}
                                    to={page.url}
                                    onClick={() => {setOpen(false)}}
                                >
                                    <ListItemIcon>
                                        {page.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={page.name}/>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
            <ThemeProvider theme={theme}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            sx={{mr: 2}}
                            onClick={() => setOpen(!open)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6">GochiusaHub</Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar/>
            </ThemeProvider>
        </>
    );
}

export default Navbar;
