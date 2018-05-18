import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../_services/menu.service';
import { FoodService } from '../../_services/food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  foodList: any[];
  constructor(private _menu: MenuService, private _foods: FoodService) { }

  ngOnInit() {
  }

  getFoods() {
    this._foods.get()
    .subscribe(items => {
      this.foodList = items;
    });
  }
}
