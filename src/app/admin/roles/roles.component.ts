import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Profile, Role, Permission } from '../../models/auth.models';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})

export class RolesComponent implements OnInit {

  role: any = {};


  constructor(private adminService: AdminService) { }

  ngOnInit() {
    
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

}
