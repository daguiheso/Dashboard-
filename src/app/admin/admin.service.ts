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

  permissionsCollection: AngularFirestoreCollection<Permission>;
  permissions: Observable<Permission[]>;

  profilesCollection: AngularFirestoreCollection<Profile>;
  profiles: Observable<Profile[]>;

  rolesCollection: AngularFirestoreCollection<Role>;
  roles: Observable<Role[]>;
  snapshot: any;

  rolesDocumnets: AngularFirestoreDocument<Role>;
  role: Observable<Role>

  constructor(private afs: AngularFirestore) {

    this.permissionsCollection = afs.collection<Permission>('permissions');
    this.permissions = this.permissionsCollection.valueChanges();
    this.snapshot = this.permissionsCollection.snapshotChanges()
      .map(actions => {

        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });

    this.profilesCollection = afs.collection<Profile>('profiles'); // reference
    this.profiles = this.profilesCollection.valueChanges(); // observable of notes data

    this.rolesCollection = afs.collection<Role>('roles');
    this.roles = this.rolesCollection.valueChanges();

    // var db = firebase.firestore();
    // this.snapshot = this.rolesCollection.snapshotChanges()
    //   .map(actions => {
    //     debugger
    //     return actions.map(a => {
    //       debugger
    //       const data = a.payload.doc.data();
    //       const id = a.payload.doc.id;
    //       return { id, ...data };
    //     });
    //   });

      this.rolesDocumnets = this.afs.doc('/roles/kbaOlmZ8UW0xazWT5ME7')
      this.role = this.rolesDocumnets.valueChanges()

  }

  public createPermission(permission: Permission) {
    return this.permissionsCollection.add(permission)
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
  }

  public getRoles() {
    return this.roles;
  }

  public getDoc() {
    return this.snapshot
  }

}
