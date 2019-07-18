// Para hacer visible este modulo se pone un export para poder usarlo desde otros files
import {Person} from "./person"; //importamos la clase Person desde el file person.js

export function promote() {};

export  default class Teacher extends Person {  // al añadir default, por defecto, lo que se importara es teacher, por lo que no haría falta poner import teacher entre corchetes

  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}
