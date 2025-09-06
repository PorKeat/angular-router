import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cart: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cart = this.cartService.getCart();
    this.getTotal();
  }

  increaseQty(id: number) {
    this.cartService.updateQty(id, +1);
    this.loadCart();
  }

  decreaseQty(id: number) {
    this.cartService.updateQty(id, -1);
    this.loadCart();
  }

  removeCart(id: number) {
    this.cartService.removeFromCart(id);
    this.loadCart();
  }

  getTotal() {
    this.total = this.cartService.getCartTotalPrice();
  }
}
