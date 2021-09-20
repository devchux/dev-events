import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component ({
    templateUrl: './login.component.html',
    styles: [`
        em { color: red; font-size: 12px }
    `]
})
export class LoginComponent {
    userName: string;
    password: string;
    isEmpty: boolean;

    constructor (private auth: AuthService) {}

    login(loginValues) {
        return this.auth.loginUser(loginValues.userName, loginValues.password)
    }

    cancelLogin () {
        return this.auth.cancelAuth()
    }
}