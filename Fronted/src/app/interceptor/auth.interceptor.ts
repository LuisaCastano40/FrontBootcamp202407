import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

    // Inyectar el servicio de usuario
  const authService = inject(LoginService);

  // Obtener el token
  const token = authService.getToken();

  // Si hay token, clonar la solicitud y añadir el header
  const tokenReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(tokenReq); // Continuar con la solicitud

};