import React from "react";
import { sidebarItems } from "./sidebarItems";
import Link from "next/link";

const SidebarNav = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-black">TMS Navigation</h2>
            <nav className="space-y-4">
                {sidebarItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                                    <Link href={item.href} key={index}>
                                        <div className="flex items-center p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
                                            <Icon className="mr-4 text-gray-600" width={18} height={18} />
                                            <span className="text-black font-medium">{item.name}</span>
                                        </div>
                                    </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default SidebarNav;