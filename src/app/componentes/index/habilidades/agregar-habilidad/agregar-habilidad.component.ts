import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { PersonaHabilidad } from 'src/app/model/persona-habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { Porcentaje } from 'src/app/model/porcentaje';
import { PorcentajeService } from 'src/app/servicios/porcentaje.service';

@Component({
  selector: 'app-agregar-habilidad',
  templateUrl: './agregar-habilidad.component.html',
  styleUrls: ['./agregar-habilidad.component.css']
})
export class AgregarHabilidadComponent implements OnInit {
habilidad: string="";
porcentajeId:number;
usuarioId: number;
porcentajes:Porcentaje[]=[];
form:FormGroup;

  constructor(private habilidadService: HabilidadService, private router: Router,
    private porcentajeService: PorcentajeService,
    private formBuilder: FormBuilder, private authService:AuthService) {
    this.form= this.formBuilder.group({
      habilidad:['',[Validators.required]],
      porcentajeId:['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.cargarPorcentajes();
  }

  cargarPorcentajes(): void{
    this.porcentajeService.list().subscribe(
      data => {this.porcentajes=data}
    )
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
  const personaHabilidad = new PersonaHabilidad(this.habilidad, this.porcentajeId, this.usuarioId=parseInt(currentUserSubject.userId));
    this.habilidadService.save(personaHabilidad).subscribe(data=>{
      alert("Habilidad añadida");
      this.router.navigate(['']);
    }
    )
  }

  get Habilidad(){
    return this.form.get("habilidad");
  }

  get PorcentajeId(){
    return this.form.get("porcentajeId");
  }
}
