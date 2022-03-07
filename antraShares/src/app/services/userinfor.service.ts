import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/userlist.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root',
})
export class UserinforService {
  private baseUrl = 'http://localhost:3000';
  private path = 'antraUsers';
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get([this.baseUrl, this.path].join('/')) as Observable<
      Users[]
    >;
  }
  deleteUser(user:Users){
    const url = `${this.baseUrl}/${this.path}/${user.id}`;
    return this.http.delete<Task>(url);
    // return this.http.delete([this.baseUrl, this.path, user.id]) as Observable<Users>
    // return this.http.delete([this.baseUrl,this.path].join('/'), user) as Observable<Users[]>;
  }
}
