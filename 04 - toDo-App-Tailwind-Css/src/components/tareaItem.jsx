import { IconoClose } from "./icons/closeIcon";
import { IconCheck } from "./icons/iconCheck";
import React from "react";

let TareaItem = React.forwardRef(({ tareaProp, borrarTareasProp, updateTareaProp, ...props }, ref) => {
    let { title } = tareaProp;
    let { id } = tareaProp;
    let { completed } = tareaProp;

    let classButtonActive = "bg-gradient-to-r from-violet-500 to-fuchsia-500 justify-center items-center";

    return (
        <article {...props} ref={ref} className="flex items-center gap-4 border-b border-b-gray-200 dark:border-b-gray-500 px-5 py-4">
            <button onClick={() => { updateTareaProp(id); }} className={`flex h-7 w-7 flex-none rounded-full border-2 ${completed === true && classButtonActive}`} > {completed === true ? <IconCheck /> : ""} </button>
            <p className={`grow text-gray-500 dark:text-gray-300 ${completed === true ? "line-through" : ""}`}>{title}</p>
            <button
                onClick={() => {
                    borrarTareasProp(id);
                }}
                className="flex-none"
>
                <IconoClose />
            </button>
        </article>
    );
})

export default TareaItem;
