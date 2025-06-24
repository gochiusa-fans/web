import React from "react";
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import FavoriteIcon from "@mui/icons-material/Favorite";
import TwitterIcon from '@mui/icons-material/Twitter';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import RepeatIcon from '@mui/icons-material/Repeat';
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Link from "@/component/link";
import {headers} from 'next/headers';
import {getTweet, Tweet} from "react-tweet/api";
import {
    enrichTweet,
    QuotedTweet,
    TweetBody,
    TweetInReplyTo,
    TweetMedia,
    TweetNotFound,
    TweetProps,
    TweetSkeleton,
    type TwitterComponents,
} from "react-tweet";

type Props = {
    tweet: Tweet
    components?: TwitterComponents
}

const CustomTweet = async ({tweet: t, components}: Props) => {
    const tweet = enrichTweet(t)
    const header = await headers()
    const host = header.get('host') || 'localhost:3000';
    const protocol = header.get('x-forwarded-proto') || 'http';
    const language = header.get("accept-language")?.split(',')[0] || 'zh-CN';
    const baseUrl = `${protocol}://${host}/_next/image/?`;
    if (tweet.mediaDetails) {
        tweet.mediaDetails?.forEach((photo, index) => {
            const params = new URLSearchParams({
                url: photo.media_url_https,
                w: '384',
                q: '100',
            });
            tweet.mediaDetails![index].media_url_https = `${baseUrl}${params.toString()}`;
        })
    }
    const params = new URLSearchParams({
        url: tweet.user.profile_image_url_https,
        w: '64',
        q: '100',
    })
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar
                        src={`${baseUrl}${params.toString()}`}
                        slotProps={{
                            img: {
                                referrerPolicy: 'no-referrer'
                            }
                        }}
                    />
                }
                title={tweet.user.name}
                subheader={new Date(tweet.created_at).toLocaleString(language)}
                action={
                    <IconButton color="primary" component={Link} href={`https://x.com/${tweet.user.screen_name}/status/${tweet.id_str}`}>
                        <TwitterIcon/>
                    </IconButton>
                }
            />
            <CardContent>
                {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />}
                <TweetBody tweet={tweet} />
                {tweet.mediaDetails?.length ? (
                    <TweetMedia tweet={tweet} components={components} />
                ) : null}
                {tweet.quoted_tweet && <QuotedTweet tweet={tweet.quoted_tweet} />}
            </CardContent>
            <CardActions>
                <IconButton color="primary" component={Link} href={`https://x.com/intent/post?in_reply_to=${tweet.id_str}`}>
                    <ModeCommentIcon />
                </IconButton>
                <IconButton component={Link} href={`https://x.com/intent/retweet?tweet_id=${tweet.id_str}`}>
                    <RepeatIcon />
                </IconButton>
                <IconButton color="error" component={Link} href={`https://x.com/intent/like?tweet_id=${tweet.id_str}`}>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

const TweetContent = async ({ id, components, onError }: TweetProps) => {
    const tweet = id
        ? await getTweet(id).catch((err) => {
            if (onError) {
                onError(err)
            } else {
                console.error(err)
            }
        })
        : undefined

    if (!tweet) {
        const NotFound = components?.TweetNotFound || TweetNotFound
        return <NotFound />
    }

    return <CustomTweet tweet={tweet} components={components} />
}

const TweetCard = ({
    fallback = <TweetSkeleton />,
    ...props
}: TweetProps) => (
    <React.Suspense fallback={fallback}>
        <TweetContent {...props}/>
    </React.Suspense>
)

export default TweetCard;
