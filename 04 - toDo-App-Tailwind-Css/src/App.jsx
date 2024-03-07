import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import TareaComputed from "./components/tareaComputed";
import TareaCreate from "./components/tareaCreate";
import TareaFilter from "./components/tareaFooter";
import TareaList from "./components/tareaList";

let inicialStateTareas = [
    {
        id: 1,
        title: "Ponerse a estudiar",
        completed: false,
    },
    {
        id: 2,
        title: "Vacuna Berta",
        completed: false,
    },
    {
        id: 3,
        title: "Comprar avena",
        completed: false,
    },
    {
        id: 4,
        title: "Fecha parcial base de datos",
        completed: false,
    },
];

let App = () => {
    let [tareas, setTareas] = useState(inicialStateTareas);

    let cantidadTareas = tareas.length


    let nuevaTarea = (title) => {
        let nuevaTarea = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTareas([...tareas, nuevaTarea]);
    };

    let borrarTareas = (id) =>{
        let nuevoArray = tareas.filter( (tarea) => tarea.id !== id )
        setTareas(nuevoArray)
    }
    
    

    return (
        <>
            <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat font-custom">
                <Header />

                <main className="josefinFont container mx-auto mt-4 px-4">
                    <TareaCreate nuevaTareaProp={nuevaTarea} />

                    {/* {TareaList TareaUpdate y TareaDelete} */}
                    <TareaList tareasProp={tareas} borrarTareasProp={borrarTareas} />

                    {/* {TareaComputed} */}
                    <TareaComputed contarTareasProp = {cantidadTareas} />

                    {/* {TareaFilter} */}

                    <TareaFilter />
                </main>

                <Footer />
            </div>
        </>
    );
};

export default App;
