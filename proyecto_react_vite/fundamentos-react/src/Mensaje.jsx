/*
    Enunciado del ejercicio:

    Crea un componente de React llamado Mensaje. Este componente debe tener una variable de estado llamada mostrarMensaje. Dependiendo del valor de mostrarMensaje, el componente debe mostrar uno de dos mensajes diferentes:

    Si mostrarMensaje es true, mostrar el mensaje "Este es un mensaje de bienvenida. ¡Hola mundo!".
    Si mostrarMensaje es false, mostrar el mensaje "El mensaje está oculto.".
 */ 

    let mostrarMensaje = true

    let ElementoH1 = ({children}) =>{
        return <h1>{children}</h1>
    }

    let mensajeTrue = "Este es un mensaje de bienvenida"
    let mensajeFalse = "El mensaje está oculto"


    export let Mensaje = () =>{
        return <>
                { mostrarMensaje ? <ElementoH1>{mensajeTrue}</ElementoH1> : <ElementoH1>{mensajeFalse}</ElementoH1>}
                </>
    }