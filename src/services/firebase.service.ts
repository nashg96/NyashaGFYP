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

    
    
   
  

}