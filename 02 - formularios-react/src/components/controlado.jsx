export let Controlado = () => {

    let manejarClic = (e) =>{
        // Se previene el comportamiento por default del formulario pasando el evento submit como argumento y ejecutando la función preventDefault()
        e.preventDefault()        
    }



    return (

        <form onSubmit={manejarClic}>
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
        </form>
    );
};

// El atributo name es necesario para recopilar los datos mediante formData
// Para mostrar un texto dentro del textarea en JSX se debe ingresar el mismo en el atributo value