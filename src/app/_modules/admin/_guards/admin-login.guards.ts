import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AdminSessionService } from '../_services/admin-session.service';
import { AdminEnum } from '../_enum/admin.enum';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private __session: AdminSessionService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const isLoggined = this.__session.loggined();
        if (isLoggined) {
            return true;
        } else {
          this.__session.logginSubject.next(false);
          // console.log(AdminEnum.Main + '/' + AdminEnum.Login);
            this.router.navigate([AdminEnum.Main + '/' + AdminEnum.Login]);
        }
        return false;
    }
}
