import TareaItem from "./tareaItem";

let TareaList = ({ tareasProp }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white">
            {tareasProp.map((tarea) => (
                <TareaItem key={tarea.id} tareaProp={tarea} />
            ))}
        </div>
    );
};

export default TareaList;
