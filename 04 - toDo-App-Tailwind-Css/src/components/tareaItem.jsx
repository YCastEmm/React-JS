import { useState } from "react";
import { IconoClose } from "./icons/closeIcon";


let TareaItem = ({tareaProp, borrarTareasProp}) => {
    let {title} = tareaProp
    let {id} = tareaProp
    let {completed} = tareaProp

    let [state, setState] = useState(completed)

    let alternarTarea = () =>{
        state === true ? setState(false) : setState(true)
    }
    console.log(state);
    console.log(completed);


    return (
        <article className="flex items-center gap-4 border-b border-b-gray-200 px-5 py-4">
            <button onClick={() =>{alternarTarea()}} className="block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className={`grow text-gray-500 ${state === true ? "line-through" : ""}`}>{title}</p>
            <button onClick={() => {borrarTareasProp(id)}} className="flex-none">
                <IconoClose />
            </button>
        </article>
    );
};

export default TareaItem;
