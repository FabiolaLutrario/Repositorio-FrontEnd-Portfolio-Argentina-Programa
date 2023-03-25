import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {
  logo: string="";
  nombre: string ="";
  fechaRealizacion:string ="";
  descripcion:string="";
  link:string="";
  imagen:string="";
  usuarioId: number;
  form:FormGroup;
  imagenLogo: any []=[];
  imagenProyecto: any []=[];

  constructor(private proyectoService: ProyectoService, private router: Router,
    private formBuilder: FormBuilder, private authService:AuthService,
    public imagenService: ImagenService) { 
      this.form= this.formBuilder.group({
        logo:[''],
        nombre:['',[Validators.required]],
        fechaRealizacion:['', [Validators.required]],
        descripcion:[''],
        link:[''],
        imagen:[''],
     })
    }

  ngOnInit(): void {
  }

  onEnviar(event: Event){
    event.preventDefault; 
    if (this.form.valid){
      this.onCreate();
      // Llamamos a nuestro servicio para enviar los datos al servidor
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template    
      alert ("Falló al cargar los datos, intente nuevamente."); 
      this.form.markAllAsTouched(); 
    }
  }

  onCreate():void{

    var currentUserSubject=this.authService.usuarioAuth;
        /* Trae el Id del currentUserSubject y puedo obtener los datos del mismo. 
        Se hace la conversión a Int (parseInt) porque desde el sessionStorage viene en String */
    const proyecto = new Proyecto(this.logo, this.nombre, this.fechaRealizacion,
      this.descripcion, this.link, this.imagen, this.usuarioId=parseInt(currentUserSubject.userId));
      this.proyectoService.save(proyecto).subscribe(data=>{
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }
      )
    }

    uploadLogo($event:any){
      const id = this.authService.usuarioAuth.userId;
      const name = Date.now() + "logoProyectoPerfil_" + id;
      let archivo = $event.target.files
      let reader = new FileReader();
      reader.readAsDataURL(archivo[0]);
      reader.onloadend = () =>{
        console.log(reader.result);
        this.imagenLogo.push(reader.result);
        this.imagenService.uploadImage("proyecto", name, reader.result).then(urlImagen=>{
          this.logo=urlImagen;
        }
        );
      }
    }

    uploadImage($event:any){
      const id = this.authService.usuarioAuth.userId;
      const name = Date.now() + "imagenProyectoPerfil_" + id;
      let archivo = $event.target.files
      let reader = new FileReader();
      reader.readAsDataURL(archivo[0]);
      reader.onloadend = () =>{
        console.log(reader.result);
        this.imagenProyecto.push(reader.result);
        this.imagenService.uploadImage("proyecto", name, reader.result).then(urlImagen=>{
          this.imagen=urlImagen;
        }
        );
      }
    }

    get Logo(){
      return this.form.get("logo");
     }

     get Nombre(){
      return this.form.get("nombre");
     }

     get FechaRealizacion(){
      return this.form.get("fechaRealizacion");
     }

     get Descripcion(){
      return this.form.get("descripcion");
     }

     get Link(){
      return this.form.get("link");
     }

     get Imagen(){
      return this.form.get("imagen");
     }
}
