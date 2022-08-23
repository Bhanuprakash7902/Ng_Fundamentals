
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/Event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventRouteActivator } from './events/Event-details/event-route-activator.service';
import { Error404Component } from './errors/404.component';
import { EventsListResolver } from './events/events-list-resolver.service';
import { DurationPipe } from './events/shared/durationpipe';
import { SessionListComponent } from './events/Event-details/session.component';
import { AuthService } from './events/user/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { EventsResolver } from './events/event-resolver.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    SessionListComponent,
    DurationPipe
    
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [EventService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    EventsResolver,
    
    
    
  
         {
          provide: 'canDeactivateCreateEvent',
          useValue: checkDirtyState
  
      }
    
    ],
  
    bootstrap: [AppComponent]
  })
  
  
  export class AppModule { }
  
   function checkDirtyState(component:CreateEventComponent) {
    if (component.isDirty)
      return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
  }