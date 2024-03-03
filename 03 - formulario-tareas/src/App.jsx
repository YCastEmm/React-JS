import { useState } from "react";
import Formulario from "./components/Formulario";
import { Tasks } from "./components/Tasks";


let inicialState = [
  {
    id: 1,
    title: "Tarea #01", 
    description: "Descripción #01", 
    state: true, 
    priority: false,
  }, 
  {
    id: 2,
    title: "Tarea #02", 
    description: "Descripción #02", 
    state: false, 
    priority: true,
  }, 
  {
    id: 3,
    title: "Tarea #03", 
    description: "Descripción #03", 
    state: true, 
    priority: false,
  }, 
  
]

function App() {


  let [tasks, setTask] = useState(inicialState)

  // Utilizamos la lógica en el componente que envuelve a los "task" en lugar de hacerlo directamente en el formulario.
  // Pasamos las acciones necesarias al componente mediante props.
  // Esta funcion copia todas las tareas que existen actualmente y sumamos la nueva tarea
  let añadirTarea = (tarea) =>{
    setTask([...tasks, tarea])
  }


  //La función borrarTarea filtra las tareas del array tasks para remover aquella cuyo ID coincida con el proporcionado, luego actualiza el estado de las tareas.
  let borrarTarea = (id) =>{
    let nuevoArray = tasks.filter( tarea => tarea.id !== id )

    setTask(nuevoArray)
  }

  console.table(tasks)

  return (
    <div className="container mb-2">
      <h1 className="mt-3">Formulario de tareas</h1>
      <Formulario añadirTareaProp={añadirTarea}></Formulario>
      {/* Mando el task como prop */} 
      <Tasks propTask={tasks} propBorrarTarea ={borrarTarea}></Tasks>
    </div>
  )
}

export default App
