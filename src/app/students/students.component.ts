import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  title_alumnos = "Listado de Alumnos"

  no_presente = "No se Presento"

  usuarios = [
    {
      "nombre": "enzo",
      "apellido": "lopez",
      "dni": 39020323,
      "nota_1" : 3,
      "nota_2" : 0,
      "nota_final" : 0,
      "aprobado" : false
    },
    {
      "nombre": "juan",
      "apellido": "perez",
      "dni": 39424323,
      "nota_1" : 7,
      "nota_2" : 8,
      "nota_final" : 7,
      "aprobado" : true
    },
    {
      "nombre": "sofia",
      "apellido": "ramirez",
      "dni": 34564334,
      "nota_1" : 8,
      "nota_2" : 9,
      "nota_final" : 8,
      "aprobado" : true
    },
    {
      "nombre": "esteban",
      "apellido": "lopez",
      "dni": 37343545,
      "nota_1" : 1,
      "nota_2" : 0,
      "nota_final" : 0,
      "aprobado" : false
    },
    {
      "nombre": "pepe",
      "apellido": "diaz",
      "dni": 32435304,
      "nota_1" : 7,
      "nota_2" : 1,
      "nota_final" : 0,
      "aprobado" : false
    },
    {
      "nombre": "juan",
      "apellido": "martinez",
      "dni": 29423504,
      "nota_1" : 6,
      "nota_2" : 8,
      "nota_final" : 6,
      "aprobado" : true
    },
    {
      "nombre": "roberto",
      "apellido": "alonso",
      "dni": 34542504,
      "nota_1" : 6,
      "nota_2" : 8,
      "nota_final" : 6,
      "aprobado" : true
    }
  ]
}
