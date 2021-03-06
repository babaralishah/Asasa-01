import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ForgetpassverifyComponent } from './forgetpassverify/forgetpassverify.component';
import { NewpassComponent } from './newpass/newpass.component';
import { SignupotpComponent } from './signupotp/signupotp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { InventoryComponent } from './dashboard/inventory/inventory.component';
import { UsersComponent } from './dashboard/users/users.component';
import { LeadsComponent } from './dashboard/leads/leads.component';
import { InactiveComponent } from './dashboard/inactive/inactive.component';
import { OptionsComponent } from './dashboard/options/options.component';
import { AddUsersComponent } from './dashboard/users/add-users/add-users.component';
import { AddLeadsComponent } from './dashboard/leads/add-leads/add-leads.component';
import { AddInventoriesComponent } from './dashboard/inventory/add-inventories/add-inventories.component';
import { RedirectLoginGuard } from './services/redirectlogin.guard';
import { IsLoginGuard } from './services/islogin.guard';

const routes: Routes = [
  {
    path: 'map',
    canActivate: [IsLoginGuard], component: MapComponent
  },
  {
    path: '',
    canActivate: [RedirectLoginGuard],
    component: LoginComponent
  },
  {
    path: 'signup-component',
    canActivate: [RedirectLoginGuard], component: SignupComponent
  },
  { path: 'forgetpass-component', component: ForgetpassComponent },
  { path: 'forgetpassverify-component/:email', component: ForgetpassverifyComponent },
  { path: 'newpass-component/:email', component: NewpassComponent },
  { path: 'signupotp-component/:email', component: SignupotpComponent },
  {
    path: 'dashboard',
    canActivate: [IsLoginGuard],
    component: DashboardComponent
  },
  {
    path: 'navbar',
    canActivate: [IsLoginGuard], component: DashboardComponent
  },
  {
    path: 'profile/:email',
    canActivate: [IsLoginGuard], component: ProfileComponent
  },
  {
    path: 'profile',
    canActivate: [IsLoginGuard],
     component: ProfileComponent
  },
  {
    path: 'inventory',
    canActivate: [IsLoginGuard], component: InventoryComponent
  },
  {
    path: 'users',
    canActivate: [IsLoginGuard], component: UsersComponent
  },
  {
    path: 'leads',
    canActivate: [IsLoginGuard], component: LeadsComponent
  },
  {
    path: 'inactive',
    canActivate: [IsLoginGuard], component: InactiveComponent
  },
  {
    path: 'options',
    canActivate: [IsLoginGuard], component: OptionsComponent
  },
  {
    path: 'add-users',
    canActivate: [IsLoginGuard], component: AddUsersComponent
  },
  {
    path: 'add-leads',
    canActivate: [IsLoginGuard], component: AddLeadsComponent
  },
  {
    path: 'add-inventories',
    canActivate: [IsLoginGuard], component: AddInventoriesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
