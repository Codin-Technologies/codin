"use client";

import React, { useEffect, useState } from "react";
import { Truck, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

/** --- Types --- **/
type Pressures = {
  frontLeft: string;
  frontRight: string;
  rearLeft: string;
  rearRight: string;
};

type Vehicle = {
  id: string;
  license: string;
  status: "Moving" | "Critical" | "Idle" | "Offline" | string;
  statusColor: string;
  iconColor: string;
  pressures: Pressures;
  speed: number;
  updated: string;
};

/** --- Mock data generator --- **/
const generateVehicleData = (): Vehicle[] => {
  const getRandomPressure = (min = 28, max = 35) =>
    (Math.random() * (max - min) + min).toFixed(1);
  const getRandomSpeed = () => Math.floor(Math.random() * 70);

  return [
    {
      id: "001",
      license: "ABC-1234",
      status: "Moving",
      statusColor: "text-green-600",
      iconColor: "bg-green-50 text-green-600 border-green-200",
      pressures: {
        frontLeft: getRandomPressure(31, 33),
        frontRight: getRandomPressure(31, 33),
        rearLeft: getRandomPressure(31, 33),
        rearRight: getRandomPressure(31, 33),
      },
      speed: 45,
      updated: "2s ago",
    },
    {
      id: "002",
      license: "XYZ-5678",
      status: "Critical",
      statusColor: "text-red-600",
      iconColor: "bg-red-50 text-red-600 border-red-200",
      pressures: {
        frontLeft: "18.2",
        frontRight: "31.5",
        rearLeft: "32.1",
        rearRight: "25.8",
      },
      speed: 0,
      updated: "1s ago",
    },
    {
      id: "003",
      license: "DEF-9012",
      status: "Idle",
      statusColor: "text-gray-600",
      iconColor: "bg-gray-50 text-gray-600 border-gray-200",
      pressures: {
        frontLeft: getRandomPressure(32, 34),
        frontRight: getRandomPressure(32, 34),
        rearLeft: getRandomPressure(32, 34),
        rearRight: getRandomPressure(32, 34),
      },
      speed: 0,
      updated: "5s ago",
    },
    {
      id: "004",
      license: "GHI-3456",
      status: "Moving",
      statusColor: "text-green-600",
      iconColor: "bg-green-50 text-green-600 border-green-200",
      pressures: {
        frontLeft: "31.9",
        frontRight: "27.3",
        rearLeft: getRandomPressure(31, 33),
        rearRight: getRandomPressure(31, 33),
      },
      speed: getRandomSpeed(),
      updated: "3s ago",
    },
    {
      id: "005",
      license: "JKL-7890",
      status: "Offline",
      statusColor: "text-gray-400",
      iconColor: "bg-gray-50 text-gray-400 border-gray-200",
      pressures: {
        frontLeft: "-",
        frontRight: "-",
        rearLeft: "-",
        rearRight: "-",
      },
      speed: 0,
      updated: "offline",
    },
    {
      id: "006",
      license: "MNO-2468",
      status: "Moving",
      statusColor: "text-green-600",
      iconColor: "bg-green-50 text-green-600 border-green-200",
      pressures: {
        frontLeft: getRandomPressure(31, 33),
        frontRight: getRandomPressure(31, 33),
        rearLeft: getRandomPressure(31, 33),
        rearRight: getRandomPressure(31, 33),
      },
      speed: getRandomSpeed(),
      updated: "1s ago",
    },
  ];
};

/** --- Helper functions --- **/
const getPressureColor = (pressure: string) => {
  if (pressure === "-") return "bg-gray-400";
  const p = parseFloat(pressure);
  if (isNaN(p)) return "bg-gray-400";
  if (p < 25) return "bg-red-500";
  if (p < 28) return "bg-orange-500";
  return "bg-green-500";
};

const getPressureTextColor = (pressure: string) => {
  if (pressure === "-") return "text-gray-600";
  const p = parseFloat(pressure);
  if (isNaN(p)) return "text-gray-600";
  if (p < 25) return "text-red-600";
  if (p < 28) return "text-orange-600";
  return "text-green-600";
};

/** --- Main component --- **/
const TPMSPage: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>(generateVehicleData());
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Stats calculations
  const totalVehicles = vehicles.length;
  const activeVehicles = vehicles.filter((v) => v.status === "Moving").length;
  const criticalAlerts = vehicles.filter((v) => v.status === "Critical").length;
  const avgPressure =
    vehicles
      .filter((v) => v.status !== "Offline")
      .reduce((sum, v) => {
        const pressures = Object.values(v.pressures)
          .filter((p) => p !== "-")
          .map(Number)
          .filter((n) => !Number.isNaN(n));
        if (pressures.length === 0) return sum;
        return sum + pressures.reduce((a, b) => a + b, 0) / pressures.length;
      }, 0) /
    Math.max(1, vehicles.filter((v) => v.status !== "Offline").length);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles(generateVehicleData());
      setCurrentTime(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="bg-white shadow-sm rounded-xl p-6 mb-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              Tire Pressure Monitoring System
            </h1>
            <p className="text-gray-500">Real-time monitoring and alerts</p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-semibold text-sm">System Online</span>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500">Last Updated</p>
              <p className="text-sm font-semibold text-gray-700">
                {currentTime.toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm font-medium">Total Vehicles</p>
            <div className="bg-blue-100 p-3 rounded-xl">
              <Truck className="text-blue-600" size={22} />
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900">{totalVehicles}</p>
          <p className="text-xs text-gray-500 mt-2">All registered vehicles</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm font-medium">Active Vehicles</p>
            <div className="bg-green-100 p-3 rounded-xl">
              <CheckCircle className="text-green-600" size={22} />
            </div>
          </div>
          <p className="text-4xl font-bold text-green-600">{activeVehicles}</p>
          <p className="text-xs text-gray-500 mt-2">Currently moving</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm font-medium">Critical Alerts</p>
            <div className="bg-red-100 p-3 rounded-xl">
              <AlertTriangle className="text-red-600" size={22} />
            </div>
          </div>
          <p className="text-4xl font-bold text-red-600">{criticalAlerts}</p>
          <p className="text-xs text-gray-500 mt-2">Require immediate attention</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm font-medium">Avg Pressure</p>
            <div className="bg-purple-100 p-3 rounded-xl">
              <TrendingUp className="text-purple-600" size={22} />
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900">{avgPressure.toFixed(1)}</p>
          <p className="text-xs text-gray-500 mt-2">PSI across fleet</p>
        </div>
      </div>

      {/* Vehicle Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-all duration-200 hover:border-gray-200"
          >
            {/* Vehicle Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className={`${vehicle.iconColor} p-3 rounded-xl border`}>
                  <Truck size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    Vehicle #{vehicle.id}
                  </h3>
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
                      : vehicle.status === "Idle"
                      ? "bg-gray-400"
                      : "bg-gray-300"
                  }`}
                ></div>
                <span className={`text-sm font-semibold ${vehicle.statusColor}`}>
                  {vehicle.status}
                </span>
              </div>
            </div>

            {/* Tire Pressure Visualization */}
            <div className="space-y-6">
              {/* Front Tires */}
              <div className="flex items-center justify-between px-4">
                <div className="flex flex-col items-center space-y-2">
                  <span
                    className={`${getPressureColor(
                      vehicle.pressures.frontLeft
                    )} text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm min-w-[60px] text-center`}
                  >
                    {vehicle.pressures.frontLeft}
                  </span>
                </div>
                <Truck className="text-gray-300" size={56} strokeWidth={1.5} />
                <div className="flex flex-col items-center space-y-2">
                  <span
                    className={`${getPressureColor(
                      vehicle.pressures.frontRight
                    )} text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm min-w-[60px] text-center`}
                  >
                    {vehicle.pressures.frontRight}
                  </span>
                </div>
              </div>

              {/* Rear Tires */}
              <div className="flex items-center justify-between px-4">
                <div className="flex flex-col items-center space-y-2">
                  <span
                    className={`${getPressureColor(
                      vehicle.pressures.rearLeft
                    )} text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm min-w-[60px] text-center`}
                  >
                    {vehicle.pressures.rearLeft}
                  </span>
                </div>
                <div className="w-14"></div>
                <div className="flex flex-col items-center space-y-2">
                  <span
                    className={`${getPressureColor(
                      vehicle.pressures.rearRight
                    )} text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm min-w-[60px] text-center`}
                  >
                    {vehicle.pressures.rearRight}
                  </span>
                </div>
              </div>

              {/* Pressure Details */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1 font-medium">Front Left</p>
                  <p
                    className={`text-xl font-bold ${getPressureTextColor(
                      vehicle.pressures.frontLeft
                    )}`}
                  >
                    {vehicle.pressures.frontLeft}{" "}
                    <span className="text-sm font-normal text-gray-500">PSI</span>
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1 font-medium">Front Right</p>
                  <p
                    className={`text-xl font-bold ${getPressureTextColor(
                      vehicle.pressures.frontRight
                    )}`}
                  >
                    {vehicle.pressures.frontRight}{" "}
                    <span className="text-sm font-normal text-gray-500">PSI</span>
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1 font-medium">Rear Left</p>
                  <p
                    className={`text-xl font-bold ${getPressureTextColor(
                      vehicle.pressures.rearLeft
                    )}`}
                  >
                    {vehicle.pressures.rearLeft}{" "}
                    <span className="text-sm font-normal text-gray-500">PSI</span>
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1 font-medium">Rear Right</p>
                  <p
                    className={`text-xl font-bold ${getPressureTextColor(
                      vehicle.pressures.rearRight
                    )}`}
                  >
                    {vehicle.pressures.rearRight}{" "}
                    <span className="text-sm font-normal text-gray-500">PSI</span>
                  </p>
                </div>
              </div>

              {/* Vehicle Info Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <TrendingUp className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Speed</p>
                    <p className="text-sm font-semibold text-gray-700">
                      {vehicle.speed} mph
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Updated</p>
                  <p className="text-sm font-semibold text-gray-700">
                    {vehicle.updated}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TPMSPage;