import { useState } from "react";

let TareaCreate = ({ nuevaTareaProp }) => {
    let [title, setTitle] = useState("");

    let handleSubmitAddTarea = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return setTitle(""); // Con el return evito que siga ejecutandose lo de abajo. Sería como poner el resto de las acciones en el else
        }
        nuevaTareaProp(title);
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmitAddTarea} className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-5 py-4">
            <span className="block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-500 outline-none"
                type="text"
                placeholder="Crear una nueva tarea..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TareaCreate;
