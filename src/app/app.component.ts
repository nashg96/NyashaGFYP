import { Component, Inject, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireAuth} from 'angularfire2/auth';
import {rootRenderNodes} from '@angular/core/src/view'; 


@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  @ViewChild(Nav) nav: Nav;
  public rootPage:string = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private angularFireAuth: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      angularFireAuth.auth.onAuthStateChanged(function(user)
      {
        if(user){
        this.rootPage = 'Memorypage';
        }
        else{
        this.rootPage = 'LoginPage';
        }
      });  
    });
  }
  ngOnInit() {
    this.nav.setRoot(this.rootPage);
  }

  gotomemory() {
    this.nav.setRoot('MemoryPage');
  }

   gotoshortterm() {
    this.nav.setRoot('ShorttermPage');
  }

  gotolongterm() {
    this.nav.setRoot('LongtermPage');
  }

  gotoprospective() {
    this.nav.setRoot('ProspectivePage');
  }


  gotoattention() {
    this.nav.setRoot('AttentionPage');
  }

  gotostrategies() {
    this.nav.setRoot('StrategiesPage');
  }

  gototips() {
    this.nav.setRoot('TipsPage');
  }

  gotoprofile() {
    this.nav.setRoot('ProfilePage');
  }

   gotocalendar() {
    this.nav.setRoot('CalendarPage');
  }


   gotonotes() {
    this.nav.setRoot('NotesPage');
  }


  
}

