import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Chart } from 'chart.js';


import { ShorttermsurveyPage } from '../shorttermsurvey/shorttermsurvey';
import { ShortsurvprofilePage } from '../shortsurvprofile/shortsurvprofile'
/**
 * Generated class for the ShortsurvprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 var totalarr = [];
@IonicPage()
@Component({
  selector: 'page-shortsurvprofile',
  templateUrl: 'shortsurvprofile.html',
})
export class ShortsurvprofilePage {

 @ViewChild('barCanvas') barCanvas;

    barChart: any;

	  messages: any;
  	users: any;
  	private db: any;
  	model: int = {};
  	usermodel: int = {};
  	isEditing: boolean = false;

  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth, private alertController: AlertController) {
    this.db = firebase.firestore();
    this.loadData();
   
    this.afAuth.authState.subscribe(user => {
        if(user) this.userId = user.uid
      })
  }


  ionViewWillEnter() {
   this.loadData();//refresh view;
  
    console.log(totalarr);
  this.barChart = new Chart(this.barCanvas.nativeElement, {

            type: 'bar',
            data: {
                labels: ["", "", "", "", "", "", "", ""],
                datasets: [{
                    label: 'Progress so far',
                    data: totalarr,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }

        });

  
  }

  

  loadData(){
    this.getAllDocuments("survey"+ this.userId).then((e)=>{
      this.messages = e;
     
  });
  }



getAllDocuments(users: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db.collection(users).orderBy('timestamp', 'asc')
            .get()
            .then((querySnapshot) => {
                let arr = [];
                let sumarr = [];
                querySnapshot.forEach(function (doc) {
                    var sum = 0;
                    var obj = doc.data();
                    for( var el in obj ) {
                      if( obj.hasOwnProperty( el ) && (typeof obj[el] == "string")) {
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

 async ionViewDidEnter() {
  let array = ["Well done! Your score has improved from the last time you took this survey. Keep it up!"
  ,"It looks like your score hasn't improved from the last time. Remember to use the tips and strategies you've learnt in your every day life!"]
  if(totalarr[totalarr.length-1]>totalarr[totalarr.length-2]){
   const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: array[0],
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
 }else if(totalarr[totalarr.length-1]<totalarr[totalarr.length-2]){
   const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: array[1],
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


}
