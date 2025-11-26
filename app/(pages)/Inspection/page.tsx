'use client';

import React, { useState } from 'react';
import { Search, Plus, CheckCircle, AlertCircle, Clock, Camera, FileText, Download } from 'lucide-react';

// Types
interface InspectionItem {
  id: string;
  vehicleId: string;
  vehicleName: string;
  inspector: string;
  status: 'pending' | 'in-progress' | 'completed';
  progress: number;
  startedAt: string;
  completedAt?: string;
  tiresInspected: number;
  totalTires: number;
  issues: number;
}

interface TireInspection {
  position: string;
  treadDepth: string;
  pressure: string;
  condition: 'good' | 'warning' | 'critical';
  notes: string;
  images: string[];
}

// Mock Data
const mockInspections: InspectionItem[] = [
  {
    id: 'INS-2847',
    vehicleId: 'FL-7823',
    vehicleName: 'Freightliner Cascadia',
    inspector: 'John Smith',
    status: 'in-progress',
    progress: 65,
    startedAt: '2h ago',
    tiresInspected: 12,
    totalTires: 18,
    issues: 2,
  },
  {
    id: 'INS-2846',
    vehicleId: 'FL-5621',
    vehicleName: 'Kenworth T680',
    inspector: 'Sarah Johnson',
    status: 'pending',
    progress: 0,
    startedAt: '5h ago',
    tiresInspected: 0,
    totalTires: 18,
    issues: 0,
  },
  {
    id: 'INS-2845',
    vehicleId: 'FL-3309',
    vehicleName: 'Peterbilt 579',
    inspector: 'Mike Davis',
    status: 'completed',
    progress: 100,
    startedAt: '1d ago',
    completedAt: '20h ago',
    tiresInspected: 18,
    totalTires: 18,
    issues: 1,
  },
];

// Components
const InspectionCard = ({ inspection }: { inspection: InspectionItem }) => {
  const statusConfig = {
    pending: { color: 'text-orange-600 bg-orange-50', icon: Clock },
    'in-progress': { color: 'text-blue-600 bg-blue-50', icon: AlertCircle },
    completed: { color: 'text-green-600 bg-green-50', icon: CheckCircle },
  };

  const config = statusConfig[inspection.status];
  const StatusIcon = config.icon;

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-gray-900">{inspection.id}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${config.color} capitalize`}>
              {inspection.status.replace('-', ' ')}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{inspection.vehicleName}</h3>
          <p className="text-sm text-gray-600">{inspection.vehicleId}</p>
        </div>
        <StatusIcon className={`w-5 h-5 ${config.color.split(' ')[0]}`} />
      </div>

      <div className="space-y-2 mb-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Inspector:</span>
          <span className="font-medium text-gray-900">{inspection.inspector}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Progress:</span>
          <span className="font-medium text-gray-900">
            {inspection.tiresInspected}/{inspection.totalTires} tires
          </span>
        </div>
        {inspection.issues > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Issues Found:</span>
            <span className="font-medium text-red-600">{inspection.issues}</span>
          </div>
        )}
      </div>

      {inspection.status === 'in-progress' && (
        <div className="mb-3">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${inspection.progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-600 mt-1">{inspection.progress}% complete</p>
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className="text-xs text-gray-500">Started {inspection.startedAt}</span>
        {inspection.status === 'completed' && (
          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
            <FileText className="w-3 h-3" />
            View Report
          </button>
        )}
        {inspection.status === 'in-progress' && (
          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
            Continue
          </button>
        )}
        {inspection.status === 'pending' && (
          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
            Start
          </button>
        )}
      </div>
    </div>
  );
};

const TireInspectionForm = () => {
  const [formData, setFormData] = useState<TireInspection>({
    position: 'FL',
    treadDepth: '',
    pressure: '',
    condition: 'good',
    notes: '',
    images: [],
  });

  const tirePositions = [
    { value: 'FL', label: 'Front Left' },
    { value: 'FR', label: 'Front Right' },
    { value: 'MJ-0-L1', label: 'Middle Jack - Left 1' },
    { value: 'MJ-0-L2', label: 'Middle Jack - Left 2' },
    { value: 'MJ-0-R1', label: 'Middle Jack - Right 1' },
    { value: 'MJ-0-R2', label: 'Middle Jack - Right 2' },
    { value: 'MR-0-L1', label: 'Middle Rear - Left 1' },
    { value: 'MR-0-L2', label: 'Middle Rear - Left 2' },
    { value: 'MR-0-R1', label: 'Middle Rear - Right 1' },
    { value: 'MR-0-R2', label: 'Middle Rear - Right 2' },
  ];

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Tire Inspection Form</h2>

      <div className="space-y-4">
        {/* Tire Position */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tire Position
          </label>
          <select
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {tirePositions.map((pos) => (
              <option key={pos.value} value={pos.value}>
                {pos.label}
              </option>
            ))}
          </select>
        </div>

        {/* Tread Depth */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tread Depth (mm)
          </label>
          <input
            type="number"
            step="0.1"
            value={formData.treadDepth}
            onChange={(e) => setFormData({ ...formData, treadDepth: e.target.value })}
            placeholder="Enter tread depth"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Tire Pressure */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tire Pressure (PSI)
          </label>
          <input
            type="number"
            value={formData.pressure}
            onChange={(e) => setFormData({ ...formData, pressure: e.target.value })}
            placeholder="Enter pressure"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Condition */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Overall Condition
          </label>
          <div className="flex gap-3">
            {['good', 'warning', 'critical'].map((condition) => (
              <button
                key={condition}
                onClick={() => setFormData({ ...formData, condition: condition as any })}
                className={`flex-1 px-4 py-2 rounded-lg border-2 transition-all capitalize ${
                  formData.condition === condition
                    ? condition === 'good'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : condition === 'warning'
                      ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                      : 'border-red-500 bg-red-50 text-red-700'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {condition}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Inspection Notes
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Add any observations, damages, or concerns..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Photos
          </label>
          <button className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-center gap-2 text-gray-600">
            <Camera className="w-5 h-5" />
            <span>Add Photos</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Save & Next Tire
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
export default function InspectionPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'in-progress' | 'completed'>('all');

  const filteredInspections = mockInspections.filter((inspection) => {
    if (activeTab !== 'all' && inspection.status !== activeTab) return false;
    if (searchQuery && !inspection.vehicleName.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const stats = {
    pending: mockInspections.filter((i) => i.status === 'pending').length,
    inProgress: mockInspections.filter((i) => i.status === 'in-progress').length,
    completed: mockInspections.filter((i) => i.status === 'completed').length,
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tire Inspections</h1>
            <p className="text-gray-600">Perform detailed tire inspections and track tire health</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium">
            <Plus className="w-5 h-5" />
            Start New Inspection
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Inspections</p>
              <p className="text-2xl font-bold text-gray-900">{mockInspections.length}</p>
            </div>
            <FileText className="w-8 h-8 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-orange-600">{stats.pending}</p>
            </div>
            <Clock className="w-8 h-8 text-orange-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-blue-600">{stats.inProgress}</p>
            </div>
            <AlertCircle className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="flex gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by vehicle name or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mt-4 border-b border-gray-200">
          {[
            { key: 'all', label: 'All' },
            { key: 'in-progress', label: 'In Progress' },
            { key: 'completed', label: 'Completed' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`pb-3 px-2 font-medium transition-colors ${
                activeTab === tab.key
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Inspections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredInspections.map((inspection) => (
          <InspectionCard key={inspection.id} inspection={inspection} />
        ))}
      </div>

      {/* Inspection Form (shown when starting/continuing an inspection) */}
      {/* Uncomment below to show the form */}
      {/* <TireInspectionForm /> */}
    </div>
  );
}