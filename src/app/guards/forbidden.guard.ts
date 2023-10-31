import { CanActivateFn } from '@angular/router';

export const forbiddenGuard: CanActivateFn = (route, state) => {
  let usuarioLogeado: string = localStorage.getItem('usuarioLoageado');
  return usuarioLogeado != 'Pepito';
};
