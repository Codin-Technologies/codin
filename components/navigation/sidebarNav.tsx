"use client";

import React, { useState } from "react";
import { sidebarItems } from "./sidebarItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SidebarNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      className={`bg-gray-100 shadow-lg h-full transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end pt-4 pr-4 pb-2">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="text-gray-600" width={20} height={20} />
          ) : (
            <ChevronLeft className="text-gray-600" width={20} height={20} />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className={`space-y-1 ${isCollapsed ? "px-3" : "px-4"}`}>
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link href={item.href} key={index}>
              <div
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                  isActive
                    ? "bg-teal-700 text-white"
                    : "hover:bg-teal-800 hover:text-white text-gray-800"
                } ${isCollapsed ? "justify-center" : ""}`}
                title={isCollapsed ? item.name : ""}
              >
                <Icon 
                  className={isCollapsed ? "" : "mr-4"} 
                  width={20} 
                  height={20} 
                />
                {!isCollapsed && (
                  <span className="font-semibold text-sm">{item.name}</span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default SidebarNav;
