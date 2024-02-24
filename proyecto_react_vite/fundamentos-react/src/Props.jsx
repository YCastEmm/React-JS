/* 
    En React, un "prop" es simplemente un atributo que se pasa de un componente padre a un componente hijo. Los props son datos que pueden ser pasados de forma unidireccional (del componente padre al componente hijo) y son inmutables, lo que significa que el hijo no puede modificar directamente los props que recibe.
    La forma de pasar los props es simplemente agregandolos al tag como si fueran un atributo más y especificando el valor: <buttonConProp texto="Botón 1"></buttonConProp>
*/

let titulo = "El texto del button se pasó por prop"

let variableButton = true

/* El argumento va a ser el primer prop pasado desde el tag, en test caso texto="" */
let ButtonConProp = (prop) =>{
    return <button>{prop.texto}</button>
}


export let ElementoProp = () =>{
    return  <>
                <section className="seccion">
                    <h3>{titulo}</h3>
                    <ButtonConProp texto="Botón 1"></ButtonConProp>
                    <ButtonConProp texto="Botón 2"></ButtonConProp>
                    <ButtonConProp texto="Botón 3"></ButtonConProp> 
                    {variableButton && <p>La variable es verdadera</p>}         
                </section>              
            </>

}