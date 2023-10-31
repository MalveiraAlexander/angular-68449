import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent {
  objeto = [
    {
      nombre: 'Carlos',
      apellido: 'García',
      edad: 26
    },
    {
      nombre: 'Luis',
      apellido: 'García',
      edad: 26
    },
    {
      nombre: 'Fernando',
      apellido: 'García',
      edad: 26
    },
    {
      nombre: 'Carlos',
      apellido: 'García',
      edad: 26
    }
  ]
  date = new Date().toISOString();
}
