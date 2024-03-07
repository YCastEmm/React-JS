let TareaComputed = ({contarTareasProp}) => {
    console.log(contarTareasProp);
    return (
        <section className="flex justify-between rounded-b-md bg-white px-5 py-4">
            <span className="text-gray-400">{`${contarTareasProp} items restantes`}</span>
            <button className="text-gray-400">Limpiar completadas</button>
        </section>
    );
};


export default TareaComputed