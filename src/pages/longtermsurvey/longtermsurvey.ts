import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LongtermPage } from '../longterm/longterm'


/**
 * Generated class for the LongtermsurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-longtermsurvey',
  templateUrl: 'longtermsurvey.html',
})
export class LongtermsurveyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LongtermsurveyPage');
  }

  goBack() {
    this.navCtrl.setRoot('LongtermPage');
  }

}
