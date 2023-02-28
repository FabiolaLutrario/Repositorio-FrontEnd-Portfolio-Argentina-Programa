import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  experiencias:Experiencia[]=[];

  constructor(private router: Router, private experienciaService: ExperienciaService, 
    private usuarioService: UsuarioService, private tokenService: TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

   cargarExperiencia(): void{
    this.usuarioService.getUsuario().subscribe(
      data => {this.experiencias=data.experiencias;
      })
  } 

  delete(id?: number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err =>{
          alert("No se pudo borrar la experiencia.");
        }
      )
    }
  }
}
