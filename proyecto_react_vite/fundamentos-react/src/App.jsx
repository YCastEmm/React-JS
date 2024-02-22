/* El código JSX parece HTML pero no lo es, es en realidad JavaScript + XML*/
/* Los nombres de los componentes deben comenzar con mayuscula */
/* Los elementos debes estar contenido por otro elemento, no pueden estar flotando */

import { Fragment } from "react"

/* Conteniendo los elementos con un div*/
/* Este componente se exporta por defecto abajo */
let App = () =>{
    return  <div className="div">
                <h1 className="text-center">Hola soy React.JS</h1>
                <p>tres elementos de react dentro de un div</p>
                <img src="https://picsum.photos/100/100" alt="" />
            </div>
}


/* Usando un fragment para contener elementos (la forma más fácil) */
/* En este componente se declara el export y luego en app.jsx se hace el import y se dice que componente se importa */
export let Seccion = ()=>{
    return  <>
                <div>
                    <p>Este fragment se hizo con &lt;&gt;&lt;/&gt;</p>
                </div>
                <img className="imagen" src="https://picsum.photos/100/100" alt="" />
            </>
}


/* Usando un fragment para contener elementos*/
/* En este componente se declara el export y luego en app.jsx se hace el import y se dice que componente se importa */
export let FragmentImportado = ()=>{
    return  <Fragment>
                <div>
                    <p>Este fragmente está hecho con &lt;React.Fragment&gt;&lt;/React.Fragment&gt; (previamente importado desde react</p>
                </div>
                <img className="imagen" src="https://picsum.photos/100/100" alt="" />
            </Fragment>
}








export default App