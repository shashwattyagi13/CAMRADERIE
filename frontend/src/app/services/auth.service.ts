import { TokenStorageService } from './token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any;

  constructor(private http: HttpClient, private token: TokenStorageService) { 
    
  }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'authenticate', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      password: user.password
    }, httpOptions);
  }
}
