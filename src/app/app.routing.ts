import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InviteeComponent } from './invitee/invitee.component';
import { AdminComponent } from './admin/admin.component';
import { AuthRedirectComponent } from './auth-redirect/auth-redirect.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'invitee', component: InviteeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'authredirect', component: AuthRedirectComponent },
  { path: '**', redirectTo: 'home' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
