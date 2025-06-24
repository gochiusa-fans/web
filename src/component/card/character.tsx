import React from "react";
import Avatar from "@mui/material/Avatar";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import MuiCard from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import {NextLinkComposed} from "@/component/link";

interface Props {
    name: string;
    slug: string;
    images: string[];
    description?: string
}

const Character = (props: Props) => {
    return (
        <Grid component={MuiCard} size={{xs: 12, sm: 6, md: 4}}>
            <CardActionArea component={NextLinkComposed} to={`/photo/${props.slug}`} sx={{width: '100%', height: '100%'}}>
                <CardHeader
                    avatar={
                        props.images.map((i, index) => (
                            <Avatar
                                src={i}
                                key={index}
                                slotProps={{
                                    img: {
                                        referrerPolicy: "no-referrer"
                                    }
                                }}
                            />
                        ))
                    }
                    title={props.name}
                    subheader={props.description}
                />
            </CardActionArea>
        </Grid>
    );
}

export default Character;
