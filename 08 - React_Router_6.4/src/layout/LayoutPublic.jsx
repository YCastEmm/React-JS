import { Outlet, useNavigation } from "react-router-dom"; // Importa el componente Outlet y el hook useNavigation de react-router-dom
import Navbar from "../components/Navbar"; // Importa el componente Navbar desde la carpeta components

// Componente funcional LayoutPublic que define el diseño público de la aplicación
let LayoutPublic = () => {
    let navigation = useNavigation(); // Obtiene la navegación actual utilizando el hook useNavigation

    return (
        <>
            <Navbar></Navbar> {/* Muestra el componente Navbar para la navegación */}
            {navigation.state === "loading" && ( // Muestra un mensaje de carga si el estado de la navegación es "loading"
                <div className="alert alert-info container">Loading...</div>
            )}
            <div className="container">
                <Outlet></Outlet> {/* Renderiza el contenido de las rutas anidadas */}
            </div>
            <footer className="container text-center">Footer</footer> {/* Muestra el pie de página de la aplicación */}
        </>
    );
};

export default LayoutPublic; // Exporta el componente LayoutPublic
