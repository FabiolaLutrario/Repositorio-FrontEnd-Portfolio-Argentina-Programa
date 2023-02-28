import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { TokenService } from 'src/app/servicios/token.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  // usuario:Usuario = new Usuario("","","","","","","",[],[],[],[]);
  usuario: Usuario=null;

  constructor(public usuarioService: UsuarioService, private tokenService: TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.cargarDatosUsuario();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarDatosUsuario(){
    this.usuarioService.getUsuario().subscribe(data =>{
      this.usuario=data;
    })
  }

}
