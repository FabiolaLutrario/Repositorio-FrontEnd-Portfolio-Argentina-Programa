import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { BannerService } from 'src/app/servicios/banner.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-modal-editar-banner',
  templateUrl: './modal-editar-banner.component.html',
  styleUrls: ['./modal-editar-banner.component.css']
})
export class ModalEditarBannerComponent implements OnInit {
  banner: string;
  form:FormGroup;
  imagen: any []=[];

  constructor(private router: Router, private usuarioService: UsuarioService, private formBuilder: FormBuilder,
    public bannerService:BannerService, private activatedRouter: ActivatedRoute,
    private authService: AuthService) { 
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
    this.refrescarIndex();
  }

  uploadImage($event:any){
    const id = this.authService.usuarioAuth.userId;
    const name = "bannerPerfil_" + id;
    let archivo = $event.target.files
    let reader = new FileReader();
    reader.readAsDataURL(archivo[0]);
    reader.onloadend = () =>{
      console.log(reader.result);
      this.imagen.push(reader.result);
      this.bannerService.uploadImage(name, reader.result).then(urlImagen=>{
        this.usuarioService.updateBanner(urlImagen).subscribe(
          data=>{
          }
        )
      }
      );
    }
  }

  get Banner(){
    return this.form.get("banner");
  }
}
