import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

import { map, switchMap } from 'rxjs/operators'
import { auth } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from './models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  //uid = observableOf('123'); //change later
  uid = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState) {
        return null;
      } else {
        return authState.uid;
      }
    }),
  );
  isInGroup: Observable<boolean> = this.uid.pipe(
    switchMap(uid => {
      if(!uid){
        return observableOf(false);
      }
      else{
        return this.db.object<boolean>('/InGroup/' + uid).valueChanges();
      }
    })
  );


  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) { 

    }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}