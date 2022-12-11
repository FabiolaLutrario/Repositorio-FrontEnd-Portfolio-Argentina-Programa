import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-idiomas-dashboard',
  templateUrl: './idiomas-dashboard.component.html',
  styleUrls: ['./idiomas-dashboard.component.css']
})

export class IdiomasDashboardComponent implements OnInit {
  idiomas:any=[];

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.idiomas=data.idiomas;
    })
  }

}
