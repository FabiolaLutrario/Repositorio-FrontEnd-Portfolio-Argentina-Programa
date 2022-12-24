export class persona{
    id?:String;
    nombre: String;
    apellido: String;
    titulo:String;

    //El signo de interrogación después del nombre de la varibale
    //indica que no es necesario ese campo
    sobreMi?:String;
    foto?: String;

    constructor(id: String, nombre:String, apellido:String,
        titulo:String, sobreMi:String, foto:String){
            this.id=id;
            this.nombre=nombre;
            this.apellido=apellido;
            this.titulo=titulo;
            this.sobreMi=sobreMi;
            this.foto=foto;
        }

}