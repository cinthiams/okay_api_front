import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, observable, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  template:  `
  <app-page></app-page>
  <h1>{{ palavra }}<h1>
  <router-outlet></router-outlet>`
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  palavra!:any;
  public e = "teste"
  constructor( private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<any>('http://localhost:2222/api/ok').subscribe(data =>{
      this.palavra = data;
    })

  }
  
}
