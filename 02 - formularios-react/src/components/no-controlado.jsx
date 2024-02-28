import { useRef, useState } from "react";

export let NoControlado = () => {

    /*  • useRef se utiliza para hacer referencia a un elemento DOM o a un valor mutable dentro de un componente funcional de React.
        • En lugar de usar referencias directas al DOM como document.getElementById en JS, useRef proporciona una forma segura de acceder a los nodos del DOM y otros valores   que persisten a lo largo del ciclo de vida del componente.
        • useRef devuelve un objeto ref con la propiedad "current" establecida inicialmente con el valor inicial que proporcionaste.
    */

    let formulario = useRef(null)

    // Useo un useState para generar un mensaje de error
    let [error, setError] = useState("")
    

    let manejarClic = (e) =>{
        // Se previene el comportamiento por default del formulario pasando el evento submit como argumento y ejecutando la función preventDefault()
        e.preventDefault()
        
        // Al inicio borro todo el contenido de setError, para dejarlo en blanco
        setError("")

        // Como useRef siempre devuelve un objeto con la propiedad current, debo acceder a ella
        console.log(formulario.current);

        // Uso el método new FormData para levantar los datos del formulario
        let data = new FormData(formulario.current)

        // Cuando se combina entries() con el operador de propagación ..., lo que sucede es que el iterable devuelto por entries() se descompone en elementos individuales y se pasa como argumentos separados a la función console.log()
        console.log(...data.entries());

        // Para que sea más fácil de leer los datos, llamo al objeto global de Object que tiene el método fromEntries()
        let dataObjeto = Object.fromEntries(data)
        console.log(dataObjeto)
        

        let {titulo, descripcion, state} = dataObjeto


        // Valido los datos

        if (!titulo.trim() || !descripcion.trim() || !state.trim()) return setError(<p className="d-block mt-2 text-danger">Ha ocurrido un error al procesar la solicitud.</p>)

        // Desestructuro el dataObjeto
        console.log(titulo, descripcion, state);
        
    }



    return (

        // ref: este atributo es el que se encarga de pasar la referencia al useRef
        // onSubmit: En React, el evento onSubmit pasa automáticamente el evento como parámetro, sin necesidad de pasarlo al llamar a maneraClic()
        <form onSubmit={manejarClic} ref={formulario}>
            <input 
                type="text" 
                placeholder="Ingresá la tarea" 
                className="form-control mb-2 mt-4 "
                name="titulo"
            />
            <textarea 
                className="form-control mb-2" 
                placeholder="Ingresá la descripción" 
                name="descripcion"
            />
            <select name="state" id="" className="form-select mb-2">
                <option value="Pendiente">Pendiente</option>
                <option value="Completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">
                Aceptar
            </button>
            {
                error !== "" && error
            }
        </form>
    );
};

// El atributo name es necesario para recopilar los datos mediante formData
// Para mostrar un texto dentro del textarea en JSX se debe ingresar el mismo en el atributo value