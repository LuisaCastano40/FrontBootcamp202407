import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);
  private URL_USERS = 'http://localhost:9000/usuarios'; // Ajusta a tu endpoint real

  // OBTENER USUARIOS
  getUsers() {
    return this.httpClient.get(`${this.URL_USERS}/obtener`);
  }

  // CREAR USUARIO
  postUser(user: User) {
    return this.httpClient.post(`${this.URL_USERS}/crear`, user);
  }
}
