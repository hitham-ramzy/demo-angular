export interface ICustomer {
  id?: string;
  name?: string;
  address?: string;
}

export class Customer {
  constructor(
    public id?: string,
    public name?: string,
    public address?: string
  ) {
  }
}
