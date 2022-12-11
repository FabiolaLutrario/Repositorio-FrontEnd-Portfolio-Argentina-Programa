import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-inicio-sesion',
  templateUrl: './modal-inicio-sesion.component.html',
  styleUrls: ['./modal-inicio-sesion.component.css']
})
export class ModalInicioSesionComponent implements OnInit {
form:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.form= this.formBuilder.group({
      password:['',[Validators.required]],
      email:['', [Validators.required, Validators.email]],
   })
  }

  ngOnInit() {}

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

//Refrescamos el index al presionar la "X" del modal de inicio de sesión
  refresh(): void { window.location.reload(); }
 

  onEnviar(event: Event){
    
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
}