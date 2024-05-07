import "./App.css";
import Card from "./components/Card";
import Layout from "./pages/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

import SearchBar from "./components/SearchBar";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
import CreateLink from "./components/CreateLink";
import RestoreCards from "./components/RestoreCards";

function App() {
    let [data, setData] = useState(null);

    let { datos, loading, error } = useFetch("https://api.npoint.io/f07b16d06daf2c1fa1db");

    useEffect(() => {
        if (datos) {
            setData(datos);
        }
    }, [datos]);

    if (error) {
        return <h3 className="text-danger m-4">Ha ocurrido un error inesperado.</h3>;
    }

    if (loading) {
        return <h3 className="text-primary">Cargando...</h3>;
    }

    let filtrarElementos = (busqueda) => {
        let filtro = datos.filter((dato => dato.nombre.match(busqueda)))
        if (busqueda != "") {
            setData(filtro);
        } else{
            setData(datos)
        }
    };

    let agregarTarjeta = (titulo, link) =>{
        let nuevoObjeto = {nombre: titulo, descripcion: "descripcion", url: link}
        console.log(nuevoObjeto);
        //let nuevoArrayData = data.push(nuevoObjeto)
        setData([...data, nuevoObjeto])
        //setData(...data, data.push(nuevoObjeto))
    }

    let restaurarTarjetas = () => {
        setData(datos)
    }


    if (data) {
        return (
            <>
                <Header></Header>
                <CreateLink agregarTarjeta={agregarTarjeta}></CreateLink>
                <SearchBar filtrarElementos={filtrarElementos} />
                <RestoreCards restaurarTarjetas={restaurarTarjetas}></RestoreCards>
                <Layout>
                    {data.map((dato) => (
                        <Card title={dato.nombre} url={dato.url} description={dato.descripcion} />
                    ))}
                </Layout>

                <Footer />
            </>
        );
    }
}

export default App;
