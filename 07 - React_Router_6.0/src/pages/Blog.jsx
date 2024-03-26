import { Link, useSearchParams } from "react-router-dom";
import { useRef } from "react";
import { useFetch } from "../hooks/useFetch";

const Nosotros = () => {

    // useSearchParams es un hook proporcionado por la librería react-router-dom que permite acceder y modificar los parámetros de búsqueda de la URL en un componente de React. Funciona devolviendo un objeto que representa los parámetros de búsqueda presentes en la URL, así como una función para actualizar esos parámetros. Esto facilita la creación de componentes interactivos que responden a cambios en los parámetros de búsqueda de la URL.

    // Obtener los parámetros de búsqueda de la URL
    let [searchParams, setSearchParams] = useSearchParams();

    // Referencia al input para acceder a su valor
    let input = useRef("");

    // Manejar el cambio en el input de búsqueda
    let handleChange = (e) => {
        let filter = e.target.value;

        // Actualizar los parámetros de búsqueda en la URL
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    };

    // Obtener los datos utilizando el hook personalizado useFetch
    let { datos, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

    // Si los datos están cargando, mostrar un mensaje de carga
    if (loading) {
        return <h6 className="text-primary">Cargando</h6>;
    }

    // Si hay un error, mostrar un mensaje de error
    if (error) {
        return <h6 className="text-danger">Hubo un error</h6>;
    }

    return (
        <>
            {/* Input para la búsqueda */}
            <input
                type="text"
                onChange={handleChange}
                ref={input}
                className="form-control"
                value={searchParams.get("filter") || ""} 
            />
            {/* Lista de resultados filtrados */}
            <ul className="list-group">
                {datos
                    // Filtrar los datos según el parámetro de búsqueda proporcionado en la URL
                    .filter((dato) => {
                        // Obtener el valor del filtro de los parámetros de búsqueda
                        let filtro = searchParams.get("filter");

                        // Si no hay filtro, mostrar todos los datos
                        if (!filtro) return true;

                        // Convertir el título del dato a minúsculas para una comparación insensible a mayúsculas y minúsculas
                        let name = dato.title.toLowerCase();

                        // Retornar true si el título incluye el filtro (ignorando mayúsculas y minúsculas), de lo contrario, false
                        return name.includes(filtro.toLowerCase());
                    })
                    // Limitar la lista de resultados a los primeros 5 elementos
                    .slice(0, 5)
                    // Mapear cada dato filtrado a un elemento de enlace
                    .map((data) => (
                        <Link dataprop={data} key={data.id} to={`/blog/${data.id}`} className="list-group-item">
                            {data.title}
                        </Link>
                    ))}
            </ul>
        </>
    );
};

export default Nosotros;
