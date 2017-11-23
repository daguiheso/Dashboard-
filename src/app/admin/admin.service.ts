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

  // Instance create list Roles
  rolesCollection: AngularFirestoreCollection<Role>;
  roles: Observable<Role[]>;
  // Instance create list Permissions
  permissionsCollection: AngularFirestoreCollection<Permission>;
  permissions: Observable<Permission[]>;

  profilesCollection: AngularFirestoreCollection<Profile>;
  profiles: Observable<Profile[]>;
  profilesDocuments: AngularFirestoreDocument<Profile>;

  snapshot: any;
  role: Observable<any[]>;
  doc: any;

  allRolesCollection: AngularFirestoreCollection<any>;
  allRoles: Observable<any[]>;

  constructor(private afs: AngularFirestore) {

      // this.rolesDocumnets = this.afs.doc('/roles/kbaOlmZ8UW0xazWT5ME7')
      // this.role = this.rolesDocumnets.valueChanges()
  }

  public updateDoc(profile: Profile) {
    this.profilesDocuments = this.afs.doc<Profile>(`/profiles/${profile.id}`)

    // funciono para editar subcollection
    // return this.profilesCollection.doc(profile.id).collection('roles').doc('PUuxPFBIEDn2Up8IWVJp').update({name: 'jajajaja'})

    this.role = this.profilesDocuments.collection<Role>('roles').snapshotChanges()
      .map(actions => {
        return actions.map(res => {
          const data = res.payload.doc.data() as Profile;
          const id = res.payload.doc.id;
          return { id, ...data };
        });
      });
    return this.profilesDocuments.collection<Role>('roles').doc('PUuxPFBIEDn2Up8IWVJp').update({ name: 'superelojaja' })
    // this.role = this.profilesDocuments.collection<Role>('roles').snapshotChanges()
  }

  public createPermission(permission: Permission) {
    this.permissionsCollection = this.afs.collection<Permission>('permissions'); // reference
    // this.permissions = this.permissionsCollection.valueChanges();
    return this.permissionsCollection.add(permission)
  }

  public createRole(role: Role) {
    // debugger
    // return this.rolesCollection.add(role)
  }

  public getPermissions() {
    this.permissionsCollection = this.afs.collection<Permission>('permissions')
    return this.permissionsCollection.snapshotChanges()
      .map(actions => {
        return actions.map(res => {
          const data = res.payload.doc.data() as Permission;
          const id = res.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  public getProfiles() {
    this.profilesCollection = this.afs.collection<Profile>('profiles');
    return this.profilesCollection.snapshotChanges()
      .map(actions => {
        return actions.map(res => {
          const data = res.payload.doc.data() as Profile;
          const id = res.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  public getRoles() {
    return this.role;
  }

  public getAllRoles() {
    this.allRolesCollection = this.afs.collection<Role>('roles')
    return  this.allRolesCollection.snapshotChanges()
      .map(actions => {
        return actions.map(res => {
          const data = res.payload.doc.data() as Role;
          const id = res.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  public updateProfile(profile: Profile) {
    // update document
    return this.profilesCollection.doc(profile.id).update(profile)
      .then(res => {
        debugger
      })
      .catch(err => {
        debugger
      })


    // Update subcollection
    // this.profilesDocuments = this.afs.doc<Profile>(`/profiles/${profile.id}`)
    // this.profilesDocuments.collection<Role>('roles').doc('PUuxPFBIEDn2Up8IWVJp').update({ name: 'superelojaja' })
  }

  public assignRole(role: Role, profile: Profile) {
    debugger

    return this.profilesCollection.doc(profile.id).collection('roles').add({name: role.name})
  }
}
