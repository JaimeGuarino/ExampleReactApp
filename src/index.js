// Objet Destructuring 
const address= {
    street: '',
    city: '',
    country: ''
}

const street = address.street; 
const city = address.city; 
const country = address.country; 

//const {street, city, country}= address; // En esta línea tenemos el mismo resultado que las 3 anteriores

const { street: st } = address; // Forma que se usará más amenudo. 
