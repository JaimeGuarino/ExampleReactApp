// Classes

// const person = {
//     name: "Mosh",
   
// };

// const person2 = {               // Problema: La implementacion de walk es la misma
//     name: "Mosh",                //Solución: Aplicar Clases
//     walk () {
//         console.log("walk");
//     }
// };

import  Teacher, { promote } from "./teacher";  // Al exportar la función promote en teacher, nos sale como opción
// Deafult -> import... from ''; 
// Named -> import {...} from '';

 import React, { Component } from 'react'; // Component se usará la mayoría de las veces.

const teacher = new Teacher ("Mosh","MSc");

teacher.teach(); 