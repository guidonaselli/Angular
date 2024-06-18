import { Component, Input } from '@angular/core';

@Component({
  selector: 'invoice-view',
  standalone: true,
  imports: [],
  templateUrl: './invoice-view.component.html',
  styleUrl: './invoice-view.component.scss',
})
export class InvoiceViewComponent {
  // id: 1,
  // name: 'Invoice 1',
  // amount: 1000,
  // date: '2020-01-01',
  // paid: false,
  @Input() id!: number;
  @Input() name!: string;
  @Input() amount!: number;
  @Input() date!: string;
  @Input() paid!: boolean;
}
