'use client';

import React from 'react';
import { Info } from 'lucide-react';

interface TirePosition {
  id: string;
  label: string;
  status?: 'good' | 'warning' | 'critical';
}

interface TireConfigurationViewerProps {
  title: string;
  subtitle: string;
  axles: {
    front: TirePosition[];
    middle: TirePosition[];
    rear: TirePosition[];
  };
  onTireClick?: (tireId: string) => void;
}

export default function TireConfigurationViewer({
  title,
  subtitle,
  axles,
  onTireClick,
}: TireConfigurationViewerProps) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'warning':
        return 'bg-yellow-400';
      case 'critical':
        return 'bg-red-400';
      default:
        return 'bg-gray-700';
    }
  };

  const TireCircle = ({ tire }: { tire: TirePosition }) => (
    <div
      onClick={() => onTireClick?.(tire.id)}
      className={`w-12 h-12 rounded-full ${getStatusColor(tire.status)} flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity relative`}
    >
      <div className="text-white text-xs font-bold text-center">{tire.label}</div>
      {tire.status && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <span>↻</span>
            Rotate All
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Print Report
          </button>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg p-12 flex items-center justify-center">
        <div className="flex flex-col gap-8 items-center">
          {/* Truck Cabin */}
          <div className="bg-gray-800 w-32 h-20 rounded flex items-center justify-center text-white text-xs font-bold">
            CAB
          </div>

          {/* Three Axles Layout */}
          <div className="flex gap-16 items-center">
            {/* Front Axle (Single wheel per side) */}
            <div className="flex flex-col gap-6 items-center">
              <div className="text-xs font-bold text-gray-700 bg-gray-300 px-2 py-1 rounded">FL</div>
              <TireCircle tire={axles.front[0]} />
              <div className="w-1 h-12 bg-gray-400"></div>
              <TireCircle tire={axles.front[1]} />
              <div className="text-xs font-bold text-gray-700 bg-gray-300 px-2 py-1 rounded">FR</div>
            </div>

            {/* Trailer */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gray-600 w-20 h-32 rounded flex items-center justify-center text-white text-xs font-bold">
                TRAILER
              </div>
              <div className="w-2 h-4 bg-gray-400"></div>
            </div>

            {/* Middle Axle (Dual wheels per side) */}
            <div className="flex flex-col gap-4 items-center">
              <div className="text-xs font-bold text-gray-700 bg-gray-300 px-2 py-1 rounded">MJ-0</div>
              <div className="flex gap-2">
                <div className="flex flex-col gap-4">
                  <TireCircle tire={axles.middle[0]} />
                  <TireCircle tire={axles.middle[1]} />
                </div>
                <div className="flex flex-col gap-4">
                  <TireCircle tire={axles.middle[2]} />
                  <TireCircle tire={axles.middle[3]} />
                </div>
              </div>
              <div className="text-xs font-bold text-gray-700 bg-gray-300 px-2 py-1 rounded">MJ-1</div>
            </div>

            {/* Rear Axle (Dual wheels per side) */}
            <div className="flex flex-col gap-4 items-center">
              <div className="text-xs font-bold text-gray-700 bg-gray-300 px-2 py-1 rounded">MR-0</div>
              <div className="flex gap-2">
                <div className="flex flex-col gap-4">
                  <TireCircle tire={axles.rear[0]} />
                  <TireCircle tire={axles.rear[1]} />
                </div>
                <div className="flex flex-col gap-4">
                  <TireCircle tire={axles.rear[2]} />
                  <TireCircle tire={axles.rear[3]} />
                </div>
              </div>
              <div className="text-xs font-bold text-gray-700 bg-gray-300 px-2 py-1 rounded">MR-1</div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-4 mt-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <span>Good</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span>Warning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <span>Critical</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
