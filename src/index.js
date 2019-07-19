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

const street = adress.street;
const city = address.city;
const country = address.country;


const{ street, city, country} = address;




