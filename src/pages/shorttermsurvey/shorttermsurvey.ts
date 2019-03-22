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
 date = new Date()

  messages: int;
  private db: any;
  model: int = {timestamp: this.date};
  isEditing: boolean = false;

  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth, public toastCtrl: ToastController) {
    this.db = firebase.firestore();
    this.loadData();
    this.afAuth.authState.subscribe(user => {
        if(user) this.userId = user.uid
      })
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
let date = new Date()

  return new Promise((resolve, reject) => {
      this.db.collection(collectionName).add(dataObj )
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
 
}

}
