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

*/

const square = number => number * number;
console.log(square(5))


const jobs = [

    {id:1, isActive: true},
    {id:2, isActive: true},
    {id:3, isActive: false},
]

const activeJobs =






