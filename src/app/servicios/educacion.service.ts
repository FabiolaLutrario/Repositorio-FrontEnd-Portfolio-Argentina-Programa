import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

    expURL = 'https://backendportfolio-fabiolalutrario.koyeb.app/educacion/'
    //expURL = 'http://localhost:8080/educacion/'

  constructor(private httpClient: HttpClient) { }

  public detail(id:number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.expURL + `detail/${id}`)
  }

  public save (educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.expURL+ 'create', educacion);
  }

  public update (id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, educacion);
  }

  public delete (id:number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
