import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MemoryPage } from '../memory/memory'
import { TipsPage } from '../tips/tips'
import { StrategiesPage } from '../strategies/strategies'
import { FivewPage } from '../fivew/fivew'

import { AttentionstratPage } from '../attentionstrat/attentionstrat'
import { ChunkingstratPage } from '../chunkingstrat/chunkingstrat'
import { DeeplevelPage } from '../deeplevel/deeplevel'
import { ExprehearsalstratPage } from '../exprehearsalstrat/exprehearsalstrat'
import { FirstletterstratPage } from '../firstletterstrat/firstletterstrat'
import { LinkstratPage } from '../linkstrat/linkstrat'
import { RandrPage } from '../randr/randr'
import { RetrievalstratPage } from '../retrievalstrat/retrievalstrat'
import { StorystratPage } from '../storystrat/storystrat'
import { VisualstratPage } from '../visualstrat/visualstrat'

/**
 * Generated class for the StrategiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-strategies',
  templateUrl: 'strategies.html',
})
export class StrategiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StrategiesPage');
  }

  gotostrategies() {
    this.navCtrl.setRoot('StrategiesPage');
  }

   gototips() {
    this.navCtrl.setRoot('TipsPage');
  }

  gotoattentionstrat() {
    this.navCtrl.push('AttentionstratPage');
  }

  gotochunkingstrat() {
    this.navCtrl.push('ChunkingstratPage');
  }

  gotodeeplevel() {
    this.navCtrl.push('DeeplevelPage');
  }

  gotoexprehearsalstrat() {
    this.navCtrl.push('ExprehearsalstratPage');
  }

  gotofirstletterstrat() {
    this.navCtrl.push('FirstletterstratPage');
  }

  gotolinkstrat() {
    this.navCtrl.push('LinkstratPage');
  }

  gotofivew() {
    this.navCtrl.push('FivewPage');
  }

  goto5wstrat() {
    this.navCtrl.push('5wstratPage');
  }
  
  gotorandr() {
    this.navCtrl.push('RandrPage');
  }

  gotoretrievalstrat() {
    this.navCtrl.push('RetrievalstratPage');
  }

  gotostorystrat() {
    this.navCtrl.push('StorystratPage');
  }

  gotovisualstrat() {
    this.navCtrl.push('VisualstratPage');
  }


}
