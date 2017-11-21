import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';

export const AppRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'auth',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      }
    ]
  }
];

