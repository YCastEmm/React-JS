// Importación del componente Link de react-router-dom para la navegación entre páginas
import { Link, NavLink } from "react-router-dom";


// Link es un componente de React que se utiliza para crear enlaces dentro de una aplicación React. Permite la navegación entre diferentes vistas sin necesidad de recargar la página completa. En el código se utiliza para crear enlaces de navegación en la barra de navegación (Navbar). Cada enlace está asociado a una ruta específica y al hacer clic en ellos, la aplicación se redirige dinámicamente a la ruta correspondiente.

// Existe además el componetne NavLink, que actúa igual que el Link, pero se usa para los navs, ya que cuando se cliquea, le agrega una clase "active" al elemento, de modo tal que uno puede manejar más facilmente al elemento.



// Definición del componente funcional Navbar
const Navbar = () => {
    return (
        // Contenedor de la barra de navegación con clases de estilos de Bootstrap
        <div className="navbar navbar-dark bg-dark my-3">
            <div className="container">
                {/* Enlace al inicio de la página */}
                <NavLink className="btn btn-outline-primary" to="/">
                    Inicio
                </NavLink>
                {/* Enlace a la página de contacto */}
                <NavLink className="btn btn-outline-primary" to="/contacto">
                    Contacto
                </NavLink>
                {/* Enlace a la página Nosotros */}
                <NavLink className="btn btn-outline-primary" to="/blog">
                    Blog
                </NavLink>
            </div>
        </div>
    );
};

// Exportación del componente Navbar para su uso en otros archivos
export default Navbar;
