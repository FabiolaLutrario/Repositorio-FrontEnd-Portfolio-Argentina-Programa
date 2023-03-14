import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {
  logo: string ="";
  cargo: string ="";
  empresa: string ="";
  fechaInicio : string ="";
  fechaFin : string ="";
  esTrabajoActual : boolean =false;
  descripcion : string ="";
  usuarioId: number;
  form:FormGroup;

  constructor(private experienciaService: ExperienciaService, private router: Router,
    private formBuilder: FormBuilder, private authService:AuthService) { 
      this.form= this.formBuilder.group({
        logo:[''],
        cargo:['',[Validators.required]],
        empresa:['', [Validators.required]],
        esTrabajoActual:[''],
        fechaInicio:['', [Validators.required]],
        fechaFin:[''],
        descripcion:[''],
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
  const experiencia = new Experiencia(this.logo, this.cargo,this.empresa, this.fechaInicio,
    this.fechaFin, this.esTrabajoActual, this.descripcion, this.usuarioId=parseInt(currentUserSubject.userId));
    this.experienciaService.save(experiencia).subscribe(data=>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }
    )
  }

  get Logo(){
    return this.form.get("logo");
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

   get Descripcion(){
    return this.form.get("descripcion");
   }
}
