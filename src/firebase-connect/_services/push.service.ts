import { Injectable } from '@angular/core';

@Injectable()
export class PushService {
  pushData: any = {
    notification: {
      title: 'Background Message Title',
      body: 'Background Message Body'
    },
    to: ''
  };

  constructor() {}

//   generatePush(pushData) {
//     const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'key=<add your server key here>'});
//     const options = new  ({ headers: headers });
//     return this.http.post('https://fcm.googleapis.com/fcm/send', pushData, options)
//       .map(data => {console.log('Successfully Sent')});
//  }
}
