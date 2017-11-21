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
  allRoles: Role[];
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
      // debugger
      this.roles = roles;
    },
    error => {

      });

    this.adminService.getAllRoles().subscribe(roles => {
      // debugger
      this.allRoles = roles;
    },
    error => {

      });

    this.adminService.getPermissions()

  }

  editProfile(event, profile) {
    this.editState = true;
    this.profileToEdit = profile;
  }

  updateProfile(event, profile) {
    debugger
    this.adminService.updateProfile(profile)
      .then(res => {
        debugger
      },
      error => {
        debugger
      })
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
