import { Component, OnInit } from '@angular/core';

import { Admin } from 'src/app/interfaces/Admin';
import { AdminsService } from 'src/app/services/admins.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admins-form',
  templateUrl: './admins-form.component.html',
  styleUrls: ['./admins-form.component.css']
})
export class AdminsFormComponent implements OnInit {

  admin: Admin = {

    AdmiName: '',
    email: '',
    armazem: ''

  };

  id: string;
  
  
  constructor(
    private adminsService: AdminsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const param = this.activatedRoute.snapshot.params
      console.log(param)
    if (!param){
      return;
    }
    this.id = param['id'];
    if (!this.id){
      return;
    }
    this.adminsService.getAdmin(this.id)
    .subscribe(admin => this.admin=admin)

  }

  submitAdmin() {
    if (this.id){
      this.adminsService.updateAdmins(this.id, this.admin)
      .subscribe(res => alert('Admin updated!'));
      return;
    }

    this.adminsService.createAdmins(this.admin)
      .subscribe(res => alert('Admin created!'));
    
   }




}
