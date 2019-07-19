import{Person} from './person.js';

export class Teacher extends Person{


    constructor(name,degree){
        super(name);
        this.degree =degree;
    }

    teach2(){
        console.log(this.degree);
    }

}