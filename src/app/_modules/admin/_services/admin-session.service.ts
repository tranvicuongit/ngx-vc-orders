import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { AdminEnum } from '../_enum/admin.enum';

@Injectable()
export class AdminSessionService {
  isLoggined = false;
  logginSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private route: Router) {}

  loggined() {
    return this.isLoggined;
  }

  setLoggin(_val) {
    this.isLoggined = _val;
    this.logginSubject.next(_val);
  }

  logout() {
    this.isLoggined = false;
    this.logginSubject.next(false);
    this.route.navigate([AdminEnum.Login]);
  }
}
