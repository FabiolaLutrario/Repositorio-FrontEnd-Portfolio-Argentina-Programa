import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaHabilidad } from 'src/app/model/persona-habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {
  habilidades:PersonaHabilidad[]=[];

  constructor(private router: Router, private habilidadService: HabilidadService,
    private usuarioService: UsuarioService, private tokenService: TokenService) { }

    isLogged=false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void{
    this.usuarioService.getUsuario().subscribe(
      data => {this.habilidades=data.personaHabilidades;
      })
  }

  delete(id?: number){
    if(id != undefined){
      this.habilidadService.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err =>{
          alert("No se pudo borrar la habilidad.");
        }
      )
    }
  }
}
