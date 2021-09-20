import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  currentUser
  constructor (private router: Router) {}

  loginUser(userName: string, password: string){
    this.currentUser = {
      id: 1,
      userName: 'Chukwudi',
      password: 'eze'
    }

    return this.router.navigate(['/events'])
  }

  isAuthenticated () {
    return !!this.currentUser
  }

  cancelAuth () {
    return this.router.navigate(['/events'])
  }

  updateUser (username) {
    this.currentUser = {
      ...this.currentUser,
      userName: username
    }
  }
}
