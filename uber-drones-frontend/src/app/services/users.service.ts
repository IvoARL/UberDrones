import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';
import { User } from '../interfaces/User';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers():Observable< User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/users`);
  }
  getUser(id: string):Observable<User>{
    return this.http.get<User>(`${this.BASE_URL}/users/${id}`);
  }
  createUsers(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/users`, user);
  }
  updateUsers(id: string, user: User):Observable<User> {
    return this.http.put<User>(`${this.BASE_URL}/user/update?userID=${id}`, user);
  }
  
}
