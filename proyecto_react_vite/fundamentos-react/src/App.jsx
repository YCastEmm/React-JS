import { PropTypes } from "prop-types";
import { version } from "react";

import UserLog from "./components/UserLog";
import BotonConsoleClick from "./components/MyButton";
import { ArrayConMap } from "./components/MapArray/ArrayMetodoMap";
import { TagConPropDestructurado } from "./components/TagPropType";
import ButtonState from "./components/ButtonState";

let frutas = ["🍅", "🍌", "🍍", "🍇"];
let fastFood = ["🌭", "🍟", "🍕", "🥓"];
let ReactVersion = version

let claseDiv = "div";
let claseSection = "seccion";
let classTitulo = "texto-centrado";

let titulo = "Componente App.jsx de React JS";

TagConPropDestructurado.propTypes = {
    texto: PropTypes.string.isRequired,
    programa: PropTypes.string,
    version: PropTypes.string,
};

ArrayConMap.propTypes = {
    array: PropTypes.array.isRequired,
    texto: PropTypes.string.isRequired,
};

let App = () => {
    return (
        <>
            <div className={claseDiv}>
                <h1 className={classTitulo}>{titulo}</h1>
                <UserLog></UserLog>
                <section className={claseSection}>
                    <BotonConsoleClick texto="Boton 1"></BotonConsoleClick>
                    <BotonConsoleClick texto="Boton 2"></BotonConsoleClick>
                    <BotonConsoleClick texto="Boton 3"></BotonConsoleClick>

                    {/* Tanto array como texto se pasan dentro de un mismo parámetro de prop, o sea, dentro de prop.array y dentro de prop.texto */}
                    <ArrayConMap array={frutas} texto="Listado de frutas" />
                    <ArrayConMap array={fastFood} texto="Listado de fastfood" />

                    <TagConPropDestructurado texto="Version de" programa="App de React JS" version={ReactVersion}></TagConPropDestructurado>
                </section>
                    <ButtonState></ButtonState>
            </div>
        </>
    );
};

export default App;
