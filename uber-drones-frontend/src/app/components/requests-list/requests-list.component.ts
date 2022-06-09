import { Component, OnInit } from '@angular/core';

import { RequestsService } from 'src/app/services/requests.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit {

 requests$: Observable<any> | undefined;

 constructor(private requestsService: RequestsService) { }

 ngOnInit(): void {
  this.requests$=this.requestsService.getRequests();
}

}
