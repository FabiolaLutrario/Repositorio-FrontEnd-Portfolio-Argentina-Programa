import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banner: string="";

  constructor(private router: Router, private usuarioService: UsuarioService, 
    private tokenService: TokenService) { }

  isLogged=false;

  ngOnInit(): void {
        this.cargarBanner();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

    cargarBanner(): void{
    this.usuarioService.getUsuario().subscribe(
      data => {this.banner=data.banner;})
  }
}
