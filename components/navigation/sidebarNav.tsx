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
      className={`bg-white shadow-lg h-full transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
      <nav className={`space-y-2 ${isCollapsed ? "px-3" : "px-6"}`}>
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link href={item.href} key={index}>
              <div
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                  isActive
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-800 hover:text-white text-gray-600"
                } ${isCollapsed ? "justify-center" : ""}`}
                title={isCollapsed ? item.name : ""}
              >
                <Icon 
                  className={isCollapsed ? "" : "mr-4"} 
                  width={18} 
                  height={18} 
                />
                {!isCollapsed && (
                  <span className="font-medium">{item.name}</span>
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
