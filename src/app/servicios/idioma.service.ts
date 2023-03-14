import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaIdioma } from '../model/persona-idioma'
import { Idioma } from '../model/idioma';

@Injectable({
    providedIn: 'root'
  })

export class IdiomaService {

    expURL = 'https://backendportfolio-fabiolalutrario.koyeb.app/idioma/'

    constructor(private httpClient: HttpClient) { }

    public list(): Observable<Idioma[]>{
        return this.httpClient.get<Idioma[]>(this.expURL+'list');
    }

    public detail(id:number): Observable<PersonaIdioma>{
        return this.httpClient.get<PersonaIdioma>(this.expURL + `detail/${id}`)
    }

    public save (personaIdioma: PersonaIdioma): Observable<any>{
        return this.httpClient.post<any>(this.expURL+ 'create', personaIdioma);
    }

    public update (id: number, personaIdioma: PersonaIdioma): Observable<any>{
        return this.httpClient.put<any>(this.expURL + `update/${id}`, personaIdioma);
    }
    
    public delete (id:number): Observable<any>{
        return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
    }
}
