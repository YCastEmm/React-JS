import { IconoClose } from "./icons/closeIcon";


let TareaItem = () => {
    return (
        <article className="flex items-center gap-4 border-b border-b-gray-200 px-5 py-4">
            <button className="block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-500">Completar curso de JavaScript</p>
            <button className="flex-none">
                <IconoClose />
            </button>
        </article>
    );
};

export default TareaItem;
