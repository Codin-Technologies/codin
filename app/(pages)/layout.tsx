import dynamic from "next/dynamic";
import Header from "@/components/header";
import { ReactNode } from "react";

// Dynamically import SidebarNav as a client component
const SidebarNav = dynamic(
  () => import("@/components/navigation/sidebarNav"),
  {
    ssr: false, // disable server-side rendering
    loading: () => <div className="w-64 bg-white flex items-center justify-center">Loading sidebar...</div>, // optional fallback
  }
);

const TMSLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top header */}
      <div className="h-[7vh] flex">
        <div className="w-64 bg-white flex items-center justify-center">
          <h2 className="text-2xl font-bold text-black">TMS Navigation</h2>
        </div>
        <div className="flex-1">
          <Header
            user={{
              name: "Moody",
              avatar:
                "https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151133887.jpg?t=st=1762602947~exp=1762606547~hmac=8cdcd490bf0ac80315488b720abda108a1f219a52c998d682b9334b1bd5478c4&w=2000",
            }}
          />
        </div>
      </div>

      {/* Sidebar + main content */}
      <div className="h-[93vh] flex">
        <SidebarNav />
        <div className="p-8 h-[93vh] overflow-auto flex-1">{children}</div>
      </div>
    </div>
  );
};

export default TMSLayout;

