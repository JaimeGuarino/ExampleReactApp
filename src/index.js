import { tsPropertySignature } from "@babel/types";

function sayHello(){
    for(let i=0; i<5;i++){
        console.log(i);
    }
    
}

sayHello();

const persona = {name: "Juan", edad: 20, sexo:"", altura:1240};

const {name, edad, ...otros} = persona
const [campo1, campo2] = [100, "", true]