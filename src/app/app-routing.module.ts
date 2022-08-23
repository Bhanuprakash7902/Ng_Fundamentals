import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventsListResolver } from './events/events-list-resolver.service';
import { EventRouteActivator } from './events/Event-details/event-route-activator.service';
import { EventDetailsComponent } from './events/Event-details/event-details.component';
import { UserModule } from './events/user/user.module';
import { EventsResolver } from './events/event-resolver.service';

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent,canDeactivate:['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events:EventsListResolver} },
  { path: 'events/:id', component: EventDetailsComponent,resolve: {event:EventsResolver}},
  { path: 'events/:id', component: EventDetailsComponent,canActivate:[EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full'},

  {
  path: 'user', 
  loadChildren: () => import('./events/user/user.module')
    .then(m => m.UserModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule{}
