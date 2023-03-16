import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-modal-editar-banner',
  templateUrl: './modal-editar-banner.component.html',
  styleUrls: ['./modal-editar-banner.component.css']
})
export class ModalEditarBannerComponent implements OnInit {
  banner: string;
  form:FormGroup;

  constructor(private router: Router, private usuarioService: UsuarioService, private formBuilder: FormBuilder,
    public imagenService:ImagenService, private activatedRouter: ActivatedRoute) { 
      this.form= this.formBuilder.group({
        banner:[''],
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
    this.banner = this.imagenService.url
    this.usuarioService.updateBanner(this.banner).subscribe(
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

  get Banner(){
    return this.form.get("banner");
  }
}
