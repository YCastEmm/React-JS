import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


let EntradaBlog = () =>{
    let params = useParams()

    let { datos, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    if (error) {
        return <h5 className="text-danger">{error}</h5>;
    }

    if (loading) {
        return <h5 className="text-success">Cargando...</h5>;
    }

    return <div>

                <h4>{datos.title}</h4>
                <p>{datos.body}</p>
                <Link className="btn btn-secondary" to="/blog">Volver</Link>

            </div>
}

export default EntradaBlog