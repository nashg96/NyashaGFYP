import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireDatabase } from 'angularfire2/database'

import { ShorttermPage } from '../shortterm/shortterm'


/**
 * Generated class for the ShorttermsurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shorttermsurvey',
  templateUrl: 'shorttermsurvey.html',
})
export class ShorttermsurveyPage {

  simple_form: FormGroup;
  items;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public firebaseService: FirebaseService,
    public toastCtrl: ToastController
  ) {
  }

  ionViewWillLoad(){
    this.getData();
  }

  getData(){
    this.simple_form = this.formBuilder.group({
     Q1: new FormControl('', Validators.required),
     Q2: new FormControl('', Validators.required),
     Q3: new FormControl('', Validators.required),
     Q4: new FormControl('', Validators.required),
     Q5: new FormControl('', Validators.required),
     Q6: new FormControl('', Validators.required),
    });
  }

  add(value){
    this.firebaseService.addUser(value)
    .then( res => {
      let toast = this.toastCtrl.create({
        message: 'Survey Completed',
        duration: 3000
      });
      toast.present();
      this.navCtrl.setRoot('ShorttermPage');
    }, err => {
      console.log(err)
    })
  }






  goBack() {
    this.navCtrl.setRoot('ShorttermPage');
  }

}
