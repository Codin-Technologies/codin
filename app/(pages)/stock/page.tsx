"use client";

import { TyreTable } from "@/components/tyre-table";
import { StatCard } from "@/components/ui/stat-card";
import { mockTyres } from "@/data/tyres";
import { Truck } from "lucide-react";
import { signOut } from "next-auth/react";

export default function StockPage() {
  // Compute simple stats from mock data
  const total = mockTyres.length;
  const inUse = mockTyres.filter((t) => t.status === "Mounted").length;
  const inStore = mockTyres.filter((t) => t.status === "In Stock").length;
  // Needs replacement heuristic: very low treadDepth (<= 3) or disposed
  const needsReplacement = mockTyres.filter(
    (t) =>
      (typeof t.treadDepth === "number" && t.treadDepth <= 3) ||
      t.status === "Disposed"
  ).length;

  const handleAddTyre = () => {
    // TODO: wire to actual add flow/modal
    console.log("Add new tyre clicked");
  };

  return (
    <div className="mx-auto flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatCard title="Total Tyres" value={total} icon={<Truck />} />
          <StatCard title="In Use" value={inUse} icon={<Truck />} />
          <StatCard title="In Store" value={inStore} icon={<Truck />} />
          <StatCard
            title="Needs Replacement"
            value={needsReplacement}
            icon={<Truck />}
          />
        </div>
      </div>
      <div className="bg-white text-black rounded-lg shadow-md p-6 space-y-6">
        <button onClick={() => signOut()}>Sign Out</button>
        <TyreTable />
      </div>
    </div>
  );
}
