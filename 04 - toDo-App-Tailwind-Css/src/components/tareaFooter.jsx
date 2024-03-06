let TareaFilter = () => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-5 rounded-md bg-white p-4 ">
                <button className="text-blue-600">Todos</button>
                <button className="hover:text-blue-600">Activos</button>
                <button className="hover:text-blue-600">Completados</button>
            </div>
        </section>
    );
};

export default TareaFilter;
