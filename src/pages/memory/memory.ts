import { Component, Inject, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireAuth} from 'angularfire2/auth';
import {rootRenderNodes} from '@angular/core/src/view'; 
import { Storage } from '@ionic/storage';


import { MemoryPage } from '../memory/memory'
import { ShorttermPage } from '../shortterm/shortterm'
import { LongtermPage } from '../longterm/longterm'
import { ProspectivePage } from '../prospective/prospective'
import { TipsPage } from '../tips/tips'

@IonicPage()
@Component({
  selector: 'page-memory',
  templateUrl: 'memory.html',
})
export class MemoryPage {

	 @ViewChild(Nav) nav: Nav;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private alertController: AlertController) {
  }

  


  ionViewDidLoad() {
    console.log('ionViewDidLoad MemoryPage');
  }

  randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


  async ionViewDidEnter() {
  
}



  slider = [
  {
      title: '',
    image: "assets/imgs/swipetobegin.png"
  },
  {
      title: '',
    image: "assets/imgs/memdiag1.0.png"
  },
  {
  	title: '',
     image: "assets/imgs/memdiag2.0.png"
  },
  {
  	title: '',
    image: "assets/imgs/memdiag3.0.png"
  	},
    {
    title: '',
    image: "assets/imgs/memdiag4.0.png",

    },
    {
    title: '',
    image: "assets/imgs/memdiag5.0.png",

    },
    {
    title: '',
    image: "assets/imgs/memdiag6.0.png",

    },
    {
    title: '',
    image: "assets/imgs/memdiag7.0.png",

    },
    {
    title: '',
    image: "assets/imgs/memdiag8.0.png",

    },
    {
    title: '',
    image: "assets/imgs/memdiag9.0.png",

    },
    {
    title: '',
    image: "assets/imgs/memdiag9.0.png",

    },
    {
    title: '',
    image: "assets/imgs/memdiag10.0.png",

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

}
