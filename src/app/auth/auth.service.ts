import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  public login(user) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  public save(user) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(a => {
        debugger
      }).catch(error => {
        debugger
      });
  }
}


