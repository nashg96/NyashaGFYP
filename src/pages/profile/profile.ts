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
  var totalarr = [];
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

   messages: any;
   users: any;
  private db: any;
  model: int = {};
  usermodel: int = {};
  isEditing: boolean = false;

  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth) {
    this.db = firebase.firestore();
    this.loadData();
    this.loadUser();
   
    this.afAuth.authState.subscribe(user => {
        if(user) this.userId = user.uid
      })
  }

  ionViewDidLoad() {
   this.loadData();//refresh view;
   this.loadUser();//refresh view;
  
  }

  

  loadData(){
    this.getAllDocuments("survey"+ this.userId).then((e)=>{
      this.messages = e;
  });
  }

  loadUser(){
    this.getAllUserDocuments("users"+ this.userId).then((e)=>{
      this.users = e;
  });
  }



getAllDocuments(users: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db.collection(users)
            .get()
            .then((querySnapshot) => {
                let arr = [];
                let sumarr = [];
                querySnapshot.forEach(function (doc) {
                    var sum = 0;
                    var obj = doc.data();
                    for( var el in obj ) {
                      if( obj.hasOwnProperty( el ) ) {
                      sum += parseFloat( obj[el] );
                        }
                    }
                    sumarr.push(sum);
                    totalarr = sumarr;
                    arr.push(obj);
                   
                });               
                    resolve(arr);

            })
            .catch((error: any) => {
                reject(error);
            });
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
