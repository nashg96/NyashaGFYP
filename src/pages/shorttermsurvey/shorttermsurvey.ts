import { Component } from '@angular/core';
import { NavController,ToastController  } from 'ionic-angular';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';

import { ShorttermPage } from '../shortterm/shortterm'

@IonicPage()
@Component({
  selector: 'page-shorttermsurvey',
  templateUrl: 'shorttermsurvey.html',
})
export class ShorttermsurveyPage {
  
   messages: int;
  private db: any;
  model: int = {};
  isEditing: boolean = false;

  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth, public toastCtrl: ToastController) {
    this.db = firebase.firestore();
    this.loadData();
    this.afAuth.authState.subscribe(user => {
        if(user) this.userId = user.uid
      })
  }

   addThemFunction () {
   let totalarr = [];
        let  ansone = Number(this.model.Q1) ;
        let  anstwo = Number(this.model.Q2) ;
        let  ansthree = Number(this.model.Q3) ;
        let  ansfour = Number(this.model.Q4) ;
        let  ansfive = Number(this.model.Q5) ;
        let  anssix = Number(this.model.Q6) ;
        this.total = ansone + anstwo + ansthree + ansfour + ansfive + anssix;
        var obj = this.total;
        totalarr.push(obj);
        console.log(totalarr[0]);
        return total;
    }


  loadData(){
    this.getAllDocuments("survey"+ this.userId).then((e)=>{
      this.messages = e;
  });
  }


addMessage(){
    this.addDocument("survey"+ this.userId, this.model).then(()=>{
      this.loadData();//refresh view
      let toast = this.toastCtrl.create({
        message: 'Survey Completed',
        duration: 3000
      });
      toast.present();
      this.navCtrl.setRoot('ShorttermPage');

    });
}

addTotal(){
    this.addTotalDoc("survey"+ this.userId, this.total).then(()=>{
      this.loadData();//refresh view
      let toast = this.toastCtrl.create({
        message: 'Survey Completed',
        duration: 3000
      });
      toast.present();
      this.navCtrl.setRoot('ShorttermPage');

    });
}




//CRUD operation methods------------------------------------------------------------------------------------------

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

addTotalDoc(collectionName: string, dataObj: any): Promise<any> {
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
