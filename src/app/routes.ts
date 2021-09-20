import { Routes } from '@angular/router';

import {
  EventsListComponent,
  CreateEventComponent,
  EventListResolver,
} from './events/index';
import {
  EventDetailsComponent,
  ErrorRouteActivator,
  CreateSessionComponent,
} from './events/event-details/index';
import { Error404Component } from './errors/404.component';
import {} from './user/user.module';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent,
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [ErrorRouteActivator],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
];
