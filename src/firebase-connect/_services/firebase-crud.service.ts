import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class FirebaseCrudService {
  private _list: AngularFireList<any>;
  private _listUrl: string;
  constructor(private db: AngularFireDatabase) {}

  // set(_url) {
  //   this.db.list(_url)Url = _url;
  //   this.db.list(_url) = this.db.list(_url);
  // }
  create(_item, _url) {
    return this.db.list(_url).push(_item);
  }
  delete($key, _url) {
    return this.db.list(_url).remove($key);
  }
  update($key, _item, _url) {
    return this.db.list(_url).update($key, _item);
  }
  read(_url) {
    return this.db.list(_url);
  }
  readByKey($key, _url) {
    return this.db.object(_url + '/' + $key);
  }
  readFullKey(_url) {
    return this.db.list(_url).snapshotChanges()
      .map(actions => {
        return actions.map(action => ({
          key: action.key,
          ...action.payload.val()
        }));
      });
  }
  getObjectByKey(key, _url) {
    return this.db.object(_url + `/${key}`);
  }
}
