"use client";
import React from "react";
import Link, {LinkProps} from "next/link";
import {useRouter} from "next/navigation";
import {Button, ButtonProps} from "@heroui/react";

type LinkButtonProps = (ButtonProps & { back: true; href?: never }) | (ButtonProps & { back?: false } & LinkProps);

export const LinkButton = ({children, href, back, ...props}: LinkButtonProps) => {
    const router = useRouter();
    if (back) {
        return (
            <Button {...props} onPress={() => router.back()}>
                {children}
            </Button>
        );
    }
    return (
        <Button
            {...props}
            render={(prop) => (
                <Link
                    {...(prop as unknown as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>)}
                    href={href}
                />
            )}
        >
            {children}
        </Button>
    );
};

