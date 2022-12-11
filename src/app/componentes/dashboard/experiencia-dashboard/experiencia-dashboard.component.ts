import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia-dashboard',
  templateUrl: './experiencia-dashboard.component.html',
  styleUrls: ['./experiencia-dashboard.component.css']
})

export class ExperienciaDashboardComponent implements OnInit {
  experiencias:any=[];

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.experiencias=data.experiencia;
    })

  }

}
