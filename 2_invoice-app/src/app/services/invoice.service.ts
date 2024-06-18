import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;

  constructor() {}

  getInvoice(): Invoice {
    const total = this.calculateTotal();
    return { ...this.invoice, total: total };
  }

  calculateTotal() {
    let total = 0;
    for (const item of this.invoice.items) {
      total += item.price * item.quantity;
    }
    return total;
  }

  editItem(itemId: number, updatedItem: Item): void {
    const itemIndex = this.invoice.items.findIndex(
      (item) => item.id === itemId
    );
    if (itemIndex !== -1) {
      this.invoice.items[itemIndex] = updatedItem;
    }
  }

  deleteItem(itemId: number): void {
    this.invoice.items = this.invoice.items.filter(
      (item) => item.id !== itemId
    );
  }
}
