import { Component, Inject, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireAuth} from 'angularfire2/auth';
import {rootRenderNodes} from '@angular/core/src/view'; 

import { MemoryPage } from '../memory/memory'
import { ShorttermPage } from '../shortterm/shortterm'
import { ShorttermsurveyPage } from '../shorttermsurvey/shorttermsurvey'
import { LongtermPage } from '../longterm/longterm'
import { ProspectivePage } from '../prospective/prospective'

/**
 * Generated class for the ShorttermPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shortterm',
  templateUrl: 'shortterm.html',
})
export class ShorttermPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShorttermPage');
  }

  slider = [
  {
      title: '',
    image: "assets/imgs/swipetobegin.png"
  },
  {
    title: '',
     image: "assets/imgs/shortdiag2.png"
  },
  {
    title: '',
    image: "assets/imgs/shortdiag3.png"
    },
    {
    title: '',
    image: "assets/imgs/shortdiag4.png"
    },
    {
    title: '',
    image: "assets/imgs/shortdiag5.png"
    }
  ];


   gotomemory() {
    this.navCtrl.setRoot('MemoryPage');
  }

   gotoshortterm() {
    this.navCtrl.setRoot('ShorttermPage');
  }

  gotolongterm() {
    this.navCtrl.setRoot('LongtermPage');
  }

  gotoprospective() {
    this.navCtrl.setRoot('ProspectivePage');
  }

  gotoshorttermsurvey() {
    this.navCtrl.push('ShorttermsurveyPage');
  }

  


}
