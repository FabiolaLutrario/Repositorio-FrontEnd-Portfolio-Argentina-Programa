import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modal-editar-experiencia',
  templateUrl: './modal-editar-experiencia.component.html',
  styleUrls: ['./modal-editar-experiencia.component.css']
})

export class ModalEditarExperienciaComponent implements OnInit {
  experiencias:any=[];

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.experiencias=data.experiencia;
    })

  }

}
