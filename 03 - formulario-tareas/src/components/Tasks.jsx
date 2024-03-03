import { ItemTarea } from "./Li";



// en los parámetros accedo al propTask dentro de todos los prop que recibe la función
export let Tasks = ( {propTask, propBorrarTarea, propModificarTarea} ) => {
    return (
        <div>
            <h2 className="text-center">Tareas</h2>
            <ul className="list-group">
                {propTask.map((tarea) => (
                    <ItemTarea propTarea = {tarea} propBorrarTarea = {propBorrarTarea} propModificarTarea={propModificarTarea} key = {tarea.id} />
                ))}
                {
                    propTask.length === 0 && <li className="list-group-item text-center p-3 text-secondary bg-light">Sin tareas</li>
                }
            </ul>
        </div>
    );
};

// La asignación de la key debe realizarse en los elementos directamente dentro de un iterador, en este caso, donde se está utilizando .map() para renderizar múltiples elementos ItemTarea. ¡Los elementos JSX directamente dentro de una llamada a un map() siempre necesitan keys!
// Las keys le indican a React que objeto del array corresponde a cada componente, para así poder emparejarlo más tarde. 