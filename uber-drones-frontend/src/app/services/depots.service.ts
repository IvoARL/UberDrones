import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';
import { Depot } from '../interfaces/Depot';

@Injectable({
  providedIn: 'root'
})
export class DepotsService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getDepots():Observable< Depot[]> {
    return this.http.get<Depot[]>(`${this.BASE_URL}/depots`);
  }
  getDepot(id: string):Observable<Depot>{
    return this.http.get<Depot>(`${this.BASE_URL}/depots/${id}`);
  }
  createDepots(depot: Depot): Observable<Depot> {
    return this.http.post<Depot>(`${this.BASE_URL}/depots`, depot)
  }
  updateDepots(id: string, depot: Depot):Observable<Depot> {
    return this.http.put<Depot>(`${this.BASE_URL}/depots/${id}`, depot);
  }
}
