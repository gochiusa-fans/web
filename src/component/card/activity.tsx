"use client";
import React from "react";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import MuiCard from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import {NextLinkComposed} from "@/component/link";

interface Props {
    title: string;
    to: string;
    image: string;
    content: React.ReactNode;
}

const Activity = (props: Props) => {
    return (
        <Grid component={MuiCard} size={{xs: 12, sm: 6, md: 4}} sx={{width: '100%'}}>
            <CardActionArea component={NextLinkComposed} to={props.to}>
                <CardMedia
                    component="img"
                    height={140}
                    image={props.image}
                    alt=""
                />
                <CardContent>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }}
                    >
                        {props.title}
                    </Typography>
                    {props.content}
                </CardContent>
            </CardActionArea>
        </Grid>
    );
}

export default Activity;
