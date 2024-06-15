export class Item {
  id: number;
  product: string;
  price: number;
  quantity: number;

  constructor(id: number, product: string, price: number, quantity: number) {
    this.id = id;
    this.product = product;
    this.price = price;
    this.quantity = quantity;
  }
}
