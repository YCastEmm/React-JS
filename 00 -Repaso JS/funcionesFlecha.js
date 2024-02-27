// Tipos de Arrow Functions:

// 1. Arrow Function de una sola línea:
//    - Consiste en una sola expresión y devuelve automáticamente el resultado de esa expresión.
//    - No requiere llaves {} ni la palabra clave return.
const suma = (a, b) => a + b;

// 2. Arrow Function de múltiples líneas:
//    - Se utiliza cuando necesitas realizar varias operaciones dentro de la función de flecha.
//    - Utiliza llaves {} y la palabra clave return para devolver un valor explícitamente.
const saludar = (nombre) => {
    const mensaje = 'Hola, ' + nombre + '!';
    return mensaje;
};

// Variantes de Arrow Functions:

// 1. Arrow Function Anónima:
//    - No tiene un nombre y se usa generalmente como argumento de otras funciones, como callbacks.
setTimeout(() => {
    console.log('Han pasado 3 segundos');
}, 3000);

// 2. Arrow Function con Parámetros:
//    - Puedes definir arrow functions que tomen uno o más parámetros.
const saludarB = (nombre) => {
    console.log('Hola, ' + nombre + '!');
};

// 3. Arrow Function sin Parámetros:
//    - No toma ningún parámetro.
const saludarC = () => {
    console.log('Hola, mundo!');
};

// 4. Arrow Function con un solo Parámetro:
//    - Si la función de flecha toma solo un parámetro, puedes omitir los paréntesis alrededor del parámetro.
const cuadrado = num => num * num;

// 5. Arrow Function como Métodos de Objetos:
//    - Se pueden utilizar como métodos en objetos, aunque el uso de this puede tener un comportamiento diferente.
const persona = {
    nombre: 'Juan',
    decirNombre: () => {
        console.log('Mi nombre es ' + this.nombre);
    }
};
