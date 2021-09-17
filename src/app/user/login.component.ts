import { Component } from "@angular/core";

@Component ({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    userName
    password

    login(loginValues) {
        console.log(loginValues)
    }
}