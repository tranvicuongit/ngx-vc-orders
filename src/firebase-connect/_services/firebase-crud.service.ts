import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class FirebaseCrudService {
  _list: AngularFireList<any>;
  _listUrl: string;
  constructor(private db: AngularFireDatabase) {}

  set(_url) {
    this._listUrl = _url;
    this._list = this.db.list(_url);
  }
  create(_item) {
    return this._list.push(_item);
  }
  delete($key) {
    return this._list.remove($key);
  }
  update($key, _item) {
    return this._list.update($key, _item);
  }
  read() {
    return this._list;
  }
  readByKey($key) {
    return this.db.object(this._listUrl + '/' + $key);
  }
  readFullKey() {
    return this._list.snapshotChanges()
      .map(actions => {
        return actions.map(action => ({
          key: action.key,
          ...action.payload.val()
        }));
      });
  }
  getObjectByKey(key) {
    return this.db.object(this._listUrl + `/${key}`);
  }
}
