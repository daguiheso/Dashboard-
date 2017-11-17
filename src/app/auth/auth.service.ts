import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';

export interface Profile { name: string; }

@Injectable()
export class AuthService {

  private itemsCollection: AngularFirestoreCollection<Profile>;
  items: Observable<Profile[]>;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Profile>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  public login(user) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  public signIn(user) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
  }

  public createUser(user: Profile) {
    return this.itemsCollection.add(user)
  }
}


