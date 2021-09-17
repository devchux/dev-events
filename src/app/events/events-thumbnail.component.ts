import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  selector: 'events-thumbnail',
  template: `
    <div class="well hoverwell thumbnail p-3 m-1" [routerLink]="['/events', event.id]">
      <h2>{{ event?.name }}</h2>
      <div>Date: {{ event?.date }}</div>
      <div [ngSwitch]="event?.time" [ngClass]="addClass()">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early)</span>
        <span *ngSwitchCase="'10:00 am'">(Late)</span>
        <span *ngSwitchDefault>(Normal)</span>
      </div>
      <div>Price: \${{ event?.price }}</div>
      <div *ngIf="event?.location">
        <span>Location: {{ event?.location?.address }}</span>
        <span>&nbsp;</span>
        <span>{{ event?.location?.city }}, {{ event?.location?.country }}</span>
      </div>
      <div [hidden]="!event?.onlineUrl">
        <span>Online Url: {{ event?.onlineUrl }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .pink {
        color: pink;
      }
      .bold {
        font-weight: bold;
      }
      .thumbnail {
        min-height: 210px;
      }
    `,
  ],
})
export class EventsThumbanilComponent {
  @Input() event: IEvent;

  addClass() {
    const isEarly = this.event && this.event.time === '8:00 am';
    // return {
    //     pink: isEarly,
    //     bold: isEarly,
    // }

    if (isEarly) {
      return 'pink bold';
    }
    return '';

    // Similarly to ngClass, we can also use ngStyle to add style property if a statement is true
    /*
        addStyle() {
    const isEarly = this.event && this.event.time === '8:00 am';
    return {
        color: isEarly ? 'red': '',
        font-weight: isEarly ? 'bold': 'light',
    }
    
    */
  }
}
