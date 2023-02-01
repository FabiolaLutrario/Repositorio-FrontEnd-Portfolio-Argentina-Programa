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

  URL='http://localhost:8080/auth/'

  constructor(private http:HttpClient, private authService: AuthService) { }

  //Esta clase va en concordancia con Auth Service
  public getUsuario():Observable<Usuario>{
    const userId = this.authService.usuarioAuth.userId;

    return this.http.get<Usuario>(this.URL+'traer/perfil/'+`${parseInt(userId)}`);
  }
}
