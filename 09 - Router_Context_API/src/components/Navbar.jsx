import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

// La Context API en React permite compartir datos entre componentes a diferentes niveles de la jerarquía, evitando la prop drilling. Esto simplifica la gestión del estado global de la aplicación y reduce la complejidad del código al eliminar la necesidad de pasar props manualmente a través de múltiples niveles de componentes. En resumen, ofrece una forma más eficiente y limpia de compartir datos y manejar el estado en una aplicación React.

// Usualmente, la API de contexto se utiliza de la siguiente manera:

// Crear un contexto: Primero, se define un contexto utilizando la función createContext(). Este contexto actúa como un contenedor para los datos que se desean compartir entre componentes.
// Proveer el contexto: Luego, se utiliza un componente proveedor (Provider) para envolver el árbol de componentes en el nivel superior de la aplicación. Este proveedor toma los datos que se desean compartir y los hace accesibles para todos los componentes descendientes.
// Consumir el contexto: Por último, en los componentes que necesitan acceder a los datos del contexto, se utiliza el componente consumidor (Consumer) o el hook useContext() para acceder a los datos proporcionados por el proveedor.

let Navbar = () => {
    // Este sería un miniHook que creé en UserContext
    let { user, setUser } = useUserContext();

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {user && (
                <>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <button onClick={() => setUser(false)}>Logout</button>
                </>
            )}
        </nav>
    );
};

export default Navbar;
