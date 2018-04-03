import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AdminSessionService {
  isLoggined = false;
  logginSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}

  loggined() {
    return this.isLoggined;
  }

  setLoggin(_val) {
    this.isLoggined = _val;
  }
}
