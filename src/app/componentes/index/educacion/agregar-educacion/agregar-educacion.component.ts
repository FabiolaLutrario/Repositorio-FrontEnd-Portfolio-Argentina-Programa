import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {
  logo: string ="";
  titulo: string ="";
  centroEducativo: string ="";
  fechaInicio : string ="";
  fechaFin : string ="";
  seEncuentraCursando : boolean =false;
  descripcion : string ="";
  usuarioId: number;
  form:FormGroup;

  constructor(private educacionService: EducacionService, private router: Router,
    private formBuilder: FormBuilder, private authService:AuthService) { 
      this.form= this.formBuilder.group({
        titulo:['',[Validators.required]],
        centroEducativo:['', [Validators.required]],
        seEncuentraCursando:[''],
        fechaInicio:['', [Validators.required]],
        fechaFin:[''],
        logo:[''],
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
  const educacion = new Educacion(this.logo, this.titulo,this.centroEducativo, this.fechaInicio,
    this.fechaFin, this.seEncuentraCursando, this.descripcion, this.usuarioId=parseInt(currentUserSubject.userId));
    this.educacionService.save(educacion).subscribe(data=>{
      alert("Educación añadida");
      this.router.navigate(['']);
    }
    )
  }

  limpiar(): void{
    this.form.reset();
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
