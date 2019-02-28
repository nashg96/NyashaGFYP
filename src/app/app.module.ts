import { BrowserModule } from '@angular/platform-browser';
import { forwardRef,ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';


import{ AngularFireModule} from 'angularfire2/';
import{ AngularFireDatabaseModule} from 'angularfire2/database';
import{ AngularFireAuthModule} from 'angularfire2/auth';
import{ AngularFireAuth} from 'angularfire2/auth';
import{FIREBASE_CONFIG} from './firebase.credentials';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FirebaseService } from '../services/firebase.service';

import { MyApp } from './app.component';
import { MemoryPage } from '../pages/memory/memory';
import { ShorttermPage } from '../pages/shortterm/shortterm';
import {LoginPage} from '../pages/login/login';
import {ProfilePage} from '../pages/profile/profile';
import {AttentionPage} from '../pages/attention/attention';
import {RegisterPage} from '../pages/register/register';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
     FirebaseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
  ]
})
export class AppModule {}
