"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Drawer } from "@heroui/react";

export const Navbar = () => {
    const pathname = usePathname();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const navItems = [
        { name: "愚人节活动", href: "/april" },
        { name: "一起拍照", href: "/photo" },
    ];

    const getNavClassName = (href: string) => {
        const isActive = pathname === href || pathname?.startsWith(`${href}/`);
        return isActive ? "text-focus font-semibold" : "";
    };

    return (
        <nav className="border-separator bg-background/70 sticky top-0 z-40 w-full border-b backdrop-blur-lg">
            <header className="container mx-auto flex h-16 items-center gap-8 px-6">
                <div className="flex shrink-0 items-center gap-4">
                    <Button
                        isIconOnly
                        className="md:hidden"
                        variant="secondary"
                        onPress={() => setIsDrawerOpen(true)}
                    >
                        <span className="icon-[ri--list-unordered]" />
                    </Button>
                    <div className="flex items-center gap-3">
                        <p className="font-bold">Gochiusa Hub</p>
                    </div>
                </div>
                <ul className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className={getNavClassName(item.href)}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </header>
            <Drawer>
                <Drawer.Backdrop isOpen={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                    <Drawer.Content placement="left" className="md:hidden">
                        <Drawer.Dialog aria-label="导航菜单">
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>导航菜单</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                <nav className="flex flex-col gap-1">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-default ${getNavClassName(item.href)}`}
                                            onClick={() => setIsDrawerOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </nav>
    );
};
