export class Experiencia {
    id? : number;
    logo: string;
    cargo: string;
    empresa: string;
    fechaInicio : string;
    fechaFin : string;
    esTrabajoActual : boolean;
    descripcion : string;
    usuarioId: number;

    constructor(logo: string, cargo: string, empresa: string, fechaInicio: string,
        fechaFin: string, esTrabajoActual: boolean, descripcion: string, usuarioId: number){
            this.logo=logo;
            this.cargo=cargo;
            this.empresa=empresa;
            this.fechaInicio=fechaInicio;
            if(esTrabajoActual == true){
                this.esTrabajoActual = true;
                this.fechaFin=null;
            } else{
                this.esTrabajoActual =false;
                this.fechaFin=fechaFin;
            }
            this.descripcion=descripcion;
            this.usuarioId=usuarioId;
        }
}
