import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'materialize-css';
import 'angular2-materialize';
import { MaterializeDirective } from 'angular2-materialize';
import { routing, appRoutingProviders } from './app.routing';

import { EmailService, SessionStorageService, EventService, UsersService } from './shared';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MiniCalendarComponent } from './mini-calendar/mini-calendar.component';
import { AuthRedirectComponent } from './auth-redirect/auth-redirect.component';
import { InviteeComponent, WeekViewComponent } from './invitee';

@NgModule({
  declarations: [
    MaterializeDirective,
    AppComponent,
    HomeComponent,
    InviteeComponent,
    AdminComponent,
    AuthRedirectComponent,
    WeekViewComponent,
    MiniCalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    EmailService,
    SessionStorageService,
    EventService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
