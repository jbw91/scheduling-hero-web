import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InviteeComponent } from './invitee/invitee.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'invitee', component: InviteeComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: 'home' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
