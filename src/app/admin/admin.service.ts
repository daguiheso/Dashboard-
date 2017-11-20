import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Profile, Role } from '../models/auth.models';
import { Permission } from '../models/admin.models';

@Injectable()
export class AdminService {

  profilesCollection: AngularFirestoreCollection<Profile>;
  profiles: Observable<Profile[]>;

  profilesDocuments: AngularFirestoreDocument<Profile>;

  snapshot: any;
  role: Observable<Role[]>;

  constructor(private afs: AngularFirestore) {

    this.profilesCollection = afs.collection<Profile>('profiles'); // reference

    this.profiles = this.profilesCollection.snapshotChanges()
      .map(actions => {
        return actions.map(res => {
          const data = res.payload.doc.data() as Profile;
          const id = res.payload.doc.id;
          return { id, ...data };
        });
      });

    this.profilesDocuments = this.afs.doc<Profile>('/profiles/kKDVb4ZmweflUwVgj5fe')
    this.role = this.profilesDocuments.collection<Role>('roles').valueChanges()

      // this.rolesDocumnets = this.afs.doc('/roles/kbaOlmZ8UW0xazWT5ME7')
      // this.role = this.rolesDocumnets.valueChanges()
  }

  public createPermission(permission: Permission) {
    // return this.permissionsCollection.add(permission)
  }

  public createRole(role: Role) {
    // debugger
    // return this.rolesCollection.add(role)
  }

  public getPermissions() {
    return this.snapshot;
  }

  public getProfiles() {
    return this.profiles;
    // return this.profiles;
  }

  public getRoles() {
    return this.role;
  }

}
