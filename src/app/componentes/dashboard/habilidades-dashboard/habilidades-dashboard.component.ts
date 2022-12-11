import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades-dashboard',
  templateUrl: './habilidades-dashboard.component.html',
  styleUrls: ['./habilidades-dashboard.component.css']
})

export class HabilidadesDashboardComponent implements OnInit {
  habilidades:any=[];

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.habilidades=data.habilidades;
    })
  }

}
