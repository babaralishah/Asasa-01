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

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'signup-component', component: SignupComponent },
  { path: 'forgetpass-component', component: ForgetpassComponent },
  { path: 'forgetpassverify-component/:email', component: ForgetpassverifyComponent },
  { path: 'newpass-component/:email', component: NewpassComponent },
  { path: 'signupotp-component/:email', component: SignupotpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile/:email', component: ProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'users', component: UsersComponent },
  { path: 'leads', component: LeadsComponent },
  { path: 'inactive', component: InactiveComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'add-users', component: AddUsersComponent },
  { path: 'add-leads', component: AddLeadsComponent },
  { path: 'add-inventories', component: AddInventoriesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
