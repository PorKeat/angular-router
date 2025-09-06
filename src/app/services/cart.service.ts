import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItem = [];
  cartKey = 'cart-items';

  getCart(): any[] {
    this.cartItem = JSON.parse(localStorage.getItem(this.cartKey) || '[]');
    return this.cartItem;
  }

  saveCart(cart: any[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  addToCart(product: any) {
    let cart = this.getCart();
    const idx = cart.findIndex((p) => p.id === product.id);
    if (idx >= 0) {
      cart[idx].qty++;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    this.saveCart(cart);
  }

  removeFromCart(id: number) {
    let cart = this.getCart().filter((p) => p.id !== id);
    this.saveCart(cart);
  }

  updateQty(id: number, delta: number) {
    let cart = this.getCart();
    const idx = cart.findIndex((p) => p.id === id);
    if (idx >= 0) {
      cart[idx].qty += delta;
      if (cart[idx].qty <= 0) {
        cart.splice(idx, 1);
      }
    }
    this.saveCart(cart);
  }

  getCartItemCount(): number {
    const cart = this.getCart();
    return cart.reduce((count, item) => count + item.qty, 0);
  }

  getCartTotalPrice(): number {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }
}
