import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-modal-editar-foto',
  templateUrl: './modal-editar-foto.component.html',
  styleUrls: ['./modal-editar-foto.component.css']
})
export class ModalEditarFotoComponent implements OnInit {
  foto: string;
  form:FormGroup;

  constructor(private router: Router, private usuarioService: UsuarioService, private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
      foto:[''],
  })
}

  ngOnInit(): void {
  }

  limpiar(): void{
    this.form.reset();
  }

  refrescarIndex(): void{
    location.reload();
  }

  onEnviar(){
    this.usuarioService.updateFoto(this.foto).subscribe(
      data=>{
      }
    )
    this.refrescarIndex();
  }

  get Foto(){
    return this.form.get("foto");
  }
}
