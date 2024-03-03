import { useState } from "react";
import Swal from "sweetalert2";


// Levanto el valor de añadirTarea dentro de los props que se pasan a Formulario
let Formulario = ({añadirTareaProp}) => {

    let [task, setTask] = useState({ title: "", description: "", state: "Pendiente", priority: false });

    let manejarClic = (e) => {
        e.preventDefault();
        let { title, description, state, priority, id } = task;

        // Si el titulo o descripción quedan vacíos, uso un alert de la biblioteca SweetAlert, para mostrar un mensaje.
        // En JavaScript, si una cadena está vacía, se evalúa como falso en un contexto booleano. 
        if (!title.trim() || !description.trim()) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Debés completar todos los campos.",
            });
            return;
        }

        console.table({
            Id: id,
            Nombre: title,
            Descripción: description,
            Prioridad: priority,
            Estado: state,
        });

        // Esta función pasó por argumento. La ejecutamos pasandole como argumentos los valores que ingresamos en el formulario. 
        // Copio lo que está en task y además sumo un valor de ID con la función Date.now() que devuelve un numero desde 1970 en milesimas de segundo
        // Por último también convierto el state en true si el valor es "Completado" y en false si no lo es.
        añadirTareaProp(
            {
                id: Date.now(),
                // En un operador ternarios, si se devuelve directamente un true, no hace falta agregar el resto de la lógica.
                state: state === "Completado",
                ...task
            }
        )

        Swal.fire({
            position: "center",
            icon: "success",
            title: "La tarea ha sido agregada",
            showConfirmButton: false,
            timer: 1000
          });


    };

    // La función handleChange actualiza el estado task con el valor actualizado del campo de entrada que cambió, utilizando el nombre del campo como clave.
    let handleChange = (e) => {
        let { name, type, checked, value } = e.target;

        setTask({
            ...task,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <form onSubmit={manejarClic}>
            <input
                type="text"
                placeholder="Ingresá la tarea"
                className="form-control mb-2 mt-4 "
                name="title"
                // El value permite pasar el valor del input
                value={task.title}
                onChange={handleChange}
            />
            <textarea className="form-control mb-2" placeholder="Ingresá la descripción" name="description" value={task.description} onChange={handleChange} />
            <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    name="priority"
                    id="inputCheckbox"
                    checked={task.priority}
                    onChange={handleChange}
                    // Este codigo se agregó directamente al handleChange
                    // onChange={(e) => setTask({...task, priority: e.target.checked})}
                />
                <label htmlFor="inputCheckbox">Alta prioridad</label>
            </div>
            <select name="estado" id="" className="form-select mb-2" value={task.state} onChange={handleChange}>
                <option value="Pendiente">Pendiente</option>
                <option value="Completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">
                Agregar tarea
            </button>
        </form>
    );
};

export default Formulario;
