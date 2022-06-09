import { Component, OnInit } from '@angular/core';

import { DepotsService } from 'src/app/services/depots.service'; 

import { Observable } from 'rxjs';

@Component({
  selector: 'app-depots-list',
  templateUrl: './depots-list.component.html',
  styleUrls: ['./depots-list.component.css']
})
export class DepotsListComponent implements OnInit {

   depots$: Observable<any> | undefined;

  constructor(private depotsService: DepotsService) { }

  ngOnInit(): void {
    this.depots$=this.depotsService.getDepots();
  }

}
