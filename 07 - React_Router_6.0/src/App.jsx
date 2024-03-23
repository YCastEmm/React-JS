
import LayoutPublic from "./layout/LayoutPublic";
import Contacto from "./pages/Contacto";
import Inicio from "./pages/Inicio";
import EntradaBlog from "./pages/EntradaBlog"
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";

// Se importan las rutas y la ruta individual del módulo react-router-dom
import { Routes, Route } from "react-router-dom";

// Se define el componente de la aplicación
let App = () => {
    return (
        <div className="bg-dark">
            {/* 
                Se definen las rutas de la aplicación.
                - Se utiliza el componente 'Routes' para envolver todas las rutas.
                - Dentro de 'Routes', se especifica cada ruta individual utilizando el componente 'Route'.
                - Cada 'Route' tiene dos atributos principales:
                    - 'element': indica el componente que se renderizará cuando la ruta coincida.
                    - 'path': indica la URL que activará esta ruta.
             */}

            <Routes>
                <Route path="/" element={<LayoutPublic />}>
                    <Route element={<Inicio></Inicio>} index></Route>
                    <Route element={<Contacto></Contacto>} path="/contacto"></Route>
                    <Route element={<Blog></Blog>} path="/blog"></Route>
                    <Route element={<EntradaBlog></EntradaBlog>} path={`/blog/:id`}></Route>
                </Route>
                {/* La página 404 se pone por fuera del anidado para que no se muestre el resto del layout si ocurre el error */}
                <Route element={<NotFound></NotFound>} path="*"></Route>

            </Routes>
        </div>
    );
};

export default App;
