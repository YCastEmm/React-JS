/*
    Los "hooks" son una característica de React que te permite usar el estado y otras características de React en componentes funcionales. Antes de la introducción de los hooks, las características como el estado solo estaban disponibles en componentes de clase.

    useState es uno de los hooks más básicos y es utilizado para agregar estado a los componentes funcionales en React. Funciona devolviendo un array con dos elementos: el estado actual y una función para actualizar ese estado.
*/


import React, { useState } from 'react';

function Counter() {
  // Declaramos una variable de estado llamada "count" con valor inicial 0
  // y una función "setCount" para actualizar ese estado.

  
  // Abajo se accede a las dos posiciones del array que devuelve useState y se le asigna un nombre a cada posicion: count y setCount
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* Al hacer clic en el botón, llamamos a setCount para actualizar el estado "count" */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;