import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  MatButton,
  MatFabButton,
  MatMiniFabButton,
} from '@angular/material/button';
import { PizzaModel } from '../../models/pizza.model';
import { CartService } from '../../services/cart/cart.service';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButton, MatFabButton, MatIconModule, MatMiniFabButton],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() pizza!: PizzaModel;
  currentRoute: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  addToCart() {
    this.cartService.addToCart();
  }
}
