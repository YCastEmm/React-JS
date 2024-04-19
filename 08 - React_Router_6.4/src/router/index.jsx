
import { createBrowserRouter } from "react-router-dom"; // Importa la función createBrowserRouter de react-router-dom
import About from "../pages/About"; // Importa el componente About desde la carpeta pages
import Blog from "../pages/Blog"; // Importa el componente Blog desde la carpeta pages
import Posts from "../pages/Posts"; // Importa el componente Posts desde la carpeta pages
import { LoaderBlog } from "../pages/Blog"; // Importa el componente LoaderBlog desde la carpeta pages
import { LoaderPosts } from "../pages/Posts"; // Importa el componente LoaderPosts desde la carpeta pages
import Home from "../pages/Home"; // Importa el componente Home desde la carpeta pages
import NotFound from "../pages/NotFoundPage"; // Importa el componente NotFound desde la carpeta pages
import LayoutPublic from "../layout/LayoutPublic"; // Importa el componente LayoutPublic desde la carpeta layout

// La función createBrowserRouter se utiliza para crear un enrutador de navegación en la aplicación React.
// Toma como argumento una matriz de objetos de configuración de ruta, cada uno de los cuales especifica una ruta y el componente asociado a esa ruta.
// Define un objeto router utilizando la función createBrowserRouter con una matriz de rutas y elementos asociados.


// Exporta una variable llamada router que contiene la configuración de las rutas utilizando createBrowserRouter
export let router = createBrowserRouter([
    {
        path: "/", // Ruta principal
        element: <LayoutPublic></LayoutPublic>, // Componente principal para esta ruta
        errorElement: <NotFound></NotFound>, // Componente a mostrar en caso de error
        children: [ // Hijos de la ruta principal
            {
                errorElement: <NotFound></NotFound>, // Componente a mostrar en caso de error para los hijos de esta ruta
                children: [ // Hijos de los hijos de la ruta principal
                    {
                        // El atributo 'path' especifica la URL relativa de la ruta.
                        // En este caso, index true indica que es a la ruta raíz de la aplicación, "./about" se refiere a la ruta "/about" y "./blog" se refiere a la ruta "/blog".
                        index: true, // Indica que este es el componente por defecto cuando se accede a esta ruta
                        element: <Home></Home>, // Componente Home para esta ruta
                    },
                    {
                        path: "/about", // Ruta para la página Acerca de
                        element: <About></About>, // Componente About para esta ruta
                    },
                    {
                        path: "/blog", // Ruta para la página de Blog
                        element: <Blog></Blog>, // Componente Blog para esta ruta
                        loader: LoaderBlog, // Componente LoaderBlog utilizado para cargar datos asincrónicos
                    },
                    {
                        path: "/blog/:id", // Ruta para las publicaciones individuales en el Blog
                        element: <Posts></Posts>, // Componente Posts para esta ruta
                        loader: LoaderPosts, // Componente LoaderPosts utilizado para cargar datos asincrónicos
                    },
                ],
            },
        ],
    },
]);
