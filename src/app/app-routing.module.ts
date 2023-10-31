import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RolesComponent } from './pages/roles/roles.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddUserComponent } from './pages/usuarios/add-user/add-user.component';
import { ViewUserComponent } from './pages/usuarios/view-user/view-user.component';
import { forbiddenGuard } from './guards/forbidden.guard';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./pages/usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: 'roles', component: RolesComponent, title: 'Roles - Clase2', canActivate: [forbiddenGuard] },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, title: '404 - No encontrado - Clase2' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
