import { Component, OnInit } from '@angular/core';

import { AdminsService } from 'src/app/services/admins.service'; 

import { Observable } from 'rxjs';
import { Admin } from 'src/app/interfaces/Admin';

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css']
})
export class AdminsListComponent implements OnInit {

  admins : Admin[]=[];

  admins$: Observable<any> | undefined;

  constructor(private adminsService: AdminsService) { }

  ngOnInit(): void {
    this.admins$=this.adminsService.getAdmins();
    //this.admins$=this.adminsService.getAdmin();
  }

}
