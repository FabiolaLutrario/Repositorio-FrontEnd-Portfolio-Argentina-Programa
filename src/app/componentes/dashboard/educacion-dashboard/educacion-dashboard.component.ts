import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion-dashboard',
  templateUrl: './educacion-dashboard.component.html',
  styleUrls: ['./educacion-dashboard.component.css']
})
export class EducacionDashboardComponent implements OnInit {
  estudios:any=[];

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.estudios=data.educacion;
    })

  }

}
