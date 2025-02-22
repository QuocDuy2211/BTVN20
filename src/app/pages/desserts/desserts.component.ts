import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { PizzaModel } from '../../models/pizza.model';
import { ChickenModel } from '../../models/chicken.model';
import { PizzaService } from '../../services/pizza/pizza.service';
import { ChickenService } from '../../services/chicken/chicken.service';
import { ActivatedRoute } from '@angular/router';
import { DessertService } from '../../services/dessert/dessert.service';
import { DessertModel } from '../../models/dessert.model';

@Component({
  selector: 'app-desserts',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.scss',
})
export class DessertsComponent implements OnInit {
  products!: PizzaModel[] | ChickenModel[] | DessertModel[];

  constructor(
    private pizzaService: PizzaService,
    private chickenService: ChickenService,
    private activatiedRoute: ActivatedRoute,
    private dessertService: DessertService,
  ) {}

  ngOnInit() {
    this.activatiedRoute.url.subscribe((url) => {
      if (url[0].path == 'pizza') {
        this.products = this.pizzaService.products;
      } else if (url[0].path == 'chickens') {
        this.products = this.chickenService.chickens;
      } else if (url[0].path == 'desserts') {
        this.products = this.dessertService.products;
      }
    });
  }
}
