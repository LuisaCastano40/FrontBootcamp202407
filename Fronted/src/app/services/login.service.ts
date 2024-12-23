import { Injectable, inject } from '@angular/core';
// nos permite hacer peticiones http
import { HttpClient } from '@angular/common/http';
// nos permite redireccionar dentro de nuestro proyecto
import { Router } from '@angular/router';
// nos permite gestionar los mensajes de éxito, error o advertencia
import { ToastrService } from 'ngx-toastr';
// nos permite decodificar nuestro token
import {jwtDecode} from 'jwt-decode';
// nuestra interfaz que contiene la estructura de las credenciales
import { Credentials } from '../interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Forma moderna de injectar dependencias y encapsular
  private _httpClient = inject(HttpClient);
  private _router = inject(Router);
  public _toastrService = inject(ToastrService);
  private API_URL = 'http://localhost:9000/iniciarSesion';

    // validar credenciales con la petición post e iniciar sesión
  // realizar la petición de inicio de sesión
  login(credenciales: Credentials){
    // Pasamos URL y cuerpo de la petición
    return this._httpClient.post(this.API_URL, credenciales)
  }

  // Acceder y guardar nuestro token
  // Los tokens se almacenan de forma local -> localStorage -> almacenamiento temporal
  getToken(){
    // nos permite acceder al token almacenado de forma temporal
    return localStorage.getItem('token');
  }

  // validación si es o no administrador
  isAdmin(){
    // accedo al token guardado en mi almacenamiento temporal
    const token = this.getToken();
    // si existe token
    if(token){
      // decodifíquelo con jwtDecode y guardelo en la constante decoded
      const decoded: any = jwtDecode(token);

      // Si isAdmin existe  me returna true
      // Si no exixte isAdmin me returna false
      const variable = decoded.isAdmin ? true : false;
      return variable;
    }else {
      console.error('No se encontró token');
      return false;
    }
  }

  // Redireccionar a ruta pública si es usuario y a ruta privada si es admin
  redirect(){
    if(this.isAdmin()){

      this._router.navigate(['/admin/']);
    }else{

       this._router.navigate(['/']); //inicio
    }
  }

  // Nos guarda si inició sesión o no
  isLogged(){
    // verdadero o falso si hay o no token
    return this.getToken() ? true : false;
  }

  // Nos permita cerrar sesión
  logout(){
    // mensaje para el usuario
    this._toastrService.info('Cierre se sesión, hasta la próxima');
    // nos elimina el token del almacenamiento temporal
    localStorage.removeItem('token');
    // redireccione a la página de inicio
    this._router.navigate(['/'])
  }


}
