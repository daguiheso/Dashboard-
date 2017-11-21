import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Profile, Role, Permission } from '../models/auth.models';

@Injectable()
export class AdminService {

  profilesCollection: AngularFirestoreCollection<Profile>;
  profiles: Observable<Profile[]>;
  profilesDocuments: AngularFirestoreDocument<Profile>;


  snapshot: any;
  role: any;
  doc: any;

  allRolesCollection: AngularFirestoreCollection<any>;
  allRoles: Observable<any[]>;

  constructor(private afs: AngularFirestore) {

    // Get all profiles
    this.profilesCollection = afs.collection<Profile>('profiles'); // reference
    this.profiles = this.profilesCollection.snapshotChanges()
      .map(actions => {
        return actions.map(res => {
          const data = res.payload.doc.data() as Profile;
          const id = res.payload.doc.id;
          return { id, ...data };
        });
      });

    // Get profile
    this.profilesDocuments = this.afs.doc<Profile>('/profiles/kKDVb4ZmweflUwVgj5fe')
    this.role = this.profilesDocuments.collection<Role>('roles').snapshotChanges()
      .map(actions => {
        return actions.map(res => {
          const data = res.payload.doc.data() as Profile;
          const id = res.payload.doc.id;
          return { id, ...data };
        });
      });

    // Get list all Roles
    this.allRolesCollection = afs.collection<Profile>('roles')
    this.allRoles = this.allRolesCollection.snapshotChanges()
      .map(actions => {
        return actions.map(res => {
          const data = res.payload.doc.data() as Profile;
          const id = res.payload.doc.id;
          return { id, ...data };
        });
      });

      // this.rolesDocumnets = this.afs.doc('/roles/kbaOlmZ8UW0xazWT5ME7')
      // this.role = this.rolesDocumnets.valueChanges()
  }

  public updateDoc(profile: Profile) {
    this.profilesDocuments = this.afs.doc<Profile>(`/profiles/${profile.id}`)
    debugger
    // return this.profilesCollection.doc(profile.id).update(profile)
    return this.doc = this.profilesDocuments.collection<Role>('roles').doc(profile.id).update({name})
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

  public getAllRoles() {
    return this.allRoles;
  }

  public updateProfile(profile: Profile) {
    // this.profilesDocuments = this.afs.doc<Profile>(`/profiles/${profile.id}/roles/${this.role}`)
    // this.role = this.profilesDocuments.collection<Role>('roles').valueChanges()
    debugger

    //update document
    return this.profilesCollection.doc(profile.id).update(profile)

  }
}
