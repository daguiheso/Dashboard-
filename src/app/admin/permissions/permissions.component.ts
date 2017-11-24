import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Permission } from '../../models/auth.models';

@Component({
  selector: "app-permissions",
  templateUrl: "./permissions.component.html",
  styleUrls: ['../admin.component.scss']
})

export class PermissionsComponent implements OnInit {

  permission: any = {};
  listPermissions: Permission[];
  isShowFormUpdatePermission: boolean = false;
  permissionToEdit: Permission;

  constructor(private adminService: AdminService) {

  }

  ngOnInit() {
    this.adminService.getPermissions().subscribe(permissions => {
      this.listPermissions = permissions;
    }, error => {

    });

  }

  toggleFormUpdatePermission(event, permission: Permission) {
    this.isShowFormUpdatePermission = !this.isShowFormUpdatePermission;
    this.permissionToEdit = permission;
  }

  createPermission(permission: Permission) {
    this.adminService.createPermission(permission)
      .then(res => {
        debugger;
      }, error => {
        debugger;
      });
    }

  updatePermission(permission: Permission) {
    this.adminService.updatePermission(permission)
      .then(res => {
        debugger;
      }, error => {
        debugger;
      });
  }
}
