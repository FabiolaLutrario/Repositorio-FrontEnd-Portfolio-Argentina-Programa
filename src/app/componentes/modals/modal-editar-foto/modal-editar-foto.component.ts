import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-modal-editar-foto',
  templateUrl: './modal-editar-foto.component.html',
  styleUrls: ['./modal-editar-foto.component.css']
})
export class ModalEditarFotoComponent implements OnInit {
  foto: string;
  form:FormGroup;

  constructor(private router: Router, private usuarioService: UsuarioService, private formBuilder: FormBuilder,
    public imagenService:ImagenService, private activatedRouter: ActivatedRoute) { 
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
    this.foto = this.imagenService.url
    this.usuarioService.updateFoto(this.foto).subscribe(
      data=>{
      }
    )
    this.refrescarIndex();
  }

  uploadImage($event:any){
    const id= this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imagenService.uploadImage($event, name)
  }

  get Foto(){
    return this.form.get("foto");
  }
}
