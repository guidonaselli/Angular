import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';
import { CommonModule } from '@angular/common';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { TotalComponent } from '../total/total.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    CommonModule,
    InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListItemsComponent,
    RowItemComponent,
    TotalComponent,
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  editItem(itemId: number) {
    // Obtener el ítem actual basado en itemId
    const currentItem = this.invoice.items.find((item) => item.id === itemId);
    if (currentItem) {
      // Actualizar solo las propiedades específicas del ítem
      const updatedItem: Item = {
        ...currentItem, // Conserva todas las propiedades existentes, incluido el id
        product: 'Updated Product', // reemplazar con el valor actual del producto
        price: 10.99, // reemplazar con el valor actual del precio
        quantity: 2, // reemplazar con el valor actual de la cantidad
      };
      this.service.editItem(itemId, updatedItem);
      // Actualizar la vista
      this.invoice = this.service.getInvoice();
    }
  }

  deleteItem(itemId: number) {
    this.service.deleteItem(itemId);
    // Actualizar la vista
    this.invoice = this.service.getInvoice();
  }
}
