import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaHabilidad } from '../model/persona-habilidad';

@Injectable({
    providedIn: 'root'
  })
export class HabilidadService {

    expURL = 'https://backendportfolio-fabiolalutrario.koyeb.app/habilidad/'

    constructor(private httpClient: HttpClient) { }

      public detail(id:number): Observable<PersonaHabilidad>{
        return this.httpClient.get<PersonaHabilidad>(this.expURL + `detail/${id}`)
      }

      public save (personaHabilidad: PersonaHabilidad): Observable<any>{
        return this.httpClient.post<any>(this.expURL+ 'create', personaHabilidad);
      }

      public update (id: number, personaHabilidad: PersonaHabilidad): Observable<any>{
        return this.httpClient.put<any>(this.expURL + `update/${id}`, personaHabilidad);
      }
    
      public delete (id:number): Observable<any>{
        return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
      }
}
