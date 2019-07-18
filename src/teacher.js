// Para hacer visible este modulo se pone un export para poder usarlo desde otros files
import {Person} from "./person"; //importamos la clase Person desde el file person.js

export class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}
