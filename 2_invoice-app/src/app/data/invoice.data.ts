import { Invoice } from '../models/invoice';

export const invoiceData: Invoice = {
  id: 1,
  name: 'Invoice 1',
  amount: 1000,
  date: '2020-01-01',
  paid: false,
  total: 0,
  client: {
    //   id: number;
    // name!: string;
    // address!: string;
    // phone!: string;
    // email!: string;
    // invoices!: any[];
    id: 1,
    name: 'Client 1',
    address: 'Address 1',
    phone: '1234567890',
    email: '',
    invoices: [],
  },
  company: {
    //   id: number;
    // name: string;
    // fiscalNumber: number;
    id: 1,
    name: 'Company 1',
    fiscalNumber: 1234567890,
  },
  items: [
    {
      //     id: number;
      // product: string;
      // price: number;
      // quantity: number;
      id: 1,
      product: 'Product 1',
      price: 1000,
      quantity: 1,
    },
    {
      id: 2,
      product: 'Product 2',
      price: 2000,
      quantity: 2,
    },
    {
      id: 3,
      product: 'Product 3',
      price: 3000,
      quantity: 3,
    },
  ],
};
