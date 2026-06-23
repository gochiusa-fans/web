"use client";
import { Skeleton } from "@heroui/react";
import Box from "@mui/material/Box";
import NextImage from "next/image";
import React from "react";

interface Props {
    src: string;
    alt: string;
}

const Image = (props: Props) => {
    return (
        <Box sx={{position: 'relative', height: 450}}>
            <NextImage src={props.src} alt={props.alt} style={{objectFit: "cover"}} fill/>
        </Box>
    );
}

export const CardImage = ({ src }: { src: string }) => {
    const [loadedSrc, setLoadedSrc] = React.useState<string | null>(null);
    const isLoading = loadedSrc !== src;

    const handleImageRef = React.useCallback(
        (image: HTMLImageElement | null) => {
            if (image?.complete && image.naturalWidth > 0) {
                setLoadedSrc(src);
            }
        },
        [src]
    );

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-default-100">
            {isLoading && <Skeleton className="absolute inset-0 z-10 h-full w-full" />}
            <img
                ref={handleImageRef}
                alt=""
                src={src}
                className={`z-0 h-full w-full object-cover transition-all duration-500 ${
                    isLoading ? "scale-105 opacity-0" : "scale-100 opacity-100"
                } hover:scale-110`}
                onLoad={() => setLoadedSrc(src)}
                onError={() => setLoadedSrc(src)}
                referrerPolicy="no-referrer"
            />
        </div>
    );
};

export default Image;
