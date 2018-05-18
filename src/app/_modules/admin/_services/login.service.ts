import { Injectable } from '@angular/core';
import { FirebaseCrudService } from '../../../../firebase-connect/_services/firebase-crud.service';

@Injectable()
export class LoginService {
  _url = 'users';
  constructor(private fb: FirebaseCrudService) {
  }

  createUser(username, password) {
    const _obj = this.fb.getObjectByKey(username, this._url);
    return _obj.set({password: password});
  }

  checkLogin(username) {
    return this.fb.getObjectByKey(username, this._url).valueChanges();
  }
}
