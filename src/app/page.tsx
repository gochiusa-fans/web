"use client";
import React from "react";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter();
    
    React.useEffect(() => {
        router.replace("/april");
    }, [router])
    
    return (
        <></>
    );
}

export default Page;
