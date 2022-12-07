import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'https://localhost:2222/ok'
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl)


  }
}
