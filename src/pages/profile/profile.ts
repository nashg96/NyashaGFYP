import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';


import { ShorttermsurveyPage } from '../shorttermsurvey/shorttermsurvey';
import { ShortsurvprofilePage } from '../shortsurvprofile/shortsurvprofile'


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

  

  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth) {
    this.db = firebase.firestore();
    this.loadUser();
    this.afAuth.authState.subscribe(user => {
        if(user) this.userId = user.uid
      })
  }

  ionViewWillLoad() {
   this.loadUser();//refresh view;
  
  }


  loadUser(){
    this.getAllUserDocuments("users"+ this.userId).then((e)=>{
      this.users = e;
  });
  }


getAllUserDocuments(users: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db.collection(users)
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = doc.data();
                    arr.push(obj);
                    console.log(arr);
                });               
                    resolve(arr);
            })
            .catch((error: any) => {
                reject(error);
            });
    });
}


gotoshortsurvprofile() {
    this.navCtrl.push('ShortsurvprofilePage');
  }
}
