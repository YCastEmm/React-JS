import { NavLink } from "react-router-dom"; // Importa el componente NavLink de react-router-dom

// Componente funcional Navbar que muestra la barra de navegación de la aplicación
let Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark"> 
            <div className="container"> 
                <NavLink to="/" className="btn btn-outline-primary">Home</NavLink> 
                <NavLink to="/blog" className="btn btn-outline-primary">Blog</NavLink> 
                <NavLink to="/about" className="btn btn-outline-primary">About</NavLink> 
            </div>
        </nav>
    );
};

export default Navbar; // Exporta el componente Navbar
