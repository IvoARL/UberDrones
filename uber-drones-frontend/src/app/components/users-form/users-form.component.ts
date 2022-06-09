import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { User } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {


  user: User = {
    username: '',
    email: '',
    coordenada: 0,
  };

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);
  }

  submitUser() {
    this.usersService.createUsers(this.user)
      .subscribe(res=>console.log(res))
    //console.log(this.user)
     
   }
    
   
  }


