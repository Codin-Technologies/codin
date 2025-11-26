import Header from "@/components/header";
import SidebarNav from "@/components/navigation/sidebarNav";
import { ReactNode } from "react";

const TMSLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="h-[7vh] flex">
        <div className="w-64 bg-white flex items-center justify-center">
          <h2 className="text-2xl font-bold text-black">TMS Navigation</h2>
        </div>
        <div className="flex-1">
          <Header
            user={{
              name: "Moody",
              avatar: "https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151133887.jpg",
            }}
          />
        </div>
      </div>

      {/* Sidebar + main content */}
      <div className="h-[93vh] flex">
        <SidebarNav /> {/* Updated: Direct import, no wrapper needed */}
        <div className="p-8 h-[93vh] overflow-auto flex-1">{children}</div>
      </div>
    </div>
  );
};

export default TMSLayout;