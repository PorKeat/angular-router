import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute,RouterLink } from '@angular/router';

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
})
export class ProductDetail {
  product?: ProductType;
  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      await this.loadProduct(parseInt(id));
    }
  }

  async loadProduct(id: number) {
    this.product = await this.productService.fetchProductById(id);
    if (!this.product) {
      alert('product not found');
    }
  }
}
