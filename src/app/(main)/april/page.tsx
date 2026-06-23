import React from "react";
import Typography from "@mui/material/Typography";
import database from "@/util/database";
import Image, { CardImage } from "@/component/image";
import {LinkButton} from "@/component/link";
import {Metadata} from "next";
import { Card, Chip } from "@heroui/react";

export const dynamic = "force-dynamic";

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
            <Image src="https://static.250king.top/image/2025/03/vrgvusfe.jpg" alt=""/>
            <div className="container mx-auto p-6">
                <div className="flex flex-col gap-4">
                    <div className="text-4xl font-bold">官方愚人节活动归档</div>
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
                    <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {
                            activities.map((i) => (
                                <Card
                                    key={i.id}
                                    className="h-full min-w-0 overflow-hidden p-0 transition-shadow hover:shadow-lg"
                                >
                                    <CardImage src={i.image || "https://static.250king.top/image/2026/04/i3f4xep2.png"} />
                                    <Card.Content className="flex min-w-0 flex-1 flex-col gap-2 p-4">
                                        <Card.Title className="truncate text-xl">{i.name}</Card.Title>
                                        <div className="flex flex-row items-center gap-2">
                                            <Chip variant="primary" color="accent">
                                                <Chip.Label>{i.year}</Chip.Label>
                                            </Chip>
                                        </div>
                                    </Card.Content>
                                    <Card.Footer className="mt-auto flex w-full justify-end gap-2 px-4 pb-4">
                                        <LinkButton href={`/april/${i.year}`} variant="secondary">
                                            详情
                                        </LinkButton>
                                    </Card.Footer>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page;
