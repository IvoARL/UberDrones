import { Component, OnInit } from '@angular/core';

import { Request } from 'src/app/interfaces/Request';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-requests-form',
  templateUrl: './requests-form.component.html',
  styleUrls: ['./requests-form.component.css']
})
export class RequestsFormComponent implements OnInit {

  request: Request = {
    user: '', 
    drone_id: '',
    armazem: '',
    status: true,
  };

  constructor(
    private requestsService: RequestsService
  ) { }

  ngOnInit(): void {
  }
  submitRequest() {
    this.requestsService.createRequests(this.request)
      .subscribe(res=>console.log(res))    
   }
  
}
