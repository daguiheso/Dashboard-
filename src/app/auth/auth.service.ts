import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {}

  public login(user) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  public signIn(user) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

}


