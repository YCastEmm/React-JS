import { useRef, useState } from "react";


let titulo = "Práctica con useState"
let numeroPar = "El número es par"
let numeroImpar = "El número es impar"


export let BotonContador = () => {
    let [contador, setearContador] = useState(0);

    let parrafo = useRef("");

    let handleClick = () => {
        setearContador(contador + 1);

        let { current } = parrafo;

        console.log(current);
    };

    return (
        <div className="bg-success p-2 text-dark bg-opacity-10 mt-2 rounded p-3">
            <h2>{titulo}</h2>
            <button className="btn btn-warning mt-3" onClick={handleClick}>
                Sumar numero
            </button>
            <h2 className="mt-3">{contador}</h2>

            <p ref={parrafo}>
                {
                    contador % 2 === 0 ?  numeroPar : numeroImpar
                }
            </p>
                
            
        </div>
    );
};
