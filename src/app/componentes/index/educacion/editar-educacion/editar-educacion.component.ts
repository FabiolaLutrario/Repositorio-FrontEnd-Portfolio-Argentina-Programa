import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educacion: Educacion = null;
  logo: string;
  titulo: string;
  centroEducativo: string;
  fechaInicio : string;
  fechaFin : string;
  seEncuentraCursando : boolean;
  descripcion : string; 
  form:FormGroup;

  constructor(private educacionService: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) { 
      this.form= this.formBuilder.group({
        logo:[''],
        titulo:['',[Validators.required]],
        centroEducativo:['', [Validators.required]],
        seEncuentraCursando:[''],
        fechaInicio:['', [Validators.required]],
        fechaFin:['', [Validators.required]],
        descripcion:[''],
     }) 
    }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
     data=> {
       this.educacion=data;
     }, err => {
       alert ("Falló al cargar los datos."); 
       this.router.navigate(['']);
     }
   )
    if(this.educacion.seEncuentraCursando==true){
     this.seEncuentraCursando=true;
   }else{
     this.seEncuentraCursando =false;
 } 
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
    if(this.educacion.seEncuentraCursando==true){
      this.educacion.fechaFin=null;
    }
    this.educacionService.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
  }


    get Titulo(){
    return this.form.get("titulo");
   }

   get CentroEducativo(){
    return this.form.get("centroEducativo");
   }

   get SeEncuentraCursando(){
    return this.form.get("seEncuentraCursando");
   }

  get FechaInicio(){
    return this.form.get("fechaInicio");
   }

   get FechaFin(){
    return this.form.get("fechaFin");
   }

   get Logo(){
    return this.form.get("logo");
   }

   get Descripcion(){
    return this.form.get("descripcion");
   } 

}
