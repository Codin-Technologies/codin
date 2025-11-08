import React from 'react'

const StatCard = ({ title, value, className = '' }: { title: string, value: string | number, className?: string }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-black mt-2">{value}</p>
  </div>
)

const WorkflowCard = ({ title, tasks, technicians, vehicles, className = '' }: {
  title: string,
  tasks: number,
  technicians: number,
  vehicles: number,
  className?: string
}) => (
  <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
    <h3 className="text-lg font-semibold mb-4 text-black">{title}</h3>
    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-600">Tasks in progress:</span>
        <span className="font-semibold text-black">{tasks}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Technicians Assigned:</span>
        <span className="font-semibold text-black">{technicians}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Vehicles Linked:</span>
        <span className="font-semibold text-black">{vehicles}</span>
      </div>
    </div>
  </div>
)

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl text-black font-bold mb-6">Dashboard Overview</h1>
        <div className="grid grid-cols-4 gap-6">
          <StatCard title="Total Tyres in Stock" value={1248} className="border-l-4 border-blue-500" />
          <StatCard title="Active Operations" value={42} className="border-l-4 border-green-500" />
          <StatCard title="Pressure Alerts" value={6} className="border-l-4 border-red-500" />
          <StatCard title="Technicians On Duty" value={12} className="border-l-4 border-purple-500" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-black">Operational Workflow Overview</h2>
        <div className="grid grid-cols-4 gap-6">
          <WorkflowCard
            title="Mounting"
            tasks={24}
            technicians={3}
            vehicles={6}
            className="border-t-4 border-blue-400"
          />
          <WorkflowCard
            title="Rotation"
            tasks={18}
            technicians={2}
            vehicles={12}
            className="border-t-4 border-green-400"
          />
          <WorkflowCard
            title="Alignment"
            tasks={17}
            technicians={3}
            vehicles={10}
            className="border-t-4 border-yellow-400"
          />
          <WorkflowCard
            title="Replacement"
            tasks={21}
            technicians={5}
            vehicles={11}
            className="border-t-4 border-red-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-black mb-4">Recent Pressure Alerts</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-red-50 rounded">
              <span className='text-black/70'>T734 ENC - Low Pressure (Rear Left)</span>
              <span className="text-red-500 font-semibold">Critical</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
              <span className='text-black/70'>T689 ENS - High Temp (Front Right)</span>
              <span className="text-yellow-600 font-semibold">Warning</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-black mb-4">Recent Inspections</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded">
              <span className='text-black/70'>Truck T709 ENC</span>
              <span className="text-green-500 font-semibold">OK</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
              <span className='text-black/70'>Truck T402 ENY</span>
              <span className="text-yellow-600 font-semibold">Worn Tyre</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard