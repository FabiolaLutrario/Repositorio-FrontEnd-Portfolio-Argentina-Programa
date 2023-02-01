import { Experiencia } from "./experiencia.model";

export class Usuario {

    id?:string;
    nombre: string;
    apellido: string;
    titulo:string;
    sobreMi?:string;
    foto?: string;
    banner?: string;
    //Acá falta agrgegar estudios, proyectos,etc.
    //experiencias:[]=[];
    experiencias?:Experiencia[];
    //El signo de interrogación después del nombre de la varibale
    //indica que no es necesario ese campo

    constructor(id: string, nombre:string, apellido:string,
        titulo:string, sobreMi:string, foto:string, banner:string,
        experiencias:Experiencia[]){
            this.id=id;
            this.nombre=nombre;
            this.apellido=apellido;
            this.titulo=titulo;
            this.sobreMi=sobreMi;
            this.foto=foto;
            this.banner=banner;
            this.experiencias=experiencias;
        }
}
