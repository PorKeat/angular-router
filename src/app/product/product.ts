import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products: ProductType[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private cart: CartService
  ) {}

  async ngOnInit() {
    this.products = await this.productService.fetchProducts();
  }

  addToCart(product: ProductType) {
    this.cart.addToCart(product);
    this.cart.getCart();
  }

  navToDetail(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
