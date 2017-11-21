import { Routes } from '@angular/router';

import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from "./permissions/permissions.component";

export const AuthRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'roles',
				component: RolesComponent
			},
			{
				path: 'permissions',
				component: PermissionsComponent
			}
		]
	}
];

