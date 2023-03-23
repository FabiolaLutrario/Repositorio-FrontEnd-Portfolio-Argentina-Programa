import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  // URL='https://backendportfolio-fabiolalutrario.koyeb.app/auth/'
  URL = 'http://localhost:8080/auth/'

  constructor(private http:HttpClient, private authService: AuthService, 
    private tokenService: TokenService) { }

  public getUsuario():Observable<Usuario>{
    // userId trae el usuario activo(logeado) desde authService
    // y en caso que no esté logeado muestra el usuario por defecto,
    // es decir el usuario 1.
    var userId = this.authService.usuarioAuth.userId;
    if(!this.tokenService.getToken()){
      userId=1;
    }
    return this.http.get<Usuario>(this.URL+'traer/perfil/'+`${parseInt(userId)}`);
  }

  public updateBanner (banner: string): Observable<any>{
    const userId = this.authService.usuarioAuth.userId;
    return this.http.put<any>(this.URL + 'editarBanner/userId/'+`${parseInt(userId)}`, banner);
  }

  public updateNombreYApellido (usuario: Usuario): Observable<any>{
    const userId = this.authService.usuarioAuth.userId;
    return this.http.put<any>(this.URL + 'editarNombreYApellido/userId/'+`${parseInt(userId)}`, usuario);
  }

  public updateTitulo (usuario: Usuario): Observable<any>{
    const userId = this.authService.usuarioAuth.userId;
    return this.http.put<any>(this.URL + 'editarTitulo/userId/'+`${parseInt(userId)}`, usuario);
  }

  public updateFoto (foto: string): Observable<any>{
    const userId = this.authService.usuarioAuth.userId;
    return this.http.put<any>(this.URL + 'editarFoto/userId/'+`${parseInt(userId)}`, foto);
  }
}
