import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';
import { Request } from '../interfaces/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getRequests():Observable< Request[]> {
    return this.http.get<Request[]>(`${this.BASE_URL}/requests`);
  }
  getRequest(id: string):Observable<Request>{
    return this.http.get<Request>(`${this.BASE_URL}/requests/${id}`);
  }
  createRequests(request: Request): Observable<Request> {
    return this.http.post<Request>(`${this.BASE_URL}/requests`, request)
  }
  updateRequests(id: string, request: Request):Observable<Request> {
    return this.http.put<Request>(`${this.BASE_URL}/requests/${id}`, request);
  }
}
