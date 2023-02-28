import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-modal-editar-banner',
  templateUrl: './modal-editar-banner.component.html',
  styleUrls: ['./modal-editar-banner.component.css']
})
export class ModalEditarBannerComponent implements OnInit {
  banner: string;
  form:FormGroup;

  constructor(private router: Router, private usuarioService: UsuarioService, private formBuilder: FormBuilder) { 
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
    this.usuarioService.updateBanner(this.banner).subscribe(
      data=>{
      }
    )
    this.refrescarIndex();
  }

  get Banner(){
    return this.form.get("banner");
  }
}
