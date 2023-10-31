import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: string = 'Carlos';
  nombres: string[] = ['Fernando', 'Luis', 'Carlos'];
  private names: string[] = ['Gustavo', 'Sergio', 'Antonella', 'Javier'];

  addName() {
    let indexName = Math.floor(Math.random() * this.names.length);
    this.nombres.push(this.names[indexName]);
    this.nombre = this.names[indexName];
  }

  removeName() {
    let indexName = Math.floor(Math.random() * this.names.length);
    this.nombres = [...this.nombres.slice(0, indexName), ...this.nombres.slice(indexName + 1)];
  }
}
