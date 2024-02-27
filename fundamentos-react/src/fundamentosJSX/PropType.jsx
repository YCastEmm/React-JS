/* 
    PropTypes es una característica de React que te permite especificar el tipo de datos que se espera que una prop tenga dentro de un componente de React. Es una forma de documentar y validar las props que se pasan a los componentes en una aplicación React.

    Se deben importar desde la biblioteca así: import PropTypes from 'prop-types';

    Y se definen así (notensé las mayusculas y minusculas para propTypes y PropTypes):

    MiComponente.propTypes = {
        nombre: PropTypes.string.isRequired,
        edad: PropTypes.number,
        estaActivo: PropTypes.bool.isRequired,
        onClick: PropTypes.func
    };
*/

import PropTypes from "prop-types";


let ButtonConProp = ({texto, programa = "Default", version = 1.0}) =>{
    return <button>{texto} - {programa} - {version}</button>
}

/* Agregando las llaves al prop, accedo directamente a la propiedad */
let TagConPropDestructurado = ({texto, programa, version}) =>{
    return <p>{texto} - {`${programa} ${version}`}</p>
}


ButtonConProp.propTypes = {
    texto: PropTypes.string.isRequired,
    programa: PropTypes.string,
    version: PropTypes.number
}


export let ElementoProp2 = () =>{
    return  <>
                <section className="seccion">
                    <ButtonConProp texto="Botón 1"></ButtonConProp>
                    <TagConPropDestructurado texto="Desestructuración" programa="React" version={2.3}></TagConPropDestructurado>
                </section>              
            </>
}