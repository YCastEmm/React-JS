let frutas = ["🍅", "🍌", "🍍", "🍇"];

/* Se recorre un array con el método map */ 
/* El li tiene una prop llamada key con la cual se indica el orden */ 
/* 
    En React, la propiedad key es un atributo especial que se utiliza para identificar de manera única elementos hijos cuando se están creando listas de elementos o componentes dinámicos.

    Cuando React renderiza una lista de elementos, necesita una manera eficiente de identificar cada elemento individualmente. La propiedad key proporciona a React una pista sobre qué elementos han cambiado, se han agregado o eliminado. Esto es crucial para el rendimiento y la eficiencia de las operaciones de actualización del DOM.

    La propiedad key debe ser única dentro del contexto de su lista. No es necesario que sea globalmente único, pero sí dentro de su ámbito inmediato. No se recomienda usar índices de matrices como claves, ya que esto puede llevar a comportamientos inesperados en ciertas situaciones de actualización.
*/ 


let ElementoLi = ({fruta}) =>{
    return <li>{fruta}</li>
}


export let ArrayDeFrutas = () => {
    return (
        <>
            <div className="seccion">
                <ul>
                    {frutas.map((fruit, index) => (
                        <ElementoLi key={index} fruta={fruit}></ElementoLi>
                    ))}
                </ul>
            </div>            
        </>
    );
};
