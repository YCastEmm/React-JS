import { createContext, useState } from "react";
import { useContext } from "react";

// Creamos un contexto de usuario utilizando createContext
export let UserContext = createContext();

// Definimos el componente UserProvider que actúa como proveedor de contexto
let UserProvider = ({ children }) => {
    // Definimos el estado del usuario y la función para actualizarlo utilizando useState
    let [user, setUser] = useState(false);

    return (
        // Utilizamos UserContext.Provider para proporcionar el contexto de usuario a los componentes hijos
        <UserContext.Provider value={{ user, setUser }}>
            {/* Renderizamos los componentes hijos envueltos por el proveedor de contexto */}
            {children}
        </UserContext.Provider>
    );
};

// Exportamos el componente UserProvider
export default UserProvider;

export let useUserContext = () => {
    return useContext(UserContext)
}



// En este código, se define un contexto de usuario (UserContext) utilizando la función createContext() de React. Este contexto se utiliza para compartir el estado del usuario entre diferentes componentes de la aplicación.

// El componente UserProvider es un componente de nivel superior que envuelve la aplicación. Su propósito es proporcionar el contexto de usuario a todos los componentes descendientes.

// Este UserProvider tiene un estado interno (user) que almacena la información del usuario actual y una función (setUser) para actualizar ese estado.

// El componente UserProvider acepta un prop children, que representa los componentes hijos que estarán envueltos por este proveedor de contexto.

// Dentro del UserProvider, se utiliza UserContext.Provider para envolver los componentes hijos. Se pasa el estado del usuario (user) y la función para establecer el usuario (setUser) como el valor del contexto utilizando la prop value del proveedor.

// De esta manera, todos los componentes hijos de UserProvider tendrán acceso al estado del usuario y podrán actualizarlo utilizando el contexto proporcionado por UserContext. Esto permite compartir el estado del usuario de manera global en la aplicación sin necesidad de pasar props manualmente a través de múltiples niveles de componentes.


