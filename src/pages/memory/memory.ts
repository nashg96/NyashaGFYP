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

  async ionViewDidEnter() {
   const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Exercise and eat healthy. It helps keep your mind sharp!',
      buttons: [
              {
              text: 'See more Tips', 
              handler: () => {
                this.navCtrl.setRoot('TipsPage');
              }
              },{
              text: 'OK', 
              }
              ]
  });

   await alert.present();
}



  slider = [
  {
      title: 'Memory',
    image: "assets/imgs/memdiag1.png"
  },
  {
  	title: 'Different aspects of Memory',
     image: "assets/imgs/memdiag2.png"
  },
  {
  	title: 'Different aspects of Memory',
    image: "assets/imgs/memdiag3.png"
  	},
    {
    title: 'Different aspects of Memory',
    image: "assets/imgs/memdiag4.png",

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
