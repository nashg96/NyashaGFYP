import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MemoryPage } from '../memory/memory'
import { ShorttermPage } from '../shortterm/shortterm'
import { LongtermPage } from '../longterm/longterm'
import { ProspectivePage } from '../prospective/prospective'

import { ProspectivesurvPage } from '../prospectivesurv/prospectivesurv'

/**
 * Generated class for the ProspectivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prospective',
  templateUrl: 'prospective.html',
})
export class ProspectivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProspectivePage');
  }

   slider = [
   {
      title: '',
    image: "assets/imgs/swipetobegin.png"
  },
  {
      title: '',
    image: "assets/imgs/prospdiag1.png"
  },
  {
    title: '',
     image: "assets/imgs/prospdiag2.png"
  },
  {
    title: '',
    image: "assets/imgs/prospdiag3.png"
    },
    {
    title: '',
    image: "assets/imgs/prospdiag4.png"
    },
  
  ];


    gotoprospsurvey() {
    this.navCtrl.push('ProspectivesurvPage');
  }
}	
