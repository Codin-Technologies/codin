"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mockInspection = {
  vehicle: {
    plate: "T 345 DDD",
    model: "Toyota Hiace",
  },
  tires: [
    { position: "Front Left", pressure: 34, temperature: 28, status: "OK", updatedAt: "2025-11-26 08:45" },
    { position: "Front Right", pressure: 31, temperature: 29, status: "LOW", updatedAt: "2025-11-26 08:46" },
    { position: "Rear Left", pressure: 36, temperature: 27, status: "OK", updatedAt: "2025-11-26 08:44" },
    { position: "Rear Right", pressure: 29, temperature: 30, status: "CRITICAL", updatedAt: "2025-11-26 08:47" },
  ],
};

const statusColors: Record<string, string> = {
  OK: "text-green-600 bg-green-100",
  LOW: "text-yellow-600 bg-yellow-100",
  CRITICAL: "text-red-600 bg-red-100",
};

export default function InspectionPage({ params }: { params: any }) {
  return (
    <div className="p-6 space-y-6">
      {/* PAGE HEADING */}
      <h1 className="text-2xl font-bold">Tire Inspection</h1>

      {/* VEHICLE CARD */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Vehicle Details</h2>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-1">
          <p><strong>Plate:</strong> {mockInspection.vehicle.plate}</p>
          <p><strong>Model:</strong> {mockInspection.vehicle.model}</p>
        </CardContent>
      </Card>

      {/* TIRES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockInspection.tires.map((tire, index) => (
          <Card key={index} className="border">
            <CardHeader>
              <h3 className="font-semibold">{tire.position}</h3>
            </CardHeader>

            <CardContent className="space-y-2">
              <p><strong>Pressure:</strong> {tire.pressure} PSI</p>
              <p><strong>Temperature:</strong> {tire.temperature} °C</p>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[tire.status]}`}
              >
                {tire.status}
              </span>

              <p className="text-xs text-gray-500">Updated: {tire.updatedAt}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* SAVE BUTTON */}
      <Button className="w-full md:w-auto">Save Inspection</Button>
    </div>
  );
}
