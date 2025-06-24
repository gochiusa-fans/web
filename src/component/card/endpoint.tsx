import React from "react";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import MuiCard from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import {NextLinkComposed} from "@/component/link";

interface Props {
    name: string;
    avatar: string;
    to: string;
    description: string | null;
}

const EndpointCard = (props: Props) => {
    return (
        <Grid component={MuiCard} size={{xs: 12, sm: 6, md: 4}}>
            <CardActionArea component={NextLinkComposed} to={props.to} sx={{width: '100%', height: '100%'}}>
                <CardHeader
                    avatar={
                        <Avatar
                            src={props.avatar}
                            slotProps={{
                                img: {
                                    referrerPolicy: "no-referrer"
                                }
                            }}
                        />
                    }
                    title={props.name}
                    subheader={props.description}
                />
            </CardActionArea>
        </Grid>
    );
}

export default EndpointCard;
