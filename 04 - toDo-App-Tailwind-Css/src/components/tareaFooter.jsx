let TareaFilter = ({changeFilterProp, filterProp}) => {
    console.log(filterProp);
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-5 rounded-md bg-white p-4  dark:bg-gray-800 transition-all duration-300">
                <button className={filterProp === "all" ? "text-blue-600" : "text-gray-500 dark:text-gray-300  hover:text-blue-500"} onClick={() => changeFilterProp("all")}>Todos</button>
                <button className={filterProp === "active" ? "text-blue-600" : "text-gray-500 dark:text-gray-300  hover:text-blue-500"} onClick={() => changeFilterProp("active")}>Activos</button>
                <button className={filterProp === "completed" ? "text-blue-600" : "text-gray-500 dark:text-gray-300  hover:text-blue-500"} onClick={() => changeFilterProp("completed")}>Completados</button>
            </div>
        </section>
    );
};

export default TareaFilter;
