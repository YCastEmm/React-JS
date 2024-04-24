import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import LayoutPrivate from "../layout/LayoutPrivate";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

// react-router-dom es una librería que proporciona enrutamiento de navegación para aplicaciones web basadas en React. Permite definir cómo deben coincidir las URL del navegador con los componentes de la interfaz de usuario que se deben renderizar. Aquí te explico cómo funciona en términos generales:

// Creo una variable router que utiliza la función createBrowserRouter
export let router = createBrowserRouter([
    {
        // Defino la ruta raíz "/"
        path: "/",
        // Establezco el componente LayoutRoot como el contenedor principal para esta ruta
        element: <LayoutRoot />,
        // Defino los hijos de esta ruta
        children: [
            {
                // Especifico que esta ruta es el índice de la ruta raíz
                index: true,
                // Establezco el componente Home como el elemento de esta ruta
                element: <Home></Home>,
            },
            {
                // Defino la ruta "/dashboard"
                path: "/dashboard",
                // Establezco el componente LayoutPrivate como el contenedor principal para esta ruta
                element: <LayoutPrivate></LayoutPrivate>,
                // Defino los hijos de esta ruta
                children: [
                    {
                        // Especifico que esta ruta es el índice de la ruta "/dashboard"
                        index: true,
                        // Establezco el componente Dashboard como el elemento de esta ruta
                        element: <Dashboard></Dashboard>
                    }
                ]
            },
        ],
    },
]);
