import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  URL='http://localhost:8080/auth/'

  constructor(private http:HttpClient, private authService: AuthService) { }

  public getUsuario():Observable<Usuario>{
    // userId trae el usuario activo(logeado) desde authService
    const userId = this.authService.usuarioAuth.userId;
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
