"use client";

import React from "react";
import { Truck, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";

type Vehicle = {
  id: number;
  license: string;
  iconColor: string;
  status: "Moving" | "Critical" | "Idle";
  statusColor: string;
  speed: number;
  updated: string;
  pressures: {
    frontLeft: number;
    frontRight: number;
    rearLeft: number;
    rearRight: number;
  };
};

type TPMSPageProps = {
  totalVehicles: number;
  activeVehicles: number;
  criticalAlerts: number;
  avgPressure: number;
  vehicles: Vehicle[];
};

function getPressureColor(value: number) {
  if (value < 30) return "bg-red-500";
  if (value < 35) return "bg-yellow-500";
  return "bg-green-500";
}

const TPMSPage: React.FC<TPMSPageProps> = ({
  totalVehicles,
  activeVehicles,
  criticalAlerts,
  avgPressure,
  vehicles,
}) => {
  return (
    <div className="min-h-screen p-6 bg-[#F5F6F8]">
      {/* Header */}
      <div className="rounded-xl p-2 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            Tire Pressure Monitoring System
          </h1>
          <p className="text-gray-500">Real-time monitoring and alerts</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-[#F9FAFB] rounded-xl p-5 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600 text-sm">Total Vehicles</p>
            <div className="bg-blue-100 p-2 rounded-lg">
              <Truck className="text-blue-600" size={22} />
            </div>
          </div>
          <p className="text-3xl font-bold">{totalVehicles}</p>
        </div>

        <div className="bg-[#F9FAFB] rounded-xl p-5 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600 text-sm">Active Vehicles</p>
            <div className="bg-green-100 p-2 rounded-lg">
              <CheckCircle className="text-green-600" size={22} />
            </div>
          </div>
          <p className="text-3xl font-bold text-green-600">{activeVehicles}</p>
        </div>

        <div className="bg-[#F9FAFB] rounded-xl p-5 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600 text-sm">Critical Alerts</p>
            <div className="bg-red-100 p-2 rounded-lg">
              <AlertTriangle className="text-red-600" size={22} />
            </div>
          </div>
          <p className="text-3xl font-bold text-red-600">{criticalAlerts}</p>
        </div>

        <div className="bg-[#F9FAFB] rounded-xl p-5 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600 text-sm">Avg Pressure</p>
            <div className="bg-purple-100 p-2 rounded-lg">
              <TrendingUp className="text-purple-600" size={22} />
            </div>
          </div>
          <p className="text-3xl font-bold">{avgPressure.toFixed(1)} PSI</p>
        </div>
      </div>

      {/* Vehicle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map(vehicle => (
          <div
            key={vehicle.id}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center space-x-3">
                <div className={`${vehicle.iconColor} p-3 rounded-xl`}>
                  <Truck size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Vehicle #{vehicle.id}</h3>
                  <p className="text-sm text-gray-500">License: {vehicle.license}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    vehicle.status === "Moving"
                      ? "bg-green-500"
                      : vehicle.status === "Critical"
                      ? "bg-red-500"
                      : "bg-gray-400"
                  }`}
                ></div>
                <span className={`text-sm font-medium ${vehicle.statusColor}`}>
                  {vehicle.status}
                </span>
              </div>
            </div>

            {/* Pressure Pills */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <span className={`${getPressureColor(vehicle.pressures.frontLeft)} text-white px-3 py-1 text-sm rounded-full`}>
                    {vehicle.pressures.frontLeft}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Front Left</p>
                </div>
                <div className="text-center">
                  <span className={`${getPressureColor(vehicle.pressures.frontRight)} text-white px-3 py-1 text-sm rounded-full`}>
                    {vehicle.pressures.frontRight}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Front Right</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <span className={`${getPressureColor(vehicle.pressures.rearLeft)} text-white px-3 py-1 text-sm rounded-full`}>
                    {vehicle.pressures.rearLeft}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Rear Left</p>
                </div>
                <div className="text-center">
                  <span className={`${getPressureColor(vehicle.pressures.rearRight)} text-white px-3 py-1 text-sm rounded-full`}>
                    {vehicle.pressures.rearRight}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Rear Right</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-sm text-gray-500 mt-6 pt-4 border-t border-gray-200">
              <span>Speed: {vehicle.speed} mph</span>
              <span>Updated: {vehicle.updated}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TPMSPage;
