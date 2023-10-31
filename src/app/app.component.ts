import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clase2';
  constructor() {
    if (!localStorage.getItem('usuarioLoageado')) {
      localStorage.setItem('usuarioLoageado', 'Pepito');
    }
  }
}
