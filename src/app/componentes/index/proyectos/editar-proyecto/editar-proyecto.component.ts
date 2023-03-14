import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  proyecto: Proyecto=null;
  logo: string;
  nombre: string;
  fechaRealizacion: string;
  descripcion: string;
  link: string;
  imagen: string;
  form:FormGroup;

  constructor(private proyectoService: ProyectoService, private activatedRouter: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) { 
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
      const id= this.activatedRouter.snapshot.params['id'];
      this.proyectoService.detail(id).subscribe(
       data=> {
         this.proyecto=data;
       }, err => {
         alert ("Falló al cargar los datos."); 
         this.router.navigate(['']);
       }
     )
   }

   onEnviar(event: Event){
    event.preventDefault; 
    if (this.form.valid){
      this.onUpdate();
      // Llamamos a nuestro servicio para enviar los datos al servidor
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template    
      alert ("Falló al modificar los datos."); 
      this.form.markAllAsTouched(); 
    }
  }

  onUpdate(): void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.proyectoService.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
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
