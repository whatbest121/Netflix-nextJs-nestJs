"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";

interface NavbarProps extends React.ComponentPropsWithoutRef<"nav"> { }

export function NavigationMenuHome({ ...props }: NavbarProps) {
    return (
        <nav {...props} className="bg-black px-6 py-3 fixed top-0 left-0 w-full z-50">
            <NavigationMenu className="flex items-center justify-between">
                {/* LOGO */}
                <Image alt="Netflix Logo" src="/Logonetflix.png" width={120} height={40} />

                {/* MENU ITEMS */}
                <NavigationMenuList className="flex gap-6">
                    {["หน้าหลัก", "รายการทีวี", "ภาพยนตร์", "มาใหม่และกำลังฮิต", "รายการของฉัน", "เลือกดูตามภาษา"].map(
                        (menu, index) => (
                            <NavigationMenuItem key={index}>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className="text-white hover:text-gray-400 transition-colors">
                                        {menu}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        )
                    )}
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
}
