import { useCallback, useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch"


// Saco la declaración de la función afuera y le paso el setPokemons como argumento (ya que no puede acceder por si sola porque está dentro del componente App)
let fetchData = async (setPokemons) =>{
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/")
    let data = await response.json()
    setPokemons(data.results) 
    console.log(data);
}


let App = () => {

    let [counter, setCounter] = useState(0);
    let [pokemons, setPokemons] = useState(null)



    // 2da alternativa: useCallback

    // useCallback es un hook que se utiliza para memoizar funciones en componentes funcionales. La memoización es un proceso de almacenar en caché el resultado de una función para evitar recálculos innecesarios.
    // Cuando se usa useCallback, le paso una función y una lista de dependencias. React memoiza la función y la devuelve. Si las dependencias cambian, React recrea la función memoizada; de lo contrario, devuelve la misma función memoizada, lo que puede mejorar el rendimiento al evitar la recreación de funciones en cada renderizado.

    // Definición de la función fetchData utilizando useCallback
    // let fetchData = useCallback(async () =>{
    //     let response = await fetch("https://pokeapi.co/api/v2/pokemon/")
    //     let data = await response.json()
    //     setPokemons(data.results) 
    // })


    /* El useEffect es un hook en React que permite realizar efectos secundarios en componentes funcionales. Estos efectos secundarios pueden ser acciones como el acceso a datos externos, manipulación del DOM, suscripciones a eventos y más.
    La función que pasas a useEffect se ejecutará después de cada renderizado del componente, a menos que especifiques una lista de dependencias. Si pasas una lista de dependencias como segundo argumento, useEffect solo se ejecutará si alguna de esas dependencias ha cambiado desde la última renderización. Esto es útil para evitar ejecutar efectos innecesariamente. */
    useEffect(() => {
         // Si yo saco la funcioón fuera del useEffect (para solo dejar su ejecución dentro) se va a declara la funcion cada vez que se actualice el componente. Por eso no se debe hacer y uso la alternativa de useCallback.
        // async function fetchData() {
        //     let response = await fetch("https://pokeapi.co/api/v2/pokemon/")
        //     let data = await response.json()
        //     setPokemons(data.results) 
        // }
        fetchData(setPokemons)
    }, []);

    let { datos, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users")


    if (pokemons === null) {
        return (<h4>Cargando...</h4>)
    }

    if (loading === true) {
        return (<h4>Cargando...</h4>)
    }


    return (
        <>
            <h1>useEffect dentro de App</h1>
            <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
            <ul>
                {
                    pokemons.map((pokemon, index) =>(
                        <li key={index}>
                            {pokemon.name} <a href={pokemon.url}>{pokemon.url}</a>
                        </li>
                    ))
                }
            </ul>

            <h1>useEffect con custom hook useFetch</h1>
            {error && <h1>{error}</h1>}
            <ul>
                {
                    datos.map((dato) =>(
                        <li key={dato.id}>
                            {dato.name}
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default App;
