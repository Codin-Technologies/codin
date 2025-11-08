'use client';

import { DataTable } from "@/components/ui/data-table";
import { mockTyres } from "@/data/tyres";
import { Tyre } from "@/types/tyre";
import { ColumnDef } from "@tanstack/react-table";

function getStatusColor(status: string): string {
  switch (status) {
    case 'In Stock':
      return 'text-green-600';
    case 'Mounted':
      return 'text-blue-600';
    case 'In Maintenance':
      return 'text-yellow-600';
    case 'Disposed':
      return 'text-red-600';
    default:
      return '';
  }
}

export function TyreTable() {
    const data : Tyre[] = mockTyres;
      const handleAddTyre = () => {
    // Add tyre logic here
    console.log('Add new tyre clicked');
  };
  const columns: ColumnDef<Tyre>[] = [
    {
      accessorKey: "serialNumber",
      header: "Serial Number"
    },
    {
      accessorKey: "brand",
      header: "Brand"
    },
    {
      accessorKey: "model",
      header: "Model",
    },
    {
      accessorKey: "size",
      header: "Size",
    },
    {
      accessorKey: "type",
      header: "Type"
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <div className={getStatusColor(status)}>
            {status}
          </div>
        );
      },
    },
    {
      accessorKey: "location",
      header: "Location",
    },
    {
      accessorKey: "treadDepth",
      header: "TreadDepth (mm)",
    },
    {
      accessorKey: "pressure",
      header: "Pressure (PSI)",
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("price"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);
        return formatted;
      },
    },
  ];

  return (
    <DataTable 
      columns={columns} 
      data={data}
      title={"Inventory"}
      onAdd={handleAddTyre}
    />
  );
}