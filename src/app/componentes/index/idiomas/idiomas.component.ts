import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaIdioma } from 'src/app/model/persona-idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';
import { TokenService } from 'src/app/servicios/token.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  idiomas:PersonaIdioma[]=[];

  constructor(private router: Router, private idiomaService: IdiomaService,
    private usuarioService: UsuarioService, private tokenService: TokenService) { }

    isLogged=false;

  ngOnInit(): void {
    this.cargarIdioma();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarIdioma(): void{
    this.usuarioService.getUsuario().subscribe(
      data => {this.idiomas=data.personaIdiomas;
      })
  }

  delete(id?: number){
    if(id != undefined){
      this.idiomaService.delete(id).subscribe(
        data => {
          this.cargarIdioma();
        }, err =>{
          alert("No se pudo borrar el idioma.");
        }
      )
    }
  }

}
