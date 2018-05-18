import { Injectable } from '@angular/core';
import { FirebaseCrudService } from '../../../../firebase-connect/_services/firebase-crud.service';

@Injectable()
export class MenuService {
  _url = 'menus';
  constructor(private fb: FirebaseCrudService) {
    // console.log(new FirebaseCrudService());
    // this.fb.set('menus');
  }

  composeMenu(_menu) {
    this.fb.getObjectByKey(_menu.date, this._url).set(_menu);
  }
}
