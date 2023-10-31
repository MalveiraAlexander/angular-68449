import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { UsuariosComponent } from './usuarios.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  { path: '', component: UsuariosComponent, title: 'Usuarios - Clase2' },
  { path: 'add', component: AddUserComponent, title: 'Agregar Usuario - Clase2', data: { bg: 'azul' } },
  { path: 'add2', component: AddUserComponent, title: 'Agregar Usuario - Clase2', data: { bg: 'rojo' } },
  { path: ':id', component: ViewUserComponent, title: 'Ver Usuario - Clase2' }
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
