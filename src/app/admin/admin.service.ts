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

  constructor(private afs: AngularFirestore) {}

  public createPermission(permission: Permission) {
    this.permissionsCollection = this.afs.collection<Permission>('permissions'); // reference
    return this.permissionsCollection.add(permission)
  }

  public assignPermissionToRole(roleId, permissions: Permission[]) {
    return this.rolesCollection.doc(roleId).collection('permissions').add({ list: permissions })
  }


  public createRole(role: Role) {
    this.rolesCollection = this.afs.collection<Role>('roles');
    return this.rolesCollection.add(role)
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
    this.rolesCollection = this.afs.collection<Role>('roles'
      // , ref => {
      // ref.where('firstName', '==', 'Daniel')
      // }
    )
    return  this.rolesCollection.snapshotChanges()
      .map(actions => {
        return actions.map(res => {
          const data = res.payload.doc.data() as Role;
          const id = res.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  public updateProfile(profile: Profile) {
    return this.profilesCollection.doc(profile.id).update(profile)
      .then(res => {
        debugger
      })
      .catch(err => {
        debugger
      })
  }

  public assignRoleToProfile(role: Role, profile: Profile) {
    return this.profilesCollection.doc(profile.id).collection('roles').add(role)
  }
}
