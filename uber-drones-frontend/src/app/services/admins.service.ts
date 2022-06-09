import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';
import { Admin } from '../interfaces/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAdmins():Observable< Admin[]> {
    return this.http.get<Admin[]>(`${this.BASE_URL}/admins`);
  }
  getAdmin(id: string):Observable<Admin>{
    return this.http.get<Admin>(`${this.BASE_URL}/admins/${id}`);
  }
  createAdmins(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.BASE_URL}/admins/`, admin)
  }
  updateAdmins(id: string, admin: Admin):Observable<Admin> {
    return this.http.put<Admin>(`${this.BASE_URL}/admins/${id}`, admin);
  }
  
}
