import { useLoaderData } from "react-router-dom"; // Importa el hook useLoaderData de react-router-dom

// Componente funcional Posts que muestra los detalles de una publicación
let Posts = () => {
    let { post } = useLoaderData(); // Obtiene los datos de la publicación utilizando el hook useLoaderData

    console.log(post); // Imprime los detalles de la publicación en la consola
    return (
        <div className="container mt-5">
            <h3 className="mb-4 text-capitalize">{post.title}</h3> {/* Muestra el título de la publicación */}
            <p>{post.body}</p> {/* Muestra el cuerpo de la publicación */}
        </div>
    );
};

export default Posts; // Exporta el componente Posts

// Función asincrónica LoaderPosts que carga los datos de una publicación utilizando el parámetro id
export let LoaderPosts = async ({ params }) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`); // Realiza una solicitud GET para obtener los detalles de la publicación
    let post = await res.json(); // Convierte la respuesta en formato JSON

    if (!res.ok) throw ({ // Si la solicitud no es exitosa, lanza un error con el estado y el mensaje correspondiente
        status: res.status,
        statusText: "No encontrada"
    });
    
    return { post }; // Retorna los datos de la publicación
};
