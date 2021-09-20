import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'create-event',
    templateUrl: './create-event.component.html',
    styles: [`
        em { color: red;
            font-size: 12px; }
        .error {
            background-color: rgba(255,100,100,0.3);
            font-size: 12px;
        }
    `]
})
export class CreateEventComponent {
    newEvent
    isDirty:boolean = true
    constructor(private router: Router){}
    saveEvent (formData) {
        console.log(formData)
    }
    cancel () {
        this.router.navigate(['/events'])
    }
}