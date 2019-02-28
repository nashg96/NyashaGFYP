import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MemoryPage } from '../memory/memory'
import { TipsPage } from '../tips/tips'
import { StrategiesPage } from '../strategies/strategies'


/**
 * Generated class for the TipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html',
})
export class TipsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipsPage');
  }

   gotostrategies() {
    this.navCtrl.setRoot('StrategiesPage');
  }

   gototips() {
    this.navCtrl.setRoot('TipsPage');
  }

}
