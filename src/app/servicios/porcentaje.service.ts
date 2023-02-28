import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Porcentaje } from '../model/porcentaje';

@Injectable({
    providedIn: 'root'
  })
  
export class PorcentajeService {

    expURL = 'http://localhost:8080/porcentaje/'

    constructor(private httpClient: HttpClient) { }

    public list(): Observable<Porcentaje[]>{
        return this.httpClient.get<Porcentaje[]>(this.expURL+'list');
      }
}
