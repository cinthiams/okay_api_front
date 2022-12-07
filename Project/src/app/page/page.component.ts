import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  info!: any;

  public lista: String = 'e';

  constructor( private service:ServiceService) {}
 
  
  ngOnInit(): void {
    console.log('entrouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')

  
    

  }
  getOKay(){
    console.log('entrouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
    this.service.getAll().subscribe((data) =>(this.info = data));
  }
  
 


}
