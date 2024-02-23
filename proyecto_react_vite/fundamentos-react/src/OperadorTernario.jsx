/*
    Renderizado condicional#
    condicional: En React, puedes crear distintos componentes que encapsulan el comportamiento que necesitas. Entonces, puedes renderizar solamente algunos de ellos, dependiendo del estado de tu aplicación.


    Sintaxis: { variable ? valorSiTrue : valorSiFalse } (el : funciona como un else)

    { user ? <Ok /> : <Error />}

*/


/* Vite permite importar un recurso (en este caso una imagen) para hacer más facil el tema de traerse la ruta*/ 
import imagenImportadaPath from "./img/img_1.jpg"
import { Fragment } from "react"

let userLog = "¿El usuario está logueado?"
let claseSection = "seccion"
let user = true
let imagenPath = "/src/img/img_1.jpg"

let Ok = () =>{
    return <h4>El user está logueado</h4>
}

let Error = () =>{
    return <h4>El user <b>no</b> está logueado</h4>
}

let Imagen = () =>{
    return <img src={imagenImportadaPath} alt="" />
}

export let OperadorTernario = () =>{
    return <Fragment>
                <section className={claseSection}>
                    <h2>{userLog}</h2>
                    
                    <img src={imagenPath} alt="" />

                    { user ? <Ok /> : <Error />}

                </section>

            </Fragment>
}


/* 
    ¿Qué pasa si omitimos 'else'?

    Podemos utilizar el operador lógico AND (&&)
    Este operador lógico compara dos expresiones.
    Si la primera se evalúa como "true", la sentencia devolverá el valor de la segunda expresión.
    Si la primera expresión se evalúa como "false", la sentencia devolverá el valor de la primera expresión, en nuestro caso false.
    jsx
    {
        user && <UserMessage />;
    }
    Si la condición es true, el elemento justo después de && aparecerá en el resultado. Si es false, React lo ignorará.
*/


export let OperadorTernarioAnd = () =>{
    return <Fragment>
                <section className={claseSection}>
                    <h2>{userLog}</h2>
                    
                    
                    { user && <Imagen /> }

                </section>

            </Fragment>
}