import { getLocaleDateTimeFormat } from "@angular/common";

export class Experiencia {
    id? : number;
    logo: string;
    cargo: string;
    empresa: string;

    // ver esta parte de las fechas
    fechaInicio : string;
    fechaFin : string;

    esTrabajoActual : boolean;
    descripcion : string;

    constructor(logo: string, cargo: string, empresa: string, fechaInicio: string,
        fechaFin: string, esTrabajoActual: boolean, descripcion: string){
            this.logo=logo;
            this.cargo=cargo;
            this.empresa=empresa;
            this.fechaInicio=fechaInicio;
            this.fechaFin=fechaFin;
            this.esTrabajoActual=esTrabajoActual;
            this.descripcion=descripcion;
        }
}
