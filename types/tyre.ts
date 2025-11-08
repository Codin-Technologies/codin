export interface Tyre {
  id: string;
  serialNumber: string;
  brand: string;
  model: string;
  size: string;
  type: 'Truck' | 'Bus' | 'Spare';
  status: 'In Stock' | 'Mounted' | 'In Maintenance' | 'Disposed';
  location: string;
  purchaseDate: string;
  lastInspectionDate: string;
  treadDepth: number; // in mm
  pressure: number; // in PSI
  mileage: number;
  price: number;
}