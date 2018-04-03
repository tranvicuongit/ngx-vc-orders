import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AdminSessionService } from './_services/admin-session.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material';
import { Helpers } from '../../_helpers/helper';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit, OnDestroy {
  isLoggined = false;
  mobileQuery: MediaQueryList;

  fillerNav = [{ title: 'Home', link: '' }, { title: 'About', link: '/about' }];
  private _mobileQueryListener: () => void;

  constructor(
    public snackBar: MatSnackBar,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private _session: AdminSessionService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    // this.msgService.getPermission();
    // this.msgService.receiveMessage();
    // this.msgService.currentMessage.subscribe(val => {
    //   if (val != null && val.notification.body != null ) {
    //     this.openSnackBar(val.notification.body, 'OK');
    //   }
    // });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  ngOnInit() {
    this._session.logginSubject.subscribe(val => {
      this._session.setLoggin(val);
      this.isLoggined = val;
    });
    Helpers.setLoading(false);
  }

}
