export class Educacion {
    id? : number;
    logo: string;
    titulo: string;
    centroEducativo: string;
    fechaInicio : string;
    fechaFin : string;
    seEncuentraCursando : boolean;
    descripcion : string;
    usuarioId: number;

    constructor(logo: string, titulo: string, centroEducativo: string, fechaInicio: string,
        fechaFin: string, seEncuentraCursando: boolean, descripcion: string, usuarioId: number){
            this.logo=logo;
            this.titulo=titulo;
            this.centroEducativo=centroEducativo;
            this.fechaInicio=fechaInicio;
            if(seEncuentraCursando == true){
                this.seEncuentraCursando = true;
                this.fechaFin=null;
            } else{
                this.seEncuentraCursando =false;
                this.fechaFin=fechaFin;
            }
            this.descripcion=descripcion;
            this.usuarioId=usuarioId;
        }
}
