import { useState } from "react";

export let UpdateYear = () => {
    const planetas = [
        "Mercurio",
        "Venus",
        "Tierra",
        "Marte",
        "Júpiter",
        "Saturno",
        "Urano",
        "Neptuno",
        "Plutón", // Aunque ya no es considerado un planeta por la Unión Astronómica Internacional
    ];

    let [indice, setIndice] = useState(0);

    let [parametro, setParametro] = useState({ year: 2023, planet: planetas[indice]});


    // Utilizo el operador de propagación (spread operator) al actualizar el objeto de estado para garantizar que conservo las propiedades no modificadas. Esto me permite mantener las propiedades existentes y solo actualizar la que deseo cambiar, evitando así la pérdida de datos.

    let handleClic = () => {
        setParametro({ ...parametro, year: parametro.year + 1 });
    };

    // Utilizo el operador de propagación (spread operator) al actualizar el objeto de estado para garantizar que conservo las propiedades no modificadas. Esto me permite mantener las propiedades existentes y solo actualizar la que deseo cambiar, evitando así la pérdida de datos.
    let handleClic2 = () => {
        setIndice((indice + 1) % planetas.length); // Asegura que el índice esté dentro de los límites del array
        setParametro({ ...parametro, planet: planetas[(indice + 1) % planetas.length] });
    };

    return (
        <>
            <h2>
                El planeta es: {parametro.planet} - el año es: {parametro.year}
            </h2>
            <button onClick={handleClic} className="btn btn-primary d-block">
                Update year
            </button>
            <button onClick={handleClic2} className="btn btn-primary d-block mt-2">
                Update planet
            </button>
        </>
    );
};
