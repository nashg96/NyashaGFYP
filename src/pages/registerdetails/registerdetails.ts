import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {LoginPage} from '../pages/login/login';
import {RegisterdetailsPage} from '../pages/registerdetails/registerdetails';
import {RandrPage} from '../pages/randr/randr';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import 'firebase/firestore';

import{ AngularFireModule} from 'angularfire2/';
import{ AngularFireDatabaseModule} from 'angularfire2/database';
import{ AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FirebaseService } from '../services/firebase.service';

/**
 * Generated class for the RegisterdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registerdetails',
  templateUrl: 'registerdetails.html',
})
export class RegisterdetailsPage {
 messages: int;
  private db: any;
  usermodel: int = {};
  isEditing: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFireAuth: AngularFireAuth,private afAuth: AngularFireAuth,public toastCtrl: ToastController) {
  this.db = firebase.firestore();
    this.loadData();
    this.afAuth.authState.subscribe(user => {
        if(user) this.userId = user.uid
      })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterdetailsPage');
  }

  loadData(){
    this.getAllDocuments("users"+ this.userId).then((e)=>{
      this.messages = e;
  });
  }


  addMessage(){
    this.addDocument("users"+ this.userId, this.usermodel).then(()=>{
      this.loadData();//refresh view
      let toast = this.toastCtrl.create({
        message: 'Registration complete',
        duration: 3000
      });
      toast.present();

    });
}

 register() {
  		this.navCtrl.setRoot('LoginPage');
  }


//----------------------------------------------------------------------------------------------


  getAllDocuments(users: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db.collection(users)
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    arr.push(obj);
                });               
                    resolve(arr);

            })
            .catch((error: any) => {
                reject(error);
            });
    });
}




addDocument(collectionName: string, dataObj: any): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db.collection(collectionName).add(dataObj)
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}



}
