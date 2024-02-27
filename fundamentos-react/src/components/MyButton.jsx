let BotonConsoleClick = ({texto}) =>{

    let ManejarClick = (text) =>{
        console.log(text);
    }

    return <button onClick={() =>ManejarClick(texto)}>{texto}</button>
}

export default BotonConsoleClick