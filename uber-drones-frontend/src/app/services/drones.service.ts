import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';
import { Drone } from '../interfaces/Drone'; 

@Injectable({
  providedIn: 'root'
})
export class DronesService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getDrones():Observable< Drone[]> {
    return this.http.get<Drone[]>(`${this.BASE_URL}/drones`);
  }
  getDrone(id: string):Observable<Drone>{
    return this.http.get<Drone>(`${this.BASE_URL}/drones/${id}`);
  }
  createDrones(drone: Drone): Observable<Drone> {
    return this.http.post<Drone>(`${this.BASE_URL}/drones/`, drone)
  }
  updateDrones(id: string, drone: Drone):Observable<Drone> {
    return this.http.put<Drone>(`${this.BASE_URL}/drones/u${id}`, drone);
  }
}
