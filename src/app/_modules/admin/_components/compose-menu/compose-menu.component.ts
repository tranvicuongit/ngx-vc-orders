import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodService } from '../../_services/food.service';
import { MatSelectionList } from '@angular/material';
import { Helpers } from '../../../../_helpers/helper';
import { MenuService } from '../../_services/menu.service';

@Component({
  selector: 'app-compose-menu',
  templateUrl: './compose-menu.component.html',
  styles: []
})
export class ComposeMenuComponent implements OnInit {
  @ViewChild('foodList') foodSelected: MatSelectionList;
  foods: any[] = [];
  constructor(private _food: FoodService, private _menu: MenuService) {
    console.log(this._food);
    console.log(this._menu);
  }
  messages = '';
  hour = 10;
  minute = 30;
  date = new Date();

  ngOnInit() {
     this.getFoods();
  }

  getFoods() {
    this._food.get()
    .subscribe(items => {
      this.foods = Helpers.sortObjbyKey(items, 'Name');
    });
  }

  save() {
    if (this.foodSelected.selectedOptions.selected.length == 0) {
      window.alert('Vui lòng chọn thức ăn vào menu.');
    } else {
      const _date = Helpers.getUnixfromDate(this.date, 'D/M/YYYY');
      const _menu = [];
      for (let i = 0; i < this.foodSelected.selectedOptions.selected.length; i++) {
        _menu.push(this.foodSelected.selectedOptions.selected[i].value);
      }
      const _data = {
        date: _date,
        minute: this.minute,
        hour: this.hour,
        message: this.messages,
        menus: _menu
      };

      this._menu.composeMenu(_data);
    }
  }
}
