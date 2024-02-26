import { useState } from "react"

let ButtonState = () =>{

    // useState devuelve dos valores, el estado actual y una función que lo modifica
    // let estado = useState(1)
    // let useStateEstadoActual = estado[0]
    // let useStateFunction = estado[1]

    // Lo mismo que arriba pero desestructurado
    let [count, setCount] = useState(0)


    let manejarClick = () =>{    
        console.log(count);
        console.log(setCount);
        setCount(count + 1)
    }

    return <button onClick={() => manejarClick()}>{`Button State ${count}`}</button>

}

export default ButtonState