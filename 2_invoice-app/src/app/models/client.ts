export class Client {
  id: number;
  name!: string;
  address!: string;
  phone!: string;
  email!: string;
  invoices!: any[];

  constructor(
    id: number,
    name: string,
    address: string,
    phone: string,
    email: string,
    invoices: any[]
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.invoices = invoices;
  }
}
