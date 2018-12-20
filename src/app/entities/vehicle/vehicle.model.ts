import {Customer} from '../customer/customer.model';

export interface IVehicle {
  id?: string;
  registrationNumber?: string;
  customer?: Customer;
  ip?: string;
  connected?: boolean;
  lastStatusTime?: Date;
}

export class Vehicle {
  constructor(
    public id?: string,
    public registrationNumber?: string,
    public customer?: Customer,
    ip?: string,
    connected?: boolean,
    lastStatusTime?: Date
  ) {
  }
}

export class VehicleCriteria {
  constructor(
    public connected?: boolean,
    public customerName?: string
  ) {
  }
}
