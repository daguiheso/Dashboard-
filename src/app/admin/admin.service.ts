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
  rolesCol: AngularFirestoreCollection<Role>;
  roles: Observable<Role[]>;
  // Instance create list Permissions
  permissionsCol: AngularFirestoreCollection<Permission>;
  permissions: Observable<Permission[]>;

  profilesCol: AngularFirestoreCollection<Profile>;
  profiles: Observable<Profile[]>;
  profilesDoc: AngularFirestoreDocument<Profile>;

  role: Observable<any[]>;

  constructor(private afs: AngularFirestore) {}

  public createPermission(permission: Permission) {
    this.permissionsCol = this.afs.collection<Permission>('permissions'); // reference
    return this.permissionsCol.add(permission)
  }

  public updatePermission(permission: Permission) {
    return this.permissionsCol.doc(permission.id).update(permission)
  }

  public assignPermissionToRole(roleId, permissions: Permission[]) {
    return this.rolesCol.doc(roleId).collection('permissions').add({ list: permissions })
  }

  public createRole(role: Role) {
    this.rolesCol = this.afs.collection<Role>('roles');
    return this.rolesCol.add(role)
  }

  public getPermissions() {
    this.permissionsCol = this.afs.collection<Permission>('permissions')
    return this.permissionsCol.snapshotChanges()
      .map(actions => {
        return actions.map(res => {
          const data = res.payload.doc.data() as Permission;
          const id = res.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  public getProfiles() {
    this.profilesCol = this.afs.collection<Profile>('profiles');
    return this.profilesCol.snapshotChanges()
      .map(actions => {
        return actions.map(res => {
          const data = res.payload.doc.data() as Profile;
          const id = res.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  public getRoles() {
    this.rolesCol = this.afs.collection<Role>('roles'
      // , ref => {
      // ref.where('firstName', '==', 'Daniel')
      // }
    )
    return  this.rolesCol.snapshotChanges()
      .map(actions => {
        return actions.map(res => {
          const data = res.payload.doc.data() as Role;
          const id = res.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  public updateProfile(profile: Profile) {
    return this.profilesCol.doc(profile.id).update(profile)
  }

  public assignRoleToProfile(role: Role, profile: Profile) {
    return this.profilesCol.doc(profile.id).collection('roles').add(role)
  }
}
