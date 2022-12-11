import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos-dashboard',
  templateUrl: './proyectos-dashboard.component.html',
  styleUrls: ['./proyectos-dashboard.component.css']
})

export class ProyectosDashboardComponent implements OnInit {
  proyectos:any=[];

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.proyectos=data.proyectos;
    })
  }
}
