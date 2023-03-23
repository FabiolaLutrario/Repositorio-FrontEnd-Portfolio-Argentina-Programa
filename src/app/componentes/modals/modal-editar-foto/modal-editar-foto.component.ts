import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { FotoPerfilService } from 'src/app/servicios/foto-perfil.service';

@Component({
  selector: 'app-modal-editar-foto',
  templateUrl: './modal-editar-foto.component.html',
  styleUrls: ['./modal-editar-foto.component.css']
})
export class ModalEditarFotoComponent implements OnInit {
  foto: string;
  form:FormGroup;
  imagen: any []=[];

  constructor(private router: Router, private usuarioService: UsuarioService, private formBuilder: FormBuilder,
    public fotoPerfilService: FotoPerfilService, private activatedRouter: ActivatedRoute,
    private authService: AuthService) { 
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
    this.refrescarIndex();
  }

  uploadImage($event:any){
    const id = this.authService.usuarioAuth.userId;
    const name = "fotoPerfil_" + id;
    let archivo = $event.target.files
    let reader = new FileReader();
    reader.readAsDataURL(archivo[0]);
    reader.onloadend = () =>{
      console.log(reader.result);
      this.imagen.push(reader.result);
      this.fotoPerfilService.uploadImage(name, reader.result).then(urlImagen=>{
        this.usuarioService.updateFoto(urlImagen).subscribe(
          data=>{
          }
        )
      }
      );
    }
  }

  get Foto(){
    return this.form.get("foto");
  }
}
