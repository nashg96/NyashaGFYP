import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


export class item {
  body: string;
}

@Injectable()
export class FirebaseService {
  
 items: FirebaseListObservable<Item[]> = null;
 userId: string;


  constructor( public afs: AngularFirestore, private db: AngularFireDatabase, private afAuth: AngularFireAuth, public afd: AngularFireDatabase,
  ){
      this.afAuth.authState.subscribe(user => {
        if(user) this.userId = user.uid
      })
    }

    
    addUser(value){
      return new Promise<any>((resolve, reject) => {
        this.afs.collection('/users' + this.userId).add({
          Q1: parseInt(value.Q1),
          Q2: parseInt(value.Q2),
          Q3: parseInt(value.Q3),
          Q4: parseInt(value.Q4),
          Q5: parseInt(value.Q5),
          Q6: parseInt(value.Q6)
        })
        .then(
          (res) => {
            resolve(res)
          },
          err => reject(err)
        )
      })
    }

  

}