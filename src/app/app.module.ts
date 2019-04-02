import { BrowserModule } from '@angular/platform-browser';
import { forwardRef,ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Calendar } from '@ionic-native/calendar/ngx';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { HttpClientModule } from '@angular/common/http'; 
import{ AngularFireModule} from 'angularfire2/';
import{ AngularFireDatabaseModule} from 'angularfire2/database';
import{ AngularFireAuthModule} from 'angularfire2/auth';
import{ AngularFireAuth} from 'angularfire2/auth';
import{FIREBASE_CONFIG} from './firebase.credentials';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Chart } from 'chart.js';
import { AddEventPage } from '../pages/add-event/add-event';

import { FirebaseService } from '../services/firebase.service';

import { MyApp } from './app.component';
import { MemoryPage } from '../pages/memory/memory';
import { ShorttermPage } from '../pages/shortterm/shortterm';
import {LoginPage} from '../pages/login/login';
import {ProfilePage} from '../pages/profile/profile';
import {CalendarPage} from '../pages/calendar/calendar';
import {NotesPage} from '../pages/notes/notes';
import { AddnotePage } from '../pages/addnote/addnote';
import { ViewnotePage } from '../viewnote/viewnote';
import {AttentionPage} from '../pages/attention/attention';
import {RegisterPage} from '../pages/register/register';
import {RegisterdetailsPage} from '../pages/registerdetails/registerdetails';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from '../providers/note-service/note-service';


@NgModule({
  declarations: [
    MyApp,
    AddEventPage,

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
    ReactiveFormsModule,
    HttpClientModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  AddEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     FirebaseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    NoteService,
     Calendar
 

  ]
})
export class AppModule {}
