// Ejemplo de uso de métodos y funciones con funciones flecha en JavaScript

// Método map(): Ejecuta la función flecha para cada elemento del array y devuelve un nuevo array con los resultados.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Método filter(): Ejecuta la función flecha para cada elemento del array y devuelve un nuevo array con los elementos que cumplen con la condición especificada.
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Métodos de Promesas (then() y catch()): Define cómo manejar el resultado o el error de una promesa usando funciones flecha.
const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    resolve("Success!");
  } else {
    reject("Error!");
  }
});

promise.then((result) => {
  console.log(result); // Success!
}).catch((error) => {
  console.error(error); // Error!
});

// Método forEach(): Ejecuta la función flecha una vez por cada elemento del array.
numbers.forEach((num) => {
  console.log(num); // Output: 1, 2, 3, 4, 5
});

// Método addEventListener(): Define una función flecha para manejar un evento específico en un elemento del DOM.
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Button clicked!');
});
