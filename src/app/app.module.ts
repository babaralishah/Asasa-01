// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
// import {MaterialModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ForgetpassverifyComponent } from './forgetpassverify/forgetpassverify.component';
import { NewpassComponent } from './newpass/newpass.component';
import { LoginComponent } from './login/login.component';
import { SignupotpComponent } from './signupotp/signupotp.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { InventoryComponent } from './dashboard/inventory/inventory.component';
import { UsersComponent } from './dashboard/users/users.component';
import { LeadsComponent } from './dashboard/leads/leads.component';
import { TableFilterPipe } from './Pipes/table-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TableFilter02Pipe } from './Pipes/table-filter02.pipe';
import { TableFilter03Pipe } from './Pipes/table-filter03.pipe';
import { TableFilter04Pipe } from './Pipes/table-filter04.pipe';
import { TableFilter05Pipe } from './Pipes/table-filter05.pipe';
import { TableFilter06Pipe } from './Pipes/table-filter06.pipe';
import { InactiveComponent } from './dashboard/inactive/inactive.component';

// import { HighlightDirective } from './directives/highlight.directive';
// import { FilterPipe } from './pipes/filter.pipe';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    SignupComponent,
    ForgetpassComponent,
    ForgetpassverifyComponent,
    NewpassComponent,
    SignupotpComponent,
    DashboardComponent,
    ProfileComponent,
    InventoryComponent,
    UsersComponent,
    LeadsComponent,
    // FilterPipe,
    // HighlightDirective
    TableFilterPipe,
    TableFilter02Pipe,
    TableFilter03Pipe,
    TableFilter04Pipe,
    TableFilter05Pipe,
    TableFilter06Pipe,
    InactiveComponent
  ],
  imports: [
    HttpClientModule,
    // MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    Ng2SearchPipeModule
    // MaterialModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
