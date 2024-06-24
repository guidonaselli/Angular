import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.scss',
})
export class CartAppComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductService) {
    this.products = service.findAll();
  }

  ngOnInit(): void {}
}
