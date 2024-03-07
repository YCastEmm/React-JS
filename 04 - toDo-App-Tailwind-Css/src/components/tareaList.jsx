import TareaItem from "./tareaItem";

let TareaList = ({ tareasProp, borrarTareasProp }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white">
            {tareasProp.map((tarea) => (
                <TareaItem key={tarea.id} tareaProp={tarea} borrarTareasProp={borrarTareasProp} />
            ))}
        </div>
    );
};

export default TareaList;
