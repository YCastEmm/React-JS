import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import LayoutPrivate from "../layout/LayoutPrivate";



export const router = createBrowserRouter([
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
                element: <Login></Login>,
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
]

)

