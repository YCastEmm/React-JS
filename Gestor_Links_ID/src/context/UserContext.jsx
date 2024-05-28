import { createContext, useContext, useEffect, useState } from "react";

// Crear el contexto de usuario
export const UserContext = createContext();

const UserProvider = ({ children }) => {

    let initialStateUser = localStorage.user ? JSON.parse(localStorage.user) : []


    // Inicializar el estado del usuario con el valor almacenado en Local Storage, o false si no existe
    const [user, setUser] = useState(initialStateUser);

    // useEffect(() => {
    //     // Actualizar el usuario almacenado en Local Storage cuando cambia el estado `user`
    //     if (user) {
    //         localStorage.setItem("user", JSON.stringify(user));
    //     } else {
    //         localStorage.removeItem("user");
    //     }
    // }, [user]); // Este efecto se ejecuta cada vez que el estado `user` cambia

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

// Hook personalizado para usar el contexto de usuario
export const useUserContext = () => useContext(UserContext);
