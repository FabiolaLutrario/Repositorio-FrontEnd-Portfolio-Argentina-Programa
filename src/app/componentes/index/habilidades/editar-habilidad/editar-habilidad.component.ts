import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaHabilidad } from 'src/app/model/persona-habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Porcentaje } from 'src/app/model/porcentaje';
import { PorcentajeService } from 'src/app/servicios/porcentaje.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {
  personaHabilidad: PersonaHabilidad=null;
  habilidad: string;
  porcentajeId: number;
  porcentajes:Porcentaje[]=[];
  form:FormGroup;

  constructor(private habilidadService: HabilidadService, private activatedRouter: ActivatedRoute,
    private porcentajeService: PorcentajeService,
    private router: Router, private formBuilder: FormBuilder) { 
      this.form= this.formBuilder.group({
        habilidad:['',[Validators.required]],
        porcentajeId:['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.cargarPorcentajes();
    const id= this.activatedRouter.snapshot.params['id'];
    this.habilidadService.detail(id).subscribe(
     data=> {
       this.personaHabilidad=data;
     }, err => {
       alert ("Falló al cargar los datos."); 
       this.router.navigate(['']);
     }
   )
  }

  cargarPorcentajes(): void{
    this.porcentajeService.list().subscribe(
      data => {this.porcentajes=data}
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
    this.habilidadService.update(id, this.personaHabilidad).subscribe(
      data => {
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
