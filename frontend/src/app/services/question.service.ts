import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/findall`);
  }

  create(data): Observable<any> {
    return this.http.post(`${baseUrl}/create`, data);
    //return this.authService.updateQuestion(fetchedData);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/find/${id}`);
  }
  
  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/deleteall`);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}/findall?title=${title}`);
  }

}
