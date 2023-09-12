
// const booleanTrue = true
// const booleanFalse = false


// //IF / ELSE Condiciones basicas
// if( !booleanTrue ){
//     console.log('Estas logeado');
// }else{
//     console.log('Estas deslogeado')
// }

//Objetos

const person = {
    age        : 38,
    jobTitle   : 'Developer',
    lastName   : 'Cueva',
    name       : 'Diego',
};
//Primera forma accedes a los valores 
// console.log( person.name );

//Segunda form 

// console.log( person['name'] );

person.address = 'Lima city';

console.log( person.address );

//Modificar contenedio del objeto

person.name = 'Joe';

//Eliminar info de un objeto

delete person.lastName;

console.log( person );

