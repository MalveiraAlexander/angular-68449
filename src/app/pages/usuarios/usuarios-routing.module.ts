import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { UsuariosComponent } from './usuarios.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  { path: '', component: UsuariosComponent, title: 'Usuarios - Clase3' },
  { path: 'add', component: AddUserComponent, title: 'Agregar Usuario - Clase3', data: { bg: 'azul' } },
  { path: 'edit/:id', component: AddUserComponent, title: 'Editar Usuario - Clase3', data: { bg: 'azul' } },
  { path: ':id', component: ViewUserComponent, title: 'Ver Usuario - Clase3' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsuariosRoutingModule { }
