import { Component, OnInit } from '@angular/core';


import { Drone } from 'src/app/interfaces/Drone';
import { DronesService } from 'src/app/services/drones.service';

@Component({
  selector: 'app-drones-form',
  templateUrl: './drones-form.component.html',
  styleUrls: ['./drones-form.component.css']
})
export class DronesFormComponent implements OnInit {

  drone: Drone = {
    armazem: '',
    speed: 0,
    coordenada: 0,
    status: true
  };

  constructor(
    private dronesService: DronesService
  ) { }

  ngOnInit(): void {
  }

  submitDrone() {
    this.dronesService.createDrones(this.drone)
      .subscribe(res=>console.log(res))
   }

}
