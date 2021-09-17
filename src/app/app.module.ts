import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {
  EventsListComponent,
  EventsThumbanilComponent,
  CreateEventComponent,
  EventListResolver,
} from './events/index';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/index';
import { appRoutes } from './routes';
import { EventDetailsComponent, ErrorRouteActivator } from './events/event-details/index';
import { Error404Component } from './errors/404.component';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbanilComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    NavbarComponent
  ],
  providers: [
    EventService,
    ErrorRouteActivator,
    EventListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return confirm(
      'You have not saved this page. Do you really want to cancel?'
    );
}
