import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
//import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


import { UsersFormComponent } from './components/users-form/users-form.component';

import { UsersListComponent } from './components/users-list/users-list.component';
import { AdminsListComponent } from './components/admins-list/admins-list.component'; 
import { DepotsListComponent } from './components/depots-list/depots-list.component';
import { RequestsListComponent } from './components/requests-list/requests-list.component';


import { NavbarComponent } from './components/navbar/navbar.component';
import { DronesListComponent } from './components/drones-list/drones-list.component';
import { LoginComponent } from './components/login/login.component';
import { AdminsFormComponent } from './components/admins-form/admins-form.component';
import { DepotsFormComponent } from './components/depots-form/depots-form.component';
import { DronesFormComponent } from './components/drones-form/drones-form.component';
import { RequestsFormComponent } from './components/requests-form/requests-form.component';





@NgModule({
  declarations: [
    AppComponent,
    
    UsersListComponent,
    AdminsListComponent,
    DepotsListComponent,
    RequestsListComponent,
    DronesListComponent,

    UsersFormComponent,
    AdminsFormComponent,

    NavbarComponent,
     LoginComponent,
     AdminsFormComponent,
     DepotsFormComponent,
     DronesFormComponent,
     RequestsFormComponent,

  ],
  imports: [
    BrowserModule,

    AppRoutingModule,   

    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
