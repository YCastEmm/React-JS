import { useRouteError, Link } from "react-router-dom";

// Componente funcional NotFound que se renderiza cuando se produce un error en la carga de la ruta
let NotFound = () => {

    // Hook useRouteError utilizado para obtener detalles del error de carga de la ruta
    let errorDeCarga = useRouteError();
    console.log(errorDeCarga);

    // Retorna la estructura JSX del componente NotFound
    return (
        <div className="container">
            {/* Muestra el estado del error de carga */}
            <h2>{errorDeCarga.status}</h2>
            {/* Muestra el mensaje de texto del error de carga */}
            <h2>{errorDeCarga.statusText}</h2>
            {/* Enlace para volver a la página principal */}
            <Link to="/">Volver a Home</Link>
        </div>
    );
}

// Exporta el componente NotFound para ser utilizado en otras partes de la aplicación
export default NotFound;
