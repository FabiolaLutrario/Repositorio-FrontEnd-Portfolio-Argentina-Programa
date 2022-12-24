import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-modal-inicio-sesion',
  templateUrl: './modal-inicio-sesion.component.html',
  styleUrls: ['./modal-inicio-sesion.component.css']
})

export class ModalInicioSesionComponent implements OnInit {
  isLogged = false;
  isLogginFail=false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private tokenService: TokenService,
    private authService: AuthService, private router: Router) { 
    this.form= this.formBuilder.group({
      password:['',[Validators.required]],
      email:['', [Validators.required, Validators.email]],
   })
  }

  ngOnInit():void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(event: Event): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate([''])
    }, err =>{
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
    })

        // Detenemos la propagación o ejecución del compotamiento submit de un form
        event.preventDefault; 
 
        if (this.form.valid){
          // Llamamos a nuestro servicio para enviar los datos al servidor
          // También podríamos ejecutar alguna lógica extra
          alert("¡Inicio de Sesión Exitoso!")
        }else{
          // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
          this.form.markAllAsTouched(); 
        }

  }

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }
}