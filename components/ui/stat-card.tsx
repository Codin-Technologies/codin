"use client";

import React from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export function StatCard({ title, value, subtitle, icon }: StatCardProps) {
  return (
    <div className="bg-white text-black rounded-lg shadow-sm px-4 flex items-center justify-between py-6">
      <div className="flex-1">
        <div className="text-sm text-zinc-500">{title}</div>
        <div className="text-2xl font-semibold mt-2">{value}</div>
        {subtitle && <div className="text-xs text-zinc-400 mt-1">{subtitle}</div>}
      </div>

      {icon && (
        <div className="ml-4 flex items-center justify-center w-12 h-12 rounded-md bg-gray-100 text-gray-700">
          {icon}
        </div>
      )}
    </div>
  );
}

export default StatCard;
