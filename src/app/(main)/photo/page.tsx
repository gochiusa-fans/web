import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Character from "@/component/card/character";
import Typography from "@mui/material/Typography";
import PhotoIcon from "@/component/icon/photo";
import Container from "@mui/material/Container";
import HomeIcon from "@/component/icon/home";
import characterList from "@/type/character";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Image from "@/component/image";
import Link from "@/component/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "点兔展活动页面归档 / GochiusaHub",
}

const Page = async () => {
    return (
        <main>
            <Image src="https://s1.250king.top/image/2023/04/c81503c2c0375acfff45199d3c9b3b1d.webp" alt=""/>
            <Container fixed component={"article"}>
                <Stack spacing={2} sx={{my: 2}}>
                    <Breadcrumbs>
                        <Link sx={{display: 'flex', alignItems: 'center'}} href="/" underline="hover" color="inherit">
                            <HomeIcon sx={{mr: 0.5}} fontSize="inherit"/>
                            首页
                        </Link>
                        <Link sx={{display: 'flex', alignItems: 'center'}} href="/april" underline="hover" color="inherit">
                            <PhotoIcon sx={{mr: 0.5}} fontSize="inherit"/>
                            点兔展
                        </Link>
                    </Breadcrumbs>
                    <Typography variant="h3">点兔展活动页面归档</Typography>
                    <Typography variant="body1">
                        此页面收集之前ご注文はうさぎですか？展 Café Lumière东京场的活动页面，除了用于活动集章，还可以和自己喜欢的角色拍照。
                    </Typography>
                    <Typography variant="body1">感谢usagi_AI提供相关资料！</Typography>
                </Stack>
                <Grid container spacing={2} sx={{mb: 2}}>
                    {
                        characterList.map((i, index) => {
                            return (
                                <Character key={index} name={i.name} slug={i.slug} images={i.images}/>
                            );
                        })
                    }
                </Grid>
            </Container>
        </main>
    );
}

export default Page;
