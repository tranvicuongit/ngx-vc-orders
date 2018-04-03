import { Injectable } from '@angular/core';
import { FirebaseCrudService } from '../../../../firebase-connect/_services/firebase-crud.service';

@Injectable()
export class LoginService {
  constructor(private fb: FirebaseCrudService) {
    this.fb.set('users');
  }

  createUser(username, password) {
    const _obj = this.fb.getObjectByKey(username);
    console.log(_obj);
    return _obj.set({password: password});
  }

  checkLogin(username) {
    return this.fb.getObjectByKey(username).valueChanges();
  }
}
