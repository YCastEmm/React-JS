import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Home from "../pages/Home";

// La función createBrowserRouter es utilizada para crear un enrutador de navegación en la aplicación React.
// Toma como argumento una matriz de objetos de configuración de ruta, cada uno de los cuales especifica una ruta y el componente asociado a esa ruta.

// Define un objeto router utilizando la función createBrowserRouter con una matriz de rutas y elementos asociados
export let router = createBrowserRouter([
    {
        // El atributo 'path' especifica la URL relativa de la ruta.
        // En este caso, "./" se refiere a la ruta raíz de la aplicación, "./about" se refiere a la ruta "/about" y "./blog" se refiere a la ruta "/blog".
        path: "/",
        // Asigna el componente Home al elemento asociado a la ruta "/"
        element: <Home></Home>
    },
    {
        // Define la ruta "/about"
        path: "/about",
        // Asigna el componente About al elemento asociado a la ruta "/about"
        element: <About></About>
    },
    {
        // Define la ruta "/blog"
        path: "/blog",
        // Asigna el componente Blog al elemento asociado a la ruta "/blog"
        element: <Blog></Blog>
    },
])
