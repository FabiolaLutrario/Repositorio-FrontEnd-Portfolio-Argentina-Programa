export class NuevoUsuario {
    nombre!: string;
    apellido!: string;
    email!: string;
    password!: string;
    titulo!: string;
    roles!: string[];

    constructor(nombre:string, apellido:string, email:string, password: string, 
        titulo:string, roles:string[]){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.password=password;
        this.titulo=titulo;
        this.roles=roles;
    }
}
