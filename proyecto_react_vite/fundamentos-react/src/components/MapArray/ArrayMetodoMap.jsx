import ElementoLi from "./ElementoLi";


export let ArrayConMap = (propArray) => {
    // Deconstruyo el objeto prop para sacar el valor llamado "array"
    let {array} = propArray
    let {texto} = propArray
    return (
        
        <>
            <h3>{texto}</h3>
            <ul>
                {array.map((item, index) => (
                    <ElementoLi key={index} elemento={item}></ElementoLi>
                ))}
            </ul>            
        </>
    );
};
