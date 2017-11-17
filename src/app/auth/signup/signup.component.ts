import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Profile {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  password?: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  user: any = {};

  profilesCollection: AngularFirestoreCollection<Profile>;
  profiles: Observable<Profile[]>;

  constructor(private authService: AuthService, private afs: AngularFirestore) {
    this.profilesCollection = afs.collection<Profile>('profiles'); // reference
    this.profiles = this.profilesCollection.valueChanges(); // observable of notes data
  }

  ngOnInit() {
  }

  onSubmit(user: Profile) {
    this.user.role = null;
    this.authService.signIn(this.user).then(
      res => {
        this.profilesCollection.add(user)
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

