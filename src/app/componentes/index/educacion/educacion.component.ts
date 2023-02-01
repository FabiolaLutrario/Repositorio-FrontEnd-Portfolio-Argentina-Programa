import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  estudios:Educacion[]=[];

  constructor(private router: Router, private educacionService: EducacionService, 
    private usuarioService: UsuarioService, private tokenService: TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.educacionService.lista().subscribe(
      data => {this.estudios=data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.educacionService.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err =>{
          alert("No se pudo borrar la educación.");
        }
      )
    }
  }
}
