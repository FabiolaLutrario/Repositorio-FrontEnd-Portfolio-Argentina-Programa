import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';
import { TokenService } from 'src/app/servicios/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-modal-editar-titulo',
  templateUrl: './modal-editar-titulo.component.html',
  styleUrls: ['./modal-editar-titulo.component.css']
})
export class ModalEditarTituloComponent implements OnInit {
  usuario:Usuario = new Usuario("","","","","","","",[],[],[],[],[]);
  //usuario: Usuario=null;
  titulo: string;
  form:FormGroup;

  constructor(private router: Router, private usuarioService: UsuarioService, 
    private tokenService: TokenService, private formBuilder: FormBuilder) { 
      this.form= this.formBuilder.group({
        titulo:['',[Validators.required]],
    })
    }

  ngOnInit(): void {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario(){
    this.usuarioService.getUsuario().subscribe(data =>{
      this.usuario=data;
    })
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

  onUpdate(){
    this.usuarioService.updateTitulo(this.usuario).subscribe(
      data=>{
      }
    )
    this.refrescarIndex();
  }

  limpiar(): void{
    this.form.reset();
  }

  refrescarIndex(): void{
    location.reload();
  }

  get Titulo(){
    return this.form.get("titulo");
  }

}
