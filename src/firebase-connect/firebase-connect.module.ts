import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseConnectComponent } from './firebase-connect.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FirebaseConfig } from './_enum/firebase.config';
import { FirebaseCrudService } from './_services/firebase-crud.service';
import { MessagingService } from './_services/messaging.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [],
  providers: [
    FirebaseCrudService,
    MessagingService
  ],
  exports: [
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ]
})
export class FirebaseConnectModule { }
