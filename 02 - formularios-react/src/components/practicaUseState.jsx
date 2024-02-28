import { useState } from "react"




let ListaElementos = () =>{


    let [listado, inicializarListado] = useState( [3, 13, 19])

    let handleClick = () =>{
        inicializarListado((listado.map((elemento) => elemento <= 1000 ? (elemento * elemento).toFixed(2) : (elemento - elemento / 2).toFixed(2))))
    }

    return  <div>

                <ul className="mt-3">
                    <li>{listado[0]}</li>
                    <li>{listado[1]}</li>
                    <li>{listado[2]}</li>
                </ul>
                <button onClick={handleClick} className="btn btn-info">Modificar Lista</button>


            </div>

}



export default ListaElementos