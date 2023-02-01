import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { NuevoUsuario } from '../model/nuevo-usuario';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';
  currentUserSubject: BehaviorSubject<any>;

  constructor(private httpClient: HttpClient) { 
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
  }

  public nuevo (nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

   public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    var httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      }),
    }
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario, httpOptions).pipe(map(data =>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      //sessionStorage.setItem('currentUser', JSON.stringify(data.userID));
      //para que me tariga sólo el id en vez del objeto completo
      //y  no tendría que hacer el mapero, sólo el data.
      this.currentUserSubject.next(data);
      return data;
    }));
  } 

  get usuarioAuth(){
    return this.currentUserSubject.value;
  }
}
