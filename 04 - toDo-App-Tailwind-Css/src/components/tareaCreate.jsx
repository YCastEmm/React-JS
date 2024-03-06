let TareaCreate = () => {
    return (
        <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-5 py-4">
            <span className="block h-5 w-5 rounded-full border-2"></span>
            <input className="w-full text-gray-500 outline-none" type="text" placeholder="Crear una nueva tarea..." />
        </form>
    );
};

export default TareaCreate