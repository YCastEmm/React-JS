import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import { Tasks } from "./components/Tasks";

let inicialState = localStorage.getItem("tareas") ? JSON.parse(localStorage.getItem("tareas")) : [];

function App() {
    let [tasks, setTask] = useState(inicialState);


    useEffect(() =>{
        localStorage.setItem("tareas", JSON.stringify(tasks))
    },[tasks])


    // Utilizamos la lógica en el componente que envuelve a los "task" en lugar de hacerlo directamente en el formulario.
    // Pasamos las acciones necesarias al componente mediante props.

    // Esta funcion copia todas las tareas que existen actualmente y sumamos la nueva tarea
    let añadirTarea = (tarea) => {
        setTask([...tasks, tarea]);
    };    

    //La función borrarTarea filtra las tareas del array tasks para remover aquella cuyo ID coincida con el proporcionado, luego actualiza el estado de las tareas.
    let borrarTarea = (id) => {
        let nuevoArray = tasks.filter((tarea) => tarea.id !== id);

        setTask(nuevoArray);
    };

    // La función modificarTarea cambia el estado de una tarea identificada por su id en el array tasks. Si la tarea tiene el mismo id, su estado se invierte y luego se actualiza el array de tareas mediante setTask.
    let actualizarTarea = (id) => {
        let nuevoArray = tasks.map((tarea) => {
            if (tarea.id === id) {
                tarea.state = !tarea.state;
            }
            return tarea;
        });

        setTask(nuevoArray);
    };

    // La función ordenarTareas ordena un array de tareas según su prioridad, colocando primero las tareas con prioridad true y luego las de prioridad false, utilizando el método sort() de JavaScript.
    let ordenarTaras = (tareas) => {
        return tareas.sort((a, b) => {
            if (a.priority === b.priority) return 0;
            if (a.priority === true) return -1;
            if (a.priority === false) return 1;
        });
    };

    // console.table(tasks)

    return (
        <div className="container mb-2">
            <h1 className="mt-3">Formulario de tareas</h1>
            <Formulario añadirTareaProp={añadirTarea}></Formulario>
            {/* Mando el task como prop */}
            <Tasks propTask={ordenarTaras(tasks)} propBorrarTarea={borrarTarea} propModificarTarea={actualizarTarea}></Tasks>
        </div>
    );
}

export default App;
