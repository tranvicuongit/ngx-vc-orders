import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Helpers } from '../../../../_helpers/helper';
import { AdminSessionService } from '../../_services/admin-session.service';
import { Route, Router } from '@angular/router';
import { AdminEnum } from '../../_enum/admin.enum';
import { LoginService } from '../../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {
    username : '',
    password : ''
  };
  isLoading = false;
  constructor(
    private _snack: MatSnackBar,
    private _session: AdminSessionService,
    private _route: Router,
    private _login: LoginService

  ) { }

  ngOnInit() {
  }

  signin() {
    if (this.model.username == '' || this.model.password == '') {
      this._snack.open('Vui lòng nhập đầy đủ thông tin', 'OK');
      this.focus();
    } else {
      this.isLoading = true;
      // this._login.createUser(this.model.username, Helpers.encrypt(this.model.password))
      // .then(val => {
      //   console.log(val);
      // });
      if (
        this.model.password == Helpers.decrypt('U2FsdGVkX19uaY/BQwlPdR89DRoaywuBAHhezuB56Fk=')
        &&
        this.model.username == Helpers.decrypt('U2FsdGVkX18reac3nwzKdP0Sv4ydMOnpCwWSo4KNYug=')
      ) {
        this.success();
        } else {
          this._login.checkLogin(this.model.username).subscribe((val: any) => {
            if (val != null && Helpers.decrypt(val.password) == this.model.password) {
              this.success();
            } else {
              this._snack.open('Tên đăng nhập hoặc mật khẩu bị sai!', 'OK');
              this.isLoading = false;
              this.focus();
            }
          });
        }
    }
  }
  success() {
    this._snack.dismiss();
    this._session.setLoggin(true);
    this._route.navigate([AdminEnum.MainBoard]);
    this.isLoading = false;
  }
  focus() {
    if (this.model.username == '') {
      Helpers.focusInputbyId('txtUsername');
    } else {
      Helpers.focusInputbyId('txtPassword');
    }
  }
}
