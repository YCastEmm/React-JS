import TareaItem from "./tareaItem";

let TareaList = ({ tareasProp, borrarTareasProp, updateTareaProp }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white">
            {tareasProp.map((tarea) => (
                <TareaItem key={tarea.id} tareaProp={tarea} borrarTareasProp={borrarTareasProp} updateTareaProp={updateTareaProp}/>
            ))}
        </div>
    );
};

export default TareaList;
