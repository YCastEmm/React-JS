import "./App.css";
import Card from "./components/Card";
import Layout from "./pages/Layout";
import Header from "./components/Header";
import Search from "./components/Search";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";


function App() {
    
    let [data, setData] = useState(null)

    let {datos, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts')

    useEffect(() => {
        if (datos) {
            setData(datos.record);
        }
    }, [datos]);
    
    if (error) {
        return <h3 className="text-danger m-4">Ha ocurrido un error inesperado.</h3>
    }

    if (loading){
        console.log(datos);
        return <h3  className="text-primary">Cargando...</h3>
    }
    
    if (data) {
        console.log(datos);
        return (
            <>
                <Header></Header>
                <Search/>
                <Layout>
                    {
                        data.map(dato =>(
                            <Card title={dato.nombre} url={dato.url} description={dato.descripcion}  />
                        ))
                    }
                </Layout>
            </>
        );
    }   
}

export default App;
