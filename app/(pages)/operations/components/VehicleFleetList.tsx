'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Vehicle {
  id: string;
  name: string;
  model: string;
  status: 'Active' | 'Service';
  tyres: string;
  lastService: string;
}

interface VehicleFleetListProps {
  vehicles: Vehicle[];
  onSelectVehicle?: (vehicle: Vehicle) => void;
}

export default function VehicleFleetList({
  vehicles,
  onSelectVehicle,
}: VehicleFleetListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVehicles = vehicles.filter(
    (v) =>
      v.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    return status === 'Active'
      ? 'bg-green-100 text-green-700'
      : 'bg-yellow-100 text-yellow-700';
  };

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Fleet</h3>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search vehicles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {filteredVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            onClick={() => onSelectVehicle?.(vehicle)}
            className="p-3 border border-blue-200 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors bg-white"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-medium text-gray-900">{vehicle.id}</p>
                <p className="text-sm text-gray-600">{vehicle.name}</p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded font-medium ${getStatusColor(
                  vehicle.status
                )}`}
              >
                {vehicle.status}
              </span>
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <p>
                <span className="font-medium">Tyres</span>
                <br />
                {vehicle.tyres}
              </p>
              <p>
                <span className="font-medium">Last Service</span>
                <br />
                {vehicle.lastService}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
