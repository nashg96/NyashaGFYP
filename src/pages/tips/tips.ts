import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MemoryPage } from '../memory/memory'
import { TipsPage } from '../tips/tips'
import { TiponePage } from '../tipone/tipone'
import { TiptwoPage } from '../tiptwo/tiptwo'
import { TipthreePage } from '../tipthree/tipthree'
import { TipfourPage } from '../tipfour/tipfour'
import { TipfivePage } from '../tipfive/tipfive'
import { TipsixPage } from '../tipsix/tipsix'
import { TipsevenPage } from '../tipseven/tipseven'
import { TipseightPage } from '../tipseight/tipseight'
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

  
   gototipone() {
    this.navCtrl.push('TiponePage');
  }
  gototiptwo() {
    this.navCtrl.push('TiptwoPage');
  }
  gototipthree() {
    this.navCtrl.push('TipthreePage');
  }
  gototipfour() {
    this.navCtrl.push('TipfourPage');
  }
  gototifive() {
    this.navCtrl.push('TipfivePage');
  }
  gototipsix() {
    this.navCtrl.push('TipsixPage');
  }
  gototipseven() {
    this.navCtrl.push('TipsevenPage');
  }
  gototipeight() {
    this.navCtrl.push('TipseightPage');
  }


}
