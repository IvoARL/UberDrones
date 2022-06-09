import { Component, OnInit } from '@angular/core';

import { Depot } from 'src/app/interfaces/Depot';
import { DepotsService } from 'src/app/services/depots.service'; 

@Component({
  selector: 'app-depots-form',
  templateUrl: './depots-form.component.html',
  styleUrls: ['./depots-form.component.css']
})
export class DepotsFormComponent implements OnInit {

  depot: Depot = {
    name: '',
    coordenada: 0,
  };

  constructor(
    private depotsService: DepotsService
  ) { }

  ngOnInit(): void {
  }

  submitDepot() {
    this.depotsService.createDepots(this.depot)
      .subscribe(res=>console.log(res))
   }

}
