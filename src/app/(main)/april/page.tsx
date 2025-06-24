import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Activity from "@/component/card/activity";
import Container from "@mui/material/Container";
import HomeIcon from "@/component/icon/home";
import TimeIcon from "@/component/icon/time";
import EggIcon from "@/component/icon/egg";
import Stack from "@mui/material/Stack";
import database from "@/util/database";
import Grid from "@mui/material/Grid";
import Image from "@/component/image";
import Link from "@/component/link";
import {Metadata} from "next";

export const revalidate = 600;

export const metadata: Metadata = {
    title: "官方愚人节活动归档 / GochiusaHub",
}

const Page = async () => {
    const activities = await database.april.findMany({
        orderBy: [
            {
                year: "asc"
            }
        ]
    })

    return (
        <main>
            <Image src="https://s1.250king.top/image/2025/03/vrgvusfe.jpg" alt=""/>
            <Container component={"article"} fixed>
                <Stack spacing={2} sx={{my: 2}}>
                    <Breadcrumbs>
                        <Link sx={{display: 'flex', alignItems: 'center'}} href="/" underline="hover" color="inherit">
                            <HomeIcon sx={{mr: 0.5}} fontSize="inherit"/>
                            首页
                        </Link>
                        <Link sx={{display: 'flex', alignItems: 'center'}} href="/april" underline="hover" color="inherit">
                            <EggIcon sx={{mr: 0.5}} fontSize="inherit"/>
                            愚人节活动
                        </Link>
                    </Breadcrumbs>
                    <Typography variant="h3">官方愚人节活动归档</Typography>
                    <Typography variant="body1">
                        本页收集了各个年份的官方愚人节活动的归档，该活动首次举办时间为2014年，但因当时点兔粉丝数少以及相关资料缺乏没有收集，也欢迎各位兔子们提供相关资料
                    </Typography>
                    <Typography variant="body1">
                        愚人节活动和原作有很大的相关性。例如2015年的
                        <span style={{fontStyle: "italic"}}>Magical Girl Chino</span>
                        后来在
                        <span style={{fontStyle: "italic"}}>Dear my sister</span>
                        出现，并且实现了手办化。此外，官方也在活动设计方面十分卖力——可爱的壁纸、以及丰富的剧情深受兔子们的喜爱！
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            activities.map((i, index) => {
                                return (
                                    <Activity
                                        key={index}
                                        title={i.name}
                                        to={`/april/${i.year}`}
                                        image={i.image}
                                        content={(
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "text.secondary",
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <TimeIcon sx={{mr: 0.5}} fontSize="inherit"/>
                                                {i.year}
                                            </Typography>
                                        )}
                                    />
                                );
                            })
                        }
                    </Grid>
                </Stack>
            </Container>
        </main>
    );
}

export default Page;
