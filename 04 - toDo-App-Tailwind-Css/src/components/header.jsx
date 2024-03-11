import { useEffect, useState } from "react";
import { MoonIcon } from "./icons/moonIcon";
import { SunIcon } from "./icons/sunIcon";

let Header = () => {

    let initialStateDarkMode = localStorage.theme === "light" ? false : true

    let [darkMode, setDarkMode] = useState(initialStateDarkMode)

    // useEffect es un hook de React que permite ejecutar efectos secundarios en componentes funcionales, como suscripciones a eventos, operaciones de red o actualizaciones del DOM, después de que el componente ha sido renderizado. Su sintaxis es useEffect(() => { // efecto }, [dependencias]);, donde el primer argumento es una función que representa el efecto a realizar, y el segundo argumento es un array opcional que indica qué elemento debe cambiar para ejecutar el efecto.

    useEffect(() =>{
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    },[darkMode])


    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">Tareas</h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {
                        !darkMode ? <MoonIcon fill="#fff" /> : <SunIcon fill="#fff" />
                    }
                </button>
            </div> 
        </header>
    );
};


export default Header