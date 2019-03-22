import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { MemoryPage } from '../memory/memory'
import { ShorttermPage } from '../shortterm/shortterm'
import { LongtermPage } from '../longterm/longterm'
import { LongtermsurveyPage } from '../longtermsurvey/longtermsurvey'
import { ProspectivePage } from '../prospective/prospective'

/**
 * Generated class for the LongtermPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-longterm',
  templateUrl: 'longterm.html',
})
export class LongtermPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LongtermPage');
  }


  slider = [
  {
      title: '',
    image: "assets/imgs/swipetobegin.png"
  },
  {
      title: '',
    image: "assets/imgs/longdiag1.png"
  },
  {
    title: 'Types of information stored',
     image: "assets/imgs/longdiag2.png"
  },
  {
    title: 'How is long-term memory useful?',
    image: "assets/imgs/longdiag3.png"
    },
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

   gotolongtermsurvey() {
    this.navCtrl.push('LongtermsurveyPage');
  }


}
