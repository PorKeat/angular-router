import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product', component: Product },
  {
    path: 'product/:id',
    component: ProductDetail,
  },
];
