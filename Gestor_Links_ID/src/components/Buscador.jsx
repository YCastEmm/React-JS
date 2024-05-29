import { useRef } from "react";

let Buscador = ({filtrarElementos}) => {

    const inputRef =  useRef()

    let handleChange = () =>{
        let busqueda = inputRef.current.value
        filtrarElementos(busqueda)
    }

    return (
        <form action="">
            <input onChange={handleChange} ref={inputRef} placeholder="Ingresá el nombre del link que querés encontrar"></input>
        </form>
    );    
};


export default Buscador