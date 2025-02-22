import { Routes } from '@angular/router';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { ChickensComponent } from './pages/chickens/chickens.component';
import { CartComponent } from './pages/cart/cart.component';
import { PizzaComponent } from './pages/pizza/pizza.component';

export const routes: Routes = [
  {
    path: 'chickens',
    component: DessertsComponent,
  },
  {
    path: 'desserts',
    component: DessertsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'pizza',
    component: DessertsComponent,
  },
];
