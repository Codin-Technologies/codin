import { auth } from "@/app/auth";
import { Bell } from "lucide-react";

export default async function Header({ user = { name: "John Doe", avatar: "/avatar.png" } }) {
  const session = await auth()
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b rounded-t-lg shadow-sm w-full">
      <div className="flex items-center gap-3">
        {/* <img src="/logo.svg" alt="TMS Logo" className="h-8 w-8" /> */}
        <span className="text-xl font-bold text-black">TMS</span>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="h-6 w-6 text-black/70" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </button>
        {session && session.user && <div className="flex items-center gap-2">
          <img src={session.user.image ? session.user.image: ""} alt={user.name} className="h-10 w-10 rounded-full border object-cover" />
          <span className="font-semibold text-black/80">{session?.user?.name}</span>
        </div>}
      </div>
    </header>
  );
}
