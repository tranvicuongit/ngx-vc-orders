import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import 'hammerjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { MessagingService } from '../firebase-connect/_services/messaging.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'body',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = [{ title: 'Home', link: '' }, { title: 'About', link: '/about' }];
  private _mobileQueryListener: () => void;

  constructor(
    public snackBar: MatSnackBar,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private msgService: MessagingService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.msgService.getPermission();
    this.msgService.receiveMessage();
    this.msgService.currentMessage.subscribe(val => {
      if (val != null && val.notification.body != null ) {
        this.openSnackBar(val.notification.body, 'OK');
      }
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
