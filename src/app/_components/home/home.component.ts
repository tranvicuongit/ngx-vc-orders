import { Component, OnInit } from '@angular/core';
import { FirebaseCrudService } from '../../../firebase-connect/_services/firebase-crud.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ToastService } from '../../_services/toast.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  _list: AngularFireList<any>;
  items: any[];
  item: any = {
    title: '',
    content: ''
  };
  editMd: any = {
    title: '',
    content: '',
    key: ''
  };

  constructor(
    private _fbServ: FirebaseCrudService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this._fbServ.set('items');
    this._fbServ._list.valueChanges().subscribe((val: any) => {});
    // this.items = this._fbServ._list.valueChanges();
    this._fbServ._list
      .snapshotChanges()
      .map(actions => {
        return actions.map(action => ({
          key: action.key,
          ...action.payload.val()
        }));
      })
      .subscribe(items => {
        this.items = items;
        // return items.map(item => item.key);
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  addItem() {
    if (this.item.title != '' && this.item.content != '') {
      this._fbServ.create(this.item).then(val => {});
    } else {
      this.openSnackBar('Chưa nhập dữ liệu đầy đủ', 'Đã hiểu');
    }
    // console.log(this.item);
  }
  editItem() {
    if (this.editMd.title != '' && this.editMd.content != '') {
      this._fbServ.update(this.editMd.key, this.editMd).then(val => {
        console.log(val);
      });
    } else {
      this.openSnackBar('Chưa nhập dữ liệu đầy đủ', 'Đã hiểu');
    }
    // console.log(this.item);
  }

  edit(item) {
    this.editMd.title = item.title;
    this.editMd.content = item.content;
    this.editMd.key = item.key;
  }

  remove(item) {
    this._fbServ.delete(item.key);
  }
}
