import { Experiencia } from "./experiencia.model";
import { Educacion } from "./educacion.model";
import { PersonaHabilidad } from "./persona-habilidad";
import { PersonaIdioma } from "./persona-idioma";
import { Proyecto } from "./proyecto";

export class Usuario {

    id?:string;
    nombre: string;
    apellido: string;
    titulo:string;
    sobreMi?:string;
    foto?: string;
    banner?: string;
    experiencias?:Experiencia[];
    estudios?: Educacion[];
    personaHabilidades?: PersonaHabilidad[];
    personaIdiomas?: PersonaIdioma[];
    proyectos?: Proyecto[];
    //El signo de interrogación después del nombre de la varibale
    //indica que no es necesario ese campo

    constructor(id: string, nombre:string, apellido:string,
        titulo:string, sobreMi:string, foto:string, banner:string,
        experiencias:Experiencia[], estudios:Educacion[], personaHabilidades: PersonaHabilidad[],
        personaIdiomas: PersonaIdioma[], proyectos: Proyecto[]){
            this.id=id;
            this.nombre=nombre;
            this.apellido=apellido;
            this.titulo=titulo;
            this.sobreMi=sobreMi;
            this.foto=foto;
            this.banner=banner;
            this.experiencias=experiencias;
            this.estudios=estudios;
            this.personaHabilidades=personaHabilidades;
            this.personaIdiomas=personaIdiomas;
            this.proyectos=proyectos;
        }
}
