import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modal-editar-educacion',
  templateUrl: './modal-editar-educacion.component.html',
  styleUrls: ['./modal-editar-educacion.component.css']
})
export class ModalEditarEducacionComponent implements OnInit {
  estudios:any=[];

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.estudios=data.educacion;
    })

  }

}
