import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Capitán América";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  ciudadano = {
    nombre: 'juan',
    clave: 'juanito',
    edad: 25,
    direccion: {
      calle: 'primera',
      apto: '13 12-01'
    }
  }

  fecha: Date = new Date();

  idioma: string = "Es";
}
