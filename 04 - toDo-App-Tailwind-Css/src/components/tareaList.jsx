import TareaItem from "./tareaItem";

let TareaList = ({ tareasProp, borrarTareasProp, updateTareaProp }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white dark:bg-gray-800 transition-all duration-300">
            {tareasProp.map((tarea) => (
                <TareaItem key={tarea.id} tareaProp={tarea} borrarTareasProp={borrarTareasProp} updateTareaProp={updateTareaProp} />
            ))}
        </div>
    );
};

export default TareaList;
