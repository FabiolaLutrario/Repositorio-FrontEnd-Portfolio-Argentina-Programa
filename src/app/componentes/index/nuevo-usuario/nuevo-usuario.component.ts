import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  nuevoUsuario!: NuevoUsuario;
  nombre!:string;
  apellido!: string;
  email!: string;
  password!: string;
  titulo!: string;
  roles: string[] = [];
  errMsj!: string;
  ngOptions = ["Administrador","Usuario"];
  ngDropdown ="";
  form:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private authService: AuthService, private router: Router) { 
      this.form= this.formBuilder.group({
        nombre:['', [Validators.required]],
        apellido:['', [Validators.required]],
        email:['', [Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(6)]],
        confirmPassword:['',[Validators.required]],
        titulo:['', [Validators.required]],
        roles:['',[Validators.required]]
     },
     {
     validators:this.mustMatch('password','confirmPassword')
    })
  }

  ngOnInit(): void {
    this.limpiar;
  }

  mustMatch(controlName:string, matchingControlName:string){
    return(formGroup:FormGroup)=>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors['mustMatch']){
        return
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({mustMatch:true});
      } else{
        matchingControl.setErrors(null);
      }
    }
  }

  onEnviar(event: Event){
    event.preventDefault; 
    if (this.form.valid){
      this.onCreate();
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template  
      this.form.markAllAsTouched();   
      alert ("Falló al registrar usuario, intente nuevamente."); 
    }
  }

  onCreate():void{

    if(this.ngDropdown=="Administrador"){
      this.roles= ["admin", "user"]
    } else if(this.ngDropdown=="Usuario"){
      this.roles= ["user"]
    }
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.apellido,this.email, this.password,
      this.titulo,this.roles);
    this.authService.nuevo(this.nuevoUsuario).subscribe(data =>{
      alert("¡Usuario registrado con éxito!")
      this.router.navigate(['']);
      })
    }
  
    limpiar(): void{
      this.form.reset();
    }

    get Nombre(){
      return this.form.get("nombre");
    }

    get Apellido(){
      return this.form.get("apellido");
    }

    get Email(){
      return this.form.get("email");
    }

    get Password(){
      return this.form.get("password");
    }

    get ConfirmPassword(){
      return this.form.get("confirmPassword");
    }

    get Titulo(){
      return this.form.get("titulo");
    }

     get Roles(){
      return this.form.get("roles");
     }
  
    get PasswordValid(){
      return this.Password?.touched && !this.Password?.valid;
    }
  
    get EmailValid() {
      return false
    }

}
