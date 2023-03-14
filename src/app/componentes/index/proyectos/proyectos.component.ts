import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
  proyectos:Proyecto[]=[];

  constructor(private router: Router, private proyectoService: ProyectoService, 
    private usuarioService: UsuarioService, private tokenService: TokenService) { }

    isLogged=false;

    ngOnInit(): void {
      this.cargarProyecto();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    }

    cargarProyecto(): void{
      this.usuarioService.getUsuario().subscribe(
        data => {this.proyectos=data.proyectos;
        })
    } 

    delete(id?: number){
      if(id != undefined){
        this.proyectoService.delete(id).subscribe(
          data => {
            this.cargarProyecto();
          }, err =>{
            alert("No se pudo borrar el proyecto.");
          }
        )
      }
    }
}
