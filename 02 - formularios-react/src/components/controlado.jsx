import { useState } from "react";

export let Controlado = () => {

    // let [title, setTitle] = useState("Valor inicial de titulo pasado por useState");
    // let [description, setDescription] = useState("Valor inicial de descripción pasado por useState");
    // let [estado, setEstado] = useState("Valor inicial de estado pasado por useState");

    let [task, setTask ] = useState({ title: "", description: "", estado:"Pendiente", priority: false})


    let manejarClic = (e) => {
        // Se previene el comportamiento por default del formulario pasando el evento submit como argumento y ejecutando la función preventDefault()
        e.preventDefault();
        let {title, description, estado, priority} = task
        console.table({
            "Nombre": title,
            "Descripción": description,
            "Prioridad": priority,
            "Estado": estado,
        });
    };

    // La función handleChange actualiza el estado task con el valor actualizado del campo de entrada que cambió, utilizando el nombre del campo como clave.
    let handleChange = (e) =>{       
        
        let {name, type, checked, value} = e.target

        
        setTask(
            {
                ...task,
                [name] : type === "checkbox" ? checked : value
            }
        )
    }

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
            <textarea
                className="form-control mb-2"
                placeholder="Ingresá la descripción"
                name="description"
                value={task.description}
                onChange={handleChange}
            />
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
            <select
                name="estado"
                id=""
                className="form-select mb-2"
                value={task.estado}
                onChange={handleChange}
            >
                <option value="Pendiente">Pendiente</option>
                <option value="Completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">
                Aceptar
            </button>
        </form>
    );
};

// El atributo name es necesario para recopilar los datos mediante formData
// Para mostrar un texto dentro del textarea en JSX se debe ingresar el mismo en el atributo value
