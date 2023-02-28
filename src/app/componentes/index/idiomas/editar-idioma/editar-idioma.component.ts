import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { PersonaIdioma } from 'src/app/model/persona-idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Porcentaje } from 'src/app/model/porcentaje';
import { PorcentajeService } from 'src/app/servicios/porcentaje.service';

@Component({
  selector: 'app-editar-idioma',
  templateUrl: './editar-idioma.component.html',
  styleUrls: ['./editar-idioma.component.css']
})
export class EditarIdiomaComponent implements OnInit {
  personaIdioma: PersonaIdioma=null;
  idiomaId: number;
  porcentajeId: number;
  idiomas: Idioma[]=[];
  porcentajes:Porcentaje[]=[];
  form:FormGroup;

  constructor(private idiomaService: IdiomaService, private activatedRouter: ActivatedRoute,
    private porcentajeService: PorcentajeService,
    private router: Router, private formBuilder: FormBuilder) { 
      this.form= this.formBuilder.group({
        idiomaId:['',[Validators.required]],
        porcentajeId:['', [Validators.required]],
    })
    }

  ngOnInit(): void {
    this.cargarIdiomas();
    this.cargarPorcentajes();
    const id= this.activatedRouter.snapshot.params['id'];
    this.idiomaService.detail(id).subscribe(
     data=> {
       this.personaIdioma=data;
     }, err => {
       alert ("Falló al cargar los datos."); 
       this.router.navigate(['']);
     }
   )
  }

  cargarIdiomas(): void{
    this.idiomaService.list().subscribe(
      data => {this.idiomas=data}
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
    this.idiomaService.update(id, this.personaIdioma).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
  }

  get IdiomaId(){
    return this.form.get("idiomaId");
   }

   get PorcentajeId(){
    return this.form.get("porcentajeId");
   }
}
