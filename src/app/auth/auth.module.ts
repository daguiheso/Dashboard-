import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthComponent } from './auth.component';
import { AuthService } from "./auth.service";

import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routing';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AuthRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  declarations: [
    AuthComponent,
    SignupComponent,
    SigninComponent
  ],
  providers: [
    AuthService
  ]
})

export class AuthModule { }
