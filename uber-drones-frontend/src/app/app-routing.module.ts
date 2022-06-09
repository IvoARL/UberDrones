import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersFormComponent } from './components/users-form/users-form.component'; 
import { AdminsListComponent } from './components/admins-list/admins-list.component';
import { AdminsFormComponent } from './components/admins-form/admins-form.component';
import { DepotsListComponent } from './components/depots-list/depots-list.component';
import { RequestsListComponent } from './components/requests-list/requests-list.component';
import { DronesListComponent } from './components/drones-list/drones-list.component';
import { LoginComponent } from './components/login/login.component';
import { DepotsFormComponent } from './components/depots-form/depots-form.component';
import { DronesFormComponent } from './components/drones-form/drones-form.component';
import { RequestsFormComponent } from './components/requests-form/requests-form.component';




const routes: Routes = [


  {
    path: '',
    component: LoginComponent
    //component:UsersFormComponent
  },

  
  {
    path: 'admins',
    component:AdminsListComponent
  },
  {
    path: 'users',
    component:UsersListComponent
  },
  {
    path: 'depots',
    component:DepotsListComponent
  },
    {
    path: 'drones',
    component:DronesListComponent
  },
  {
    path: 'requests',
    component:RequestsListComponent
  },

  {
    path: 'admins/create',
    component:AdminsFormComponent
  },
  {
    path: 'users/create',
    component:UsersFormComponent
  },
  {
    path: 'depots/create',
    component:DepotsFormComponent
  },
  {
    path: 'drones/create',
    component:DronesFormComponent
  },
  {
    path: 'requests/create',
    component:RequestsFormComponent
  },

  {
    path: 'admins/update/:id',
    component:AdminsFormComponent
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
