/* 
    En React, onClick es un prop especial que se utiliza para manejar eventos de clic en elementos JSX. Cuando asignas una función a onClick, le estás diciendo a React que ejecute esa función cuando el elemento asociado reciba un clic del usuario. 
*/



let MiBoton = ({texto}) =>{

    let ManejarClick = (text) =>{
        console.log(text);
    }

    // En React, para pasar un parámetro a una función que se ejecutará en respuesta a un evento, como un clic de botón (onClick), se utiliza una función flecha anónima para envolver la llamada a la función deseada. 
    // Esto evita que la función se ejecute inmediatamente durante la renderización del componente y asegura que solo se llame cuando ocurra el evento de clic. Por lo tanto, la función flecha anónima actúa como un intermediario entre el evento y la función que se quiere ejecutar.

    return <button onClick={() =>ManejarClick(texto)}>{texto}</button>
}




export let ElementoBoton = () =>{
    return <>
                <div className="div">
                    <MiBoton texto="Boton 1"></MiBoton>
                    <MiBoton texto="Boton 2"></MiBoton>
                    <MiBoton texto="Boton 3"></MiBoton>        
                </div>
            </>
}