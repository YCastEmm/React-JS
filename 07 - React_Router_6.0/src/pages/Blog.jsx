import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


const Nosotros = () => {
    let { datos, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

    if (error) {
        return <h5 className="text-danger">{error}</h5>;
    }

    if (loading) {
        return <h5 className="text-success">Cargando...</h5>;
    }

    return (
        <>
            <h1>Blog</h1>

        
            <ul className="list-group">
            {datos.slice(0, 5).map((data) => ( //Hago un slice sobre datos que devuelve solo los primeros 5 elementos y después hago un map sobre ese array de 5 elementos
                <Link dataprop={data} key={data.id} to={`/blog/${data.id}`} className="list-group-item">{data.title}</Link>
            ))}
            </ul>
            
        </>
    );
};

export default Nosotros;
