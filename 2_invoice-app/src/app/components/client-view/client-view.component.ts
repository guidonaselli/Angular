import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.scss',
})
export class ClientViewComponent {
  @Input() client!: Client;
  @Input() id!: number;
  @Input() name!: string;
  @Input() address!: string;
  @Input() phone!: string;
  @Input() email!: string; // Add the 'email' property
}
