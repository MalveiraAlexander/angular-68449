import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
  { path: 'users', children: [
    { path: '', loadComponent() {
      return import('./pages/users/users.component').then(m => m.UsersComponent);
    } },
    { path: 'add', loadComponent() {
      return import('./pages/users/add-edit-user/add-edit-user.component').then(m => m.AddEditUserComponent);
    }, },
    { path: 'edit/:id', loadComponent() {
      return import('./pages/users/add-edit-user/add-edit-user.component').then(m => m.AddEditUserComponent);
    }, }
  ] },
  { path: '', redirectTo: '/users', pathMatch: 'full'}
];
