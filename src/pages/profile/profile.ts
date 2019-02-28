import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor( public navCtrl: NavController,
    public firebaseService: FirebaseService,
    private fireStore: AngularFirestore) {

     this.userProfileCollection = fireStore.collection('users/');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  pull(){
    this.firebaseService.pullData()
   
  }
}
