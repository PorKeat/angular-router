import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
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

  constructor(private productService: ProductService, private router: Router) {}

  async ngOnInit() {
    this.products = await this.productService.fetchProducts();
  }

  navToDetail(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
