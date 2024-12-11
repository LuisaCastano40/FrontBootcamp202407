// Tipo de guard: canActivate -> nos permite acceder o no a una ruta según autorización
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

// Son métodos que devuelven falso o verdadero -> 
//si verdadero -> accede a la ruta protegida
//si falso -> NO accede a la ruta protegida
export const authGuard: CanActivateFn = (route, state) => {

  // inyectar dependencias o servicios
  const _router = inject(Router);
  const _loginService = inject(LoginService);

  // si no está logueado -> no debe acceder
  if(!_loginService.isLogged()){
    _router.navigate(['/']);
    return false
  }

  // si el usuario logueado no es administrador -> no debe acceder
  if(!_loginService.isAdmin()){
    _router.navigate(['/']);
    return false
  }

  return true;
};
