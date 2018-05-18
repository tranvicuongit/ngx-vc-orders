import { Injectable } from '@angular/core';
import { FirebaseCrudService } from '../../../../firebase-connect/_services/firebase-crud.service';

@Injectable()
export class FoodService {
  _url = 'foods';
  constructor(private fb: FirebaseCrudService) {
    // this.fb.set('foods');
  }


  create(food) {
    this.fb.create(food, this._url);
  }
  edit(food) {
    this.fb.update(food.key, food, this._url);
  }
  delete(food) {
    this.fb.delete(food.key, this._url);
  }

  get() {
    return this.fb.readFullKey(this._url);
  }
}
