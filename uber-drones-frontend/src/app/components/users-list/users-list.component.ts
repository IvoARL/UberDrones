import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';

import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users : User[]=[];

    users$: Observable<any> | undefined;


  constructor(private usersService: UsersService) { }

  ngOnInit(): void { 
     this.users$=this.usersService.getUsers();
     this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers()
    .subscribe(res => this.users)
  }

  
    
  }



