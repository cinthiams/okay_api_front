import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  private apiUrl = 'https://localhost:2222/ok'
  constructor( private http: HttpClient) { }
  
 
  response!:any;
  a!:any;
  getAll(): Observable<any[]>{
    //this.response = this.http.get<any[]>(`http://localhost:2222/api/ok`)
    //this.a = JSON.parse(JSON.stringify(this.response))
    //console.log(this.a.Produto,'----------------------------------------------')
    return this.http.get<any[]>(`http://localhost:2222/api/ok`)
 
  }

  
}
