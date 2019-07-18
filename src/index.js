// var--> function (evitarlo)
// let --> block (recomendable)
// const --> block (constantes, usar antes que let )

const person = {
    name: "Mosh",
    walk() {
        console.log(this); // this delvuelve la referencia del objeto
    }   //walk sería Method del objeto person // Se puede definir funciones con el nombre de la funcion y seguidamente () {}
};

person.walk();

const walk = person.walk.bind(person); // el argumento que recibe, será el nuevo valor que asignaremosa  this
walk();

// Arrow functions// 

//const square = function(number){            // Las dos líneas de arriba son las mismas que las de abajo
    //return number * number;                 // Las de abajo está puesto de una forma mas simple y elegante 
//}                                           // gracias a las arrow function

const square = number => number * number
console.log(square(5));
// Otro ejemlo como el anterior
//
   // {id: 1, isActive: true},
    //{id: 2, isActive: true},
    //{id: 3, isActive: false},
//];

//const activeJobs = jobs.filter(function(job) {return job.isActive; }); // Es lo mismo
//const activeJobs = jobs.filter(job => jobs.isActive);

