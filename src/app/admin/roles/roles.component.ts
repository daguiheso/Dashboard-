import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Profile, Role, Permission } from '../../models/auth.models';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})

export class RolesComponent implements OnInit {

  roles: Role[];
  permissions: Permission[];
  role: any = {};
  toppings = new FormControl();

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllRoles().subscribe(roles => {
      this.roles = roles;
    },
    error => {

      });

    this.adminService.getPermissions().subscribe(permissions => {
      this.permissions = permissions;
    },
    error => {

    });
  }

  createRole(role: Role, permissions: Permission) {
    debugger
    // this.adminService.createRole(role)
    // .then(res => {
    //   debugger;
    // },
    // error => {
    //   debugger;
    // });
  }

}
