import { Component, OnInit } from '@angular/core';

import { DronesService } from 'src/app/services/drones.service'; 

import { Observable } from 'rxjs';

@Component({
  selector: 'app-drones-list',
  templateUrl: './drones-list.component.html',
  styleUrls: ['./drones-list.component.css']
})
export class DronesListComponent implements OnInit {

  drones$: Observable<any> | undefined;

  constructor(private dronesService: DronesService) { }

  ngOnInit(): void {
    this.drones$=this.dronesService.getDrones();
  }

}
