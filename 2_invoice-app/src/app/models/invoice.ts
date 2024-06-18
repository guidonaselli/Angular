import { Client } from './client';
import { Company } from './company';
import { Item } from './item';

export class Invoice {
  id: number;
  name: string;
  amount: number;
  date: string;
  paid: boolean;
  client!: Client;
  company!: Company;
  items: Item[];
  total!: number;

  constructor(
    id: number,
    name: string,
    amount: number,
    date: string,
    paid: boolean,
    client: Client,
    company: Company,
    items: Item[]
  ) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.date = date;
    this.paid = paid;
    this.client = client;
    this.company = company;
    this.items = items;
  }
}
