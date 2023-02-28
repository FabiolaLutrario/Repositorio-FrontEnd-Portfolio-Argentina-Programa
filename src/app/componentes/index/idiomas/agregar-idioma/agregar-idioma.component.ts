import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { PersonaIdioma } from 'src/app/model/persona-idioma';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';
import { Porcentaje } from 'src/app/model/porcentaje';
import { PorcentajeService } from 'src/app/servicios/porcentaje.service';


@Component({
  selector: 'app-agregar-idioma',
  templateUrl: './agregar-idioma.component.html',
  styleUrls: ['./agregar-idioma.component.css']
})
export class AgregarIdiomaComponent implements OnInit {
  idiomaId: number;
  idiomas: Idioma[]=[];
  porcentajeId:number;
  usuarioId: number;
  porcentajes:Porcentaje[]=[];
  form:FormGroup;

  constructor(private idiomaService: IdiomaService, private router: Router,
    private porcentajeService: PorcentajeService,
    private formBuilder: FormBuilder, private authService:AuthService) { 
      this.form= this.formBuilder.group({
        idiomaId:['',[Validators.required]],
        porcentajeId:['', [Validators.required]],
      })
    }

  ngOnInit(): void {
    this.cargarIdiomas();
    this.cargarPorcentajes();
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
  const personaIdioma = new PersonaIdioma(this.idiomaId, this.porcentajeId, this.usuarioId=parseInt(currentUserSubject.userId));
    this.idiomaService.save(personaIdioma).subscribe(data=>{
      alert("Idioma añadido");
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
