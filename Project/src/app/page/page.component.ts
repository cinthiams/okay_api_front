import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  palavra!: any;





  constructor(private Service: ServiceService) { }




  consulta() {
    this.Service.getAll().subscribe(resultado => this.palavra = resultado);
  }

  ngOnInit(): void {
    
  
  }

}
