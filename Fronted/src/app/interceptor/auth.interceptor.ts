import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};


// import { HttpInterceptorFn } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { UserService } from '../../../services/user/user.service';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   // Inyecta el servicio UserService
//   const authService = inject(UserService);

//   // Clona la solicitud y agrega el encabezado Authorization
//   const token = authService.getToken();
//   const tokenReq = req.clone({
//     setHeaders: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   // Maneja la solicitud modificada
//   return next(tokenReq);
// };