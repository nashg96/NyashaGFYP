import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../pages/login/login';
import {AngularFireAuth} from 'angularfire2/auth';

import{ AngularFireModule} from 'angularfire2/';
import{ AngularFireDatabaseModule} from 'angularfire2/database';
import{ AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FirebaseService } from '../services/firebase.service';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFireAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

   register(email, password) {
  	this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then((res) => {
  		this.navCtrl.setRoot('LoginPage', {email});
  	});
  }

}
