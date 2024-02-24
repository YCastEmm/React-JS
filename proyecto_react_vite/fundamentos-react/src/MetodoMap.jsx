let frutas = ["🍅", "🍌", "🍍", "🍇"];

/* Se recorre un array con el método map */ 
/* El li tiene una prop llamada key con la cual se indica el orden */ 

export let ArrayDeFrutas = () => {
    return (
        <>
            <div className="seccion">
                <ul>
                    {frutas.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
            </div>            
        </>
    );
};
