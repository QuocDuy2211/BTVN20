import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  itemInCart = new BehaviorSubject<number>(0);
  itemInCart$ = this.itemInCart.asObservable();

  constructor() {}

  addToCart() {
    this.itemInCart.next(this.itemInCart.value + 1);
  }
}
