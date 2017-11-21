import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Permission } from '../../models/auth.models';

@Component({
  selector: "app-permissions",
  templateUrl: "./permissions.component.html",
  styleUrls: ["./permissions.component.scss"]
})

export class PermissionsComponent implements OnInit {

  permission: any = {};

  constructor(private adminService: AdminService) {
    this.adminService.getPermissions()
  }

  ngOnInit() {}

  createPermission(permission: Permission) {
    this.adminService.createPermission(permission);
    // .then(res => {
    //   debugger;
    // },
    // error => {
    //   debugger;
    // });
  }
}
