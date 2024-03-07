import { useState } from "react";
import { IconoClose } from "./icons/closeIcon";
import { IconCheck } from "./icons/iconCheck";

let TareaItem = ({ tareaProp, borrarTareasProp, updateTareaProp }) => {
    let { title } = tareaProp;
    let { id } = tareaProp;
    let { completed } = tareaProp;


    let classButtonActive = "bg-gradient-to-r from-violet-500 to-fuchsia-500 justify-center items-center"

    return (
        <article className="flex items-center gap-4 border-b border-b-gray-200 px-5 py-4">
            <button
                onClick={() => {
                    updateTareaProp(id);
                }}
                className={`flex h-7 w-7 flex-none rounded-full border-2  ${completed === true && classButtonActive}`}>
                {completed === true ? <IconCheck /> : ""}
            </button>
            <p className={`grow text-gray-500 ${completed === true ? "line-through" : ""}`}>{title}</p>
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
};

export default TareaItem;
