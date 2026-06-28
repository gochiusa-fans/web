import React from "react";
import EndpointCard from "@/component/card/endpoint";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TweetCard from "@/component/card/tweet";
import Alert from "@mui/material/Alert";
import database from "@/util/database";
import Masonry from "@mui/lab/Masonry";
import Grid from "@mui/material/Grid";
import Image from "@/component/image";
import Box from "@mui/material/Box";
import {notFound} from "next/navigation";
import {Metadata} from "next";

interface Props {
    params: Promise<{
        year: number
    }>
}

export const dynamic = "force-dynamic";

export const generateMetadata = async (props: Props): Promise<Metadata> => {
    const activity = await database.april.findUnique({
        where: {
            year: Number((await props.params).year)
        },
        include: {
            endpoints: {
                include: {
                    user: true
                }
            },
        }
    });
    if (!activity) {
        return {}
    }
    return {
        title: `${activity.name} / GochiusaHub`,
    }
}

const Page = async (props: Props) => {
    const activity = await database.april.findUnique({
        where: {
            year: Number((await props.params).year)
        },
        include: {
            endpoints: {
                orderBy: {
                    id: "asc"
                },
                include: {
                    user: true
                }
            },
            tweets: {
                orderBy: {
                    tweetId: "asc"
                }
            }
        }
    });
    if (!activity) {
        return notFound();
    }
    return (
        <main>
            <Image src={activity.image} alt=""/>
            <Container component={"article"} fixed>
                    <Typography variant="h3">{activity.name}</Typography>
                    {
                        activity.year > 2017? null: (
                            <Alert severity="warning">
                                由于现代浏览器（如 Chrome、Firefox、Edge 等）对自动播放音频有严格限制，该网页的背景音乐因为没有适配现代浏览器播放策略可能不会自动播放，请注意检查权限！
                            </Alert>
                        )
                    }
                    {
                        activity.description? activity.description.split("\n").map((line, index) => (
                            <Typography variant="body1" key={index}>
                                {line}
                            </Typography>
                        )): null
                    }
                    <Typography variant="h4">镜像站点</Typography>
                    <Grid container spacing={2}>
                        {
                            activity.endpoints.map((i, index) => {
                                return (
                                    <EndpointCard
                                        key={index}
                                        name={i.user.name}
                                        to={i.url}
                                        avatar={i.user.avatar}
                                        description={i.description}
                                    />
                                );
                            })
                        }
                    </Grid>
                    <Typography variant="h4">相关Tweet</Typography>
                </Stack>
                {
                    activity.tweets.length === 0 ? (
                        <Typography variant="body1">
                            暂无相关Tweet。
                        </Typography>
                    ) : (
                        <Masonry columns={{xs: 1, sm: 2, md: 3}} spacing={2} sx={{width: "fit-content", mt: 2}}>
                            {
                                activity.tweets.map((i, index) => (
                                    <Box key={index}>
                                        <TweetCard id={i.tweetId.toString()}/>
                                    </Box>
                                ))
                            }
                        </Masonry>
                    )
                }
            </Container>
        </main>
    )
}

export default Page;
