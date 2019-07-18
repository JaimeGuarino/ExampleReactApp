// Spread Operator
// const first= [1, 2, 3];
// const second= [4, 5, 6];

// // const combined = first.concat(second); // ambas expresiones hacen o mismo con la funcion spread ...
// // const combined = [...first,'a', ...second 'b']; // si quiero meter un elemento en medio, se pone en medio un ,'x', siendo x el elemento que queremos meter, y si queremmos añadirlo al final de igual manera . 

// const clone = [... first];
// console.log(first); // en consola aparece lo mismo dos veces
// console.log(clone);

const first = { name: 'Mosh'};
const second= { job: 'Instructor'};

const combined = {...first, ...second, location: 'Australia'}; 
console.log(combined); // Obtenemos en consola the name, job y se le añade la location:

// Spread Operator for clone an object

 const clone = {...first,...second};
 console.log(clone);