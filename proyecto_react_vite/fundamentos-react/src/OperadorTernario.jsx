/*
    Renderizado condicional#
    condicional: En React, puedes crear distintos componentes que encapsulan el comportamiento que necesitas. Entonces, puedes renderizar solamente algunos de ellos, dependiendo del estado de tu aplicación.


    Sintaxis: { variable ? valorSiTrue : valorSiFalse } (el : funciona como un else)

    { user ? <Ok /> : <Error />}

*/


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
*/


import { Fragment } from "react"

let userLog = "¿El usuario está logueado?"
let claseSection = "seccion"

let user = true


let Ok = () =>{
    return <h4>El user está logueado</h4>
}

let Error = () =>{
    return <h4>El user <b>no</b> está logueado</h4>
}

export let OperadorTernario = () =>{
    return <Fragment>
                <section className={claseSection}>
                    <h2>{userLog}</h2>
                    
                    { user ? <Ok /> : <Error />}

                </section>

            </Fragment>
}