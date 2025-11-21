import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import EndpointCard from "@/component/card/endpoint";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PhotoIcon from "@/component/icon/photo";
import HomeIcon from "@/component/icon/home";
import characterList from "@/type/character";
import SafariAlert from "@/component/alert";
import Stack from "@mui/material/Stack";
import database from "@/util/database";
import Grid from "@mui/material/Grid";
import Link from "@/component/link";
import {notFound} from "next/navigation";

interface Props {
    params: Promise<{
        slug: string;
    }>
}

export const dynamic = "force-dynamic";

export const generateStaticParams = async () => {
    return characterList.map((character) => {
        return {
            slug: character.slug,
        }
    })
}

export const generateMetadata = async (props: Props) => {
    const slug = (await props.params).slug
    const character = characterList.find(i => i.slug === slug)
    if (!character) {
        return
    }
    return {
        title: `${character.name} / GochiusaHub`,
    }
}

const Page = async (props: Props) => {
    const slug = (await props.params).slug
    const character = characterList.find(i => i.slug === slug)
    if (!character) {
        return notFound();
    }
    const endpoints = await database.photoEndpoint.findMany({
        where: {
            slug
        },
        include: {
            user: true
        }
    })
    return (
        <main>
            <Container fixed component={"article"}>
                <Stack spacing={2} sx={{my: 2}}>
                    <Breadcrumbs>
                        <Link sx={{display: 'flex', alignItems: 'center'}} href="/" underline="hover" color="inherit">
                            <HomeIcon sx={{mr: 0.5}} fontSize="inherit"/>
                            首页
                        </Link>
                        <Link sx={{display: 'flex', alignItems: 'center'}} href="/photo" underline="hover" color="inherit">
                            <PhotoIcon sx={{mr: 0.5}} fontSize="inherit"/>
                            点兔展
                        </Link>
                        <Link sx={{display: 'flex', alignItems: 'center'}} href={`/photo/${character.slug}`} underline="hover" color="inherit">
                            <FavoriteIcon sx={{mr: 0.5}} fontSize="inherit"/>
                            {character.slug}
                        </Link>
                    </Breadcrumbs>
                    <Typography variant="h3">{character.name}</Typography>
                    {
                        character.description? character.description.split("\n").map((line, index) => (
                            <Typography variant="body1" key={index}>
                                {line}
                            </Typography>
                        )): null
                    }
                </Stack>
                <SafariAlert/>
                <Grid container spacing={2} sx={{mb: 2}} alignItems="stretch">
                    {
                        endpoints.map((i, index) => {
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
            </Container>
        </main>
    )
}

export default Page;
