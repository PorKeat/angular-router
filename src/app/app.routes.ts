import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { ProductDetail } from './product-detail/product-detail';
import { Cart } from './cart/cart';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product', component: Product },
  { path: 'cart', component: Cart },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  {
    path: 'product/:id',
    component: ProductDetail,
  },
];
