import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-banner-dashboard',
  templateUrl: './banner-dashboard.component.html',
  styleUrls: ['./banner-dashboard.component.css']
})
export class BannerDashboardComponent implements OnInit {
  miBanner:any;

  constructor(private datosPortfolio:PortfolioService) { 
    
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miBanner=data;
    })

  }

}
