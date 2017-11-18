import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Profile } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  user: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  onSubmit(user: Profile) {
    this.user.role = null;
    this.authService.signIn(this.user).then(
      res => {
        debugger;
        user.userId = res.uid;
        this.authService.createUser(user)
          .then(res => {
            // debugger;
          },
          error => {
            // debugger;
          });
      },
      error => {
        // debugger;
      }
    );
  }
}

