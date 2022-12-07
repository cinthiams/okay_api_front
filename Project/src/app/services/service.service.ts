import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'https://localhost:2222/ok'
  constructor( private http: HttpClient) { }
  
  
  getAll(): Observable<any[]>{
    
    return this.http.get<any[]>(`http://localhost:2222/api/ok`)
    
    //this.http.get<any>('http://localhost:2222/api/ok').subscribe(data =>{
    //this.palavra = data;

  }
  
}
