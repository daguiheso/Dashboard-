import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Profile, Role } from '../models/auth.models';
import { Permission } from '../models/admin.models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  permission: any = {};
  role: any = {};

  profiles: Profile[];
  roles: Role[];
  listPermission: Permission[];
  editState: boolean = false;
  profileToEdit: Profile;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getProfiles().subscribe(profiles => {
      this.profiles = profiles;
    },
    error => {

    });

    this.adminService.getRoles().subscribe(roles => {
      debugger
      this.roles = roles;
    },
    error => {

      });

    this.adminService.getPermissions()

  }

  createPermission(permission: Permission) {
    this.adminService.createPermission(permission)
      // .then(res => {
      //   debugger;
      // },
      // error => {
      //   debugger;
      // });
  }

  createRole(role: Role, permissions: Permission[]) {
    debugger
    this.adminService.createRole(role)
      // .then(res => {
      //   debugger;
      // },
      // error => {
      //   debugger;
      // });
  }

  editProfile(event, profile) {
    debugger
    this.editState = true;
    this.profileToEdit = profile;
    this.adminService.updateProfile(profile)
  }

}
