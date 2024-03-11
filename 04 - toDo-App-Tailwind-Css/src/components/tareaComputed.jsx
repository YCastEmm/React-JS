let TareaComputed = ({contarTareasProp, borrarCompletadasProp}) => {
    console.log(contarTareasProp);
    return (
        <section className="flex justify-between rounded-b-md bg-white px-5 py-4 dark:bg-gray-800 transition-all duration-300">
            <span className="text-gray-400 dark:text-gray-300 ">{`${contarTareasProp} tareas abiertas`}</span>
            <button onClick={borrarCompletadasProp} className="text-gray-400 dark:text-gray-300 ">Limpiar completadas</button>
        </section>
    );
};


export default TareaComputed