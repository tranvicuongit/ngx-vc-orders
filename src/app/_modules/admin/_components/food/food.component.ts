import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../_services/food.service';
import { APP_BASE_HREF } from '@angular/common';
import { AngularFireList } from 'angularfire2/database';
import { FoodType } from '../../../../_enum/food.enum';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styles: []
})
export class FoodComponent implements OnInit {
  list: AngularFireList<any>;
  items: any[];
  modifier: any = {
    Name: '',
    Type: FoodType.Food,
    Price: 25000
  };

  constructor(private _api: FoodService) { }

  ngOnInit() {
    this.getList();
  }

  add() {

  }

  saveModifier() {
    if (this.modifier.key != undefined && this.modifier.key != null) {
      this._api.edit(this.modifier);
    } else {
      this._api.create(this.modifier);
    }

    this.cancelModifier();
  }
  cancelModifier()  {
    this.modifier = {
      Name: '',
      Type: FoodType.Food,
      Price: 25000
    };
  }

  edit(item) {
    this.modifier = JSON.parse(JSON.stringify(item));
  }

  delete(item) {
    if (window.confirm('Xóa thiệt không?')) {
      this._api.delete(item);
    }
  }

  getList() {
    this._api.get()
      .subscribe(items => {
        this.items = items;
      });
  }
}


