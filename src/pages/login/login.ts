import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFireAuth: AngularFireAuth) {
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
		}
   }catch (e){
	console.error(e);
   }

  }

}
