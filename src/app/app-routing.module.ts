import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ForgetpassverifyComponent } from './forgetpassverify/forgetpassverify.component';
import { NewpassComponent } from './newpass/newpass.component';
import { SignupotpComponent } from './signupotp/signupotp.component';
const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'signup-component', component: SignupComponent },
  { path: 'forgetpass-component', component: ForgetpassComponent },
  { path: 'forgetpassverify-component/:email', component: ForgetpassverifyComponent },
  { path: 'newpass-component/:email', component: NewpassComponent },
  { path: 'signupotp-component/:email', component: SignupotpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
