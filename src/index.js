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
