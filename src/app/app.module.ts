import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'materialize-css';
import 'angular2-materialize';
import { MaterializeDirective } from 'angular2-materialize';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InviteeComponent } from './invitee/invitee.component';
import { AdminComponent } from './admin/admin.component';
import { EmailService, SessionStorageService } from './shared';
import { AuthRedirectComponent } from './auth-redirect/auth-redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterializeDirective,
    HomeComponent,
    InviteeComponent,
    AdminComponent,
    AuthRedirectComponent
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
    SessionStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
