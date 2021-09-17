import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'create-event',
    template: `
        <h3>[Create New Event Here]</h3>
        <button class="btn btn-primary m-2">Save</button>
        <button class="btn btn-danger" (click)="cancel()">Cancel</button>
    `,
})
export class CreateEventComponent {
    isDirty:boolean = true
    constructor(private router: Router){}
    cancel() {
        this.router.navigate(['/events'])
    }
}