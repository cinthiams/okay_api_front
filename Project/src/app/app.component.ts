import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
  <app-page></app-page>
  <router-outlet></router-outlet>`
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
      console.log('entrou')
  }
  
}
