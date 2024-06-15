export class Address {
  id: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  client!: any;

  constructor(
    id: number,
    street: string,
    city: string,
    state: string,
    zip: string,
    country: string,
    client: any
  ) {
    this.id = id;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.country = country;
    this.client = client;
  }
}
