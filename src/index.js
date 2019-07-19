/*
import { tsPropertySignature } from "@babel/types";

function sayHello(){
    for(let i=0; i<5;i++){
        console.log(i);
    }
    
}

sayHello();

const person ={
    name:'Mosh',
    walk(){},
    talk()
};

person.talk();
person.name = '';



const person= {
    name: "Mosh",
    walk(){
        console.log(this)
    }
}

person.walk();

const walk = person.walk.bind(person);
walk();

*/

//6. Arrow Functions

/*

const square = function(number){
    return number * number;
}



const square = number => number * number;
console.log(square(5))


const jobs = [

    {id:1, isActive: true},
    {id:2, isActive: true},
    {id:3, isActive: false},
]
*/


//8.- Array.map Method

const colors = ['red', 'green', 'blue'];
const items = colors.map(function(color) {
    return '<li>' + color + '</li>';
});

const items2= colors.map(color => '<li>' + color + '</li>');

console.log(items);
console.log(items2);


//9. Object Destructuring

const address = {
    street: '',
    city: '',
    country: ''

};

const street = address.street;
const city = address.city;
const country = address.country;


const{Street, City, Country} = address;

//10- Spread Operator


        //combinando arrays
const first = [1,2,3];      
const second = [4,5,6];

const combined = first.concat(second);
const combined2 = [...first, 'a', ...second,'b'];

        //combinando objetos

const first2 = {name: "Mosh"};     
const second2 = {job: "Instructor"};

const combinado = {...first2, ...second2, location: "Australia"};
console.log(combinado);


//11- Classes

class Person {

    constructor(name) {
        this.name = name;
    }

    walk   (){
        console.log(this.name);
    }

}


const person = new Person('Joaquin')

person.walk();




