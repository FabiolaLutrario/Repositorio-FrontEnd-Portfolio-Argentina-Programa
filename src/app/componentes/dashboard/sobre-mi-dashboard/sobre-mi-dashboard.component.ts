import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-sobre-mi-dashboard',
  templateUrl: './sobre-mi-dashboard.component.html',
  styleUrls: ['./sobre-mi-dashboard.component.css']
})
export class SobreMiDashboardComponent implements OnInit {
  sobreMi:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.sobreMi=data;
    })
  }

}
