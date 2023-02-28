export class PersonaHabilidad {
    id? : number;
    habilidad : string;
    porcentajeId : number;
    usuarioId : number;

    constructor(habilidad: string, porcentajeId: number,
        usuarioId : number){
            this.habilidad=habilidad;
            this.porcentajeId=porcentajeId;
            this.usuarioId=usuarioId;
    }
}
