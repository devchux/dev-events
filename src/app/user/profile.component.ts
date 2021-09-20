import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
      em { color: red; font-size: 12px }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  userName: FormControl
  constructor (private auth: AuthService, private router: Router) {}

  ngOnInit () {
    this.userName = new FormControl(this.auth.currentUser.userName, Validators.required)

    this.profileForm = new FormGroup({ userName: this.userName })
  }
  updateProfile (username) {
    return this.auth.updateUser(username)
  }

  cancel () {
    return this.auth.cancelAuth()
  }
}
