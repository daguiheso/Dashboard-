import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from "./permissions/permissions.component";

const adminRoutes: Routes = [
	{
		path: '',
		component: AdminComponent,
		children: [
			{
				path: '',
				children: [
					{ path: 'roles', component: RolesComponent },
					{ path: 'permissions', component: PermissionsComponent },
				]
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(adminRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AdminRoutingModule { }
