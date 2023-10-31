import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { UsuariosComponent } from './usuarios.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { ValidatorComponent } from 'src/app/components/validator/validator.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    AddUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
