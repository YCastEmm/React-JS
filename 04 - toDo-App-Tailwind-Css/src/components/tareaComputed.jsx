let TareaComputed = ({contarTareasProp, borrarCompletadasProp}) => {
    console.log(contarTareasProp);
    return (
        <section className="flex justify-between rounded-b-md bg-white px-5 py-4">
            <span className="text-gray-400">{`${contarTareasProp} tareas abiertas`}</span>
            <button onClick={borrarCompletadasProp} className="text-gray-400">Limpiar completadas</button>
        </section>
    );
};


export default TareaComputed