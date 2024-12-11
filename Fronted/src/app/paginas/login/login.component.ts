import { Component, inject } from '@angular/core';
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Credentials } from '../../interfaces/credentials';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavBarComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // 1. injección de dependencias
  _loginService = inject(LoginService);
  _toastrService = inject(ToastrService);

  // Conectar nuestro formulario 
  formularioLogin = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });

  
  manejoInicioSesion(){

    const emailLogin = this.formularioLogin.value.email;
    const passwordLogin = this.formularioLogin.value.password;
    console.log(this.formularioLogin.value.email);
    console.log(this.formularioLogin.value.password);

    let Credencialesingreso: Credentials | null = null ;

    // validar que las credenciales son del tipo de dato que recibe la interfaz
    if(typeof emailLogin === 'string' && typeof passwordLogin === 'string'){
      // nos creamos una interfaz de tipo Credentials
      Credencialesingreso = {
        emailLogin,
        passwordLogin
      }

    }

    // REALIZAR LA PETICIÓN AL BACKEND PARA QUE INICIE SESIÓN, CON AYUDA DE NUESTRO SERVICIO

    if(Credencialesingreso){
      this._loginService.login(Credencialesingreso).subscribe({
        // manejar los errores en el front
        next: (res: any) => {
          // acá cuanto todo Ok -> 200
          console.log(res)
          if(res){
            localStorage.setItem('token', res.tokenGenerado)
            this._loginService.redirect();
          }

        },
        // acá es cuando hay un error o un estado diferente al 200
        error: (err)=>{
          console.log(err.error.mensaje);
          this._toastrService.error(err.error.mensaje || 'Ocurrió un error al iniciar sesión');
          this.formularioLogin.reset();
        }
      })
    }

  }
}
