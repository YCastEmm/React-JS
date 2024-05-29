import { useEffect, useState } from "react"
import Links from "../components/Links"
import { useUserContext } from "../context/UserContext"
import useGetLinks from "../hooks/useGetLinks"
import Buscador from "../components/Buscador"

let Dashboard = () =>{

    const {user} = useUserContext()
    const {datos, error, loading} = useGetLinks("links_id");
    const [links, setLinks] = useState(null);

    useEffect(() => {
        if (datos) {
            setLinks(datos);
            console.log(datos);
        }
    }, [datos]);

    if (error) {
        return <h1>Ha ocurrido un error al cargar los links</h1>;
    }

    if (loading) {
        return <h2>Cargando...</h2>;
    }

    let filtrarElementos = (input) => {
        let filtro = datos.filter((data) => data.name.match(input));
        if (input != "") {
            console.log(filtro);
            setLinks(filtro);
        } else {
            setLinks(datos);
        }
    };


    return <main className="container mx-auto">
                <h2>Dashboard</h2>
                <h3>Bienvenido {user.displayName}</h3>
                {user.email === "yair.castagnola@gmail.com" ?  <h1>Taras para Yair</h1> : <h1>Tareas para X28</h1>}
                <Buscador filtrarElementos={filtrarElementos}></Buscador>

                <Links links={links}></Links>
            </main>
}

export default Dashboard