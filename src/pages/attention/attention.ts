import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AttentionsurvPage } from '../attentionsurv/attentionsurv'

@IonicPage()
@Component({
  selector: 'page-attention',
  templateUrl: 'attention.html',
})
export class AttentionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttentionPage');
  }

  slider = [
  {
      title: '',
    image: "assets/imgs/swipetobegin.png"
  },
  {
      title: '',
    image: "assets/imgs/attendiag1.png"
  },{
      title: '',
    image: "assets/imgs/attendiag2.png"
  },
  {
      title: '',
    image: "assets/imgs/attendiag3.png"
  },
  {
      title: '',
    image: "assets/imgs/attendiag4.png"
  },
  {
      title: '',
    image: "assets/imgs/attendiag5.png"
  },
  {
      title: '',
    image: "assets/imgs/attendiag6.png"
  },

  
  ];

  gotoattentionsurvey() {
    this.navCtrl.push('AttentionsurvPage');
  }


}
