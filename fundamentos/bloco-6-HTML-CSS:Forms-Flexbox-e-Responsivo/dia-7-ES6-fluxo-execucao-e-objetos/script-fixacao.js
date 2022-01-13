// const sumA = (value1, value2) => value1 + value2;

// console.log(sumA(20,20));

// const sum2 = (value3, value4) => {
//     if ( typeof value3 != 'number' || typeof value4 != 'number'){
//         throw new Error("Essa calculadora aceira apenas numeros");
//     } else {
//         return value3 + value4;
//     }
// }

// console.log ( sum2 (2,2));
// console.log( sum2 ('2',2));

// const verifyIsNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//   };
  
//   const sum = (value1, value2) => {
//     try {
//       verifyIsNumber(value1, value2);
//       return value1 + value2;
//     } catch (error) {
//       throw error.message;
//     }
//   };
  
//   console.log(sum(2, '3'));

//   --------------------------------------Pt2 (Adicionando novas chaves (keys))

// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   console.log(customer1);
  
//   customer1.lastName = 'Faria';
//   console.log(customer1);
  
//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
  
//   console.log(customer2);
//   customer2['lastName'] = 'Silva';
//   console.log(customer2);

//   const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);





// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
//   customer[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
//   customer[newKey] = fullName;
//   console.log(customer);


//----------------------Pratica 1 
//crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.



const register = {
    firstName: 'Henrique',
    secondName: 'Gouvea',
    job: 'Student',
}

const addObject = (object, newKey, value) => {
    object[newKey] = value;
    return object;
}

console.log(register);
console.log(addObject(register, 'sport', 'capoeira'));
console.log(addObject(register, 'age', '29'));