import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  experiencia: Experiencia = null;
  logo: string;
  cargo: string;
  empresa: string;
  fechaInicio : string;
  fechaFin : string;
  esTrabajoActual : boolean;
  descripcion : string; 
  form:FormGroup;

   constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) { 
       this.form= this.formBuilder.group({
        logo:[''],
        cargo:['',[Validators.required]],
        empresa:['', [Validators.required]],
        esTrabajoActual:[''],
        fechaInicio:['', [Validators.required]],
        fechaFin:['', [Validators.required]],
        descripcion:[''],
     }) 
    }

  ngOnInit(): void {
     const id= this.activatedRouter.snapshot.params['id'];
     this.experienciaService.detail(id).subscribe(
      data=> {
        this.experiencia=data;
      }, err => {
        alert ("Falló al cargar los datos."); 
        this.router.navigate(['']);
      }
    )
     if(this.experiencia.esTrabajoActual==true){
      this.esTrabajoActual=true;
    }else{
      this.esTrabajoActual =false;
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
    if(this.experiencia.esTrabajoActual==true){
      this.experiencia.fechaFin=null;
    }
    this.experienciaService.update(id, this.experiencia).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
  }


    get Cargo(){
    return this.form.get("cargo");
   }

   get Empresa(){
    return this.form.get("empresa");
   }

   get EsTrabajoActual(){
    return this.form.get("esTrabajoActual");
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
