"use client";

import { useState, useEffect } from "react";

export default function TPMSPage() {
  const [tyreData, setTyreData] = useState([]);

  // Example simulated live data (you can replace later with API or websocket)
  useEffect(() => {
    const interval = setInterval(() => {
      setTyreData([
        { position: "Front Left", psi: 98, temp: 34 },
        { position: "Front Right", psi: 102, temp: 36 },
        { position: "Rear Left", psi: 96, temp: 33 },
        { position: "Rear Right", psi: 101, temp: 35 },
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 space-y-6">
      
      {/* ---- PAGE HEADING ---- */}
      <div>
        <h1 className="text-3xl font-bold">
          Tire Pressure Monitoring System
        </h1>
        <p className="text-gray-600 mt-1">
          Real-time tyre pressure and temperature readings.
        </p>
      </div>

      {/* ---- TABLE DISPLAY ---- */}
      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Tyre Position</th>
              <th className="py-2">Pressure (PSI)</th>
              <th className="py-2">Temperature (°C)</th>
            </tr>
          </thead>
          <tbody>
            {tyreData.map((tyre, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{tyre.position}</td>
                <td className="py-2">{tyre.psi}</td>
                <td className="py-2">{tyre.temp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
