import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import TareaComputed from "./components/tareaComputed";
import TareaCreate from "./components/tareaCreate";
import TareaFilter from "./components/tareaFooter";
import TareaList from "./components/tareaList";

let inicialStateTareas = localStorage.tareas ? JSON.parse(localStorage.tareas) : [];

let App = () => {
    let [tareas, setTareas] = useState(inicialStateTareas);

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    let cantidadTareas = tareas.filter((tarea) => !tarea.completed).length;

    let nuevaTarea = (title) => {
        let nuevaTarea = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTareas([...tareas, nuevaTarea]);
    };

    let [filter, setFilter] = useState("all");

    let changeFilter = (filter) => setFilter(filter);

    let tareasFiltradas = () => {
        switch (filter) {
            case "all":
                return tareas;
            case "active":
                return tareas.filter((tareas) => tareas.completed === false);
            case "completed":
                return tareas.filter((tareas) => tareas.completed === true);
            default:
                return tareas;
        }
    };

    let borrarTareas = (id) => {
        let nuevoArray = tareas.filter((tarea) => tarea.id !== id);
        setTareas(nuevoArray);
    };

    let updateTarea = (id) => {
        setTareas(tareas.map((tarea) => (tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea)));
    };

    let borrarCompletadas = () => {
        setTareas(tareas.filter((tarea) => tarea.completed === false));
    };

    return (
        <>
            <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat font-custom transition-all duration-300 md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-gray-900  dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
                
                <Header />

                <main className="josefinFont container mx-auto mt-4 px-4 md:max-w-xl">
                    <TareaCreate nuevaTareaProp={nuevaTarea} />

                    {/* {TareaList TareaUpdate y TareaDelete} */}
                    <TareaList tareasProp={tareasFiltradas()} borrarTareasProp={borrarTareas} updateTareaProp={updateTarea} />

                    {/* {TareaComputed} */}
                    <TareaComputed contarTareasProp={cantidadTareas} borrarCompletadasProp={borrarCompletadas} />

                    {/* {TareaFilter} */}

                    <TareaFilter changeFilterProp={changeFilter} filterProp={filter} />
                </main>

                <Footer />
            </div>
        </>
    );
};

export default App;
