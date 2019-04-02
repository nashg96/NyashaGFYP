import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public angularFireAuth: AngularFireAuth,private alertController: AlertController) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotoreg() {
    this.navCtrl.push('RegisterPage');
  } 


  async login(email, password) {
  	try{
  		const result = await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  		if(result) { 
  			this.navCtrl.setRoot('MemoryPage');
        this.showAlert();
		}
   }catch (e){
	console.error(e);
   }

  }

  async showAlert() {
    let number =  Math.floor(Math.random()*(5-0+1)+0);
  let array = ["Remember to use your calendar!","Remember to use Notes to take down important things through out the day!",
                "A place for everything and everything in its place!","Make sure to take care of your health, it can really improve your memory",
                "Make lists to help organize your day!"]
   const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: array[number],
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

}
