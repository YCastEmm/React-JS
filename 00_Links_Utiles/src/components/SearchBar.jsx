import { useRef } from "react";

let Search = ({filtrarElementos}) => {

    let inputRef = useRef()
    

    let handleSubmit = (e) =>{
        e.preventDefault()
        console.log(inputRef.current.value.trim());
        filtrarElementos(inputRef.current.value.trim())
    }

    let handleChange = () =>{
        console.log(inputRef.current.value.trim());
        filtrarElementos(inputRef.current.value.trim())
    }
    


    return (
        <form onSubmit={handleSubmit} className="container mt-2">
            <input onChange={handleChange} ref={inputRef} className="rounded-pill" type="search" placeholder="Ingresá lo que quieras buscar" />
            <button className="botonBusqueda" onClick={handleSubmit}>Buscar</button>
        </form>
    );
};

export default Search;
