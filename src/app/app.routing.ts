import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component'

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
  }
];

