export class Proyecto {
    id? : number;
    logo: string;
    nombre: string;
    fechaRealizacion : string;
    descripcion : string;
    link : string;
    imagen : string;
    usuarioId: number;

    constructor(logo: string, nombre: string, fechaRealizacion: string,
        descripcion: string, link: string, imagen: string, usuarioId: number){
            this.logo=logo;
            this.nombre=nombre;
            this.fechaRealizacion=fechaRealizacion;
            this.descripcion=descripcion;
            this.link=link;
            this.imagen=imagen;
            this.usuarioId=usuarioId;
        }
}
