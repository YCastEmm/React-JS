/* El código JSX parece HTML pero no lo es, es en realidad JavaScript + XML*/

let App = () =>{
    return <h1>Hola soy React.JS</h1>
}

export let seccion = ()=>{
    return  <div>
                <p>dos elementos de react dentro de un div</p>
                <img src="https://picsum.photos/300/300" alt="" />
            </div>
}

export default App