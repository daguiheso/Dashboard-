import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Profile, Role, Permission } from '../models/auth.models';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  profiles: Profile[];
  roles: Role[];
  allRoles: any[];
  listPermission: Permission[];
  editState: boolean = false;
  profileToEdit: Profile;
  isShowEditRole: boolean = false;
  profileToAssignRole: Profile;
  role: {} = {};

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getProfiles().subscribe(profiles => {
      this.profiles = profiles;
    },
    error => {

    });

    // this.adminService.getRoles()

    this.adminService.getAllRoles().subscribe(roles => {
      this.allRoles = roles;
    },
    error => {

      });

    // this.adminService.getPermissions()

  }

  editProfile(event, profile: Profile) {
    this.editState = !this.editState;
    this.profileToEdit = profile;
  }

  showEditRole(event, profile: Profile) {
    this.isShowEditRole = !this.isShowEditRole;
    this.profileToAssignRole = profile;
  }

  assignRole(role: Role, profile: Profile) {
    debugger
    this.adminService.assignRole(role, profile)
      .then(res => {
        debugger
      },
      error => {
        debugger
      })
  }

  updateProfile(event, profile) {
    this.adminService.updateProfile(profile)
  }

  updateDoc(event, profile) {
    // debugger
    this.adminService.updateDoc(profile)
      .then(res => {
        debugger
      },
      error => {
        debugger
      })
  }

}
