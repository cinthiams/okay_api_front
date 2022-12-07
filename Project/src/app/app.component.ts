import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  template:  `
  <app-page></app-page>
  <br>
  <h1>{{ palavra | json }}<h1>
  <button (click)="consulta()">click aqui </button>
  <router-outlet></router-outlet>`
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  palavra!:any[];
  public e = "teste"
  constructor(private Service:ServiceService){}

  ngOnInit(): void {
 
  
  }
  consulta(){
    return this.Service.getAll().subscribe(resultado =>this.palavra = resultado);
  }
  
}
