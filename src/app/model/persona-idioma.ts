export class PersonaIdioma {
    id? : number;
    idioma:string;
    idiomaId : number;
    porcentajeId : number;
    usuarioId : number;

    constructor(idiomaId: number, porcentajeId: number,
        usuarioId : number){
            this.idiomaId=idiomaId;
            this.porcentajeId=porcentajeId;
            this.usuarioId=usuarioId;
    }
}
