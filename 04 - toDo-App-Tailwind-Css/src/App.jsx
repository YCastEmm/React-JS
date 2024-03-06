import { IconoClose } from "./components/icons/closeIcon";
import { MoonIcon } from "./components/icons/moonIcon";


let App = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
                <header className="container mx-auto px-4 pt-8">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">Tareas</h1>
                        <button><MoonIcon fill="#fff" /></button>
                    </div>
                    <form className="mt-6 flex items-center gap-4 overflow-hidden rounded-md bg-white px-5 py-4">
                        <span className="block h-5 w-5 rounded-full border-2"></span>
                        <input className="w-full text-gray-500 outline-none" type="text" placeholder="Crear una nueva tarea..." />
                    </form>
                </header>

                <main className="container mx-auto mt-4 px-4">
                    <div className="rounded-md bg-white">
                        <article className="flex items-center gap-4 border-b border-b-gray-300 px-5 py-4">
                            <button className="block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-500">Completar curso de JavaScript</p>
                            <button className="flex-none">
                                <IconoClose />
                            </button>
                        </article>
                        <article className="flex items-center gap-4 border-b border-b-gray-300 px-5 py-4">
                            <button className="block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-500">Completar curso de JavaScript</p>
                            <button className="flex-none">
                                <IconoClose />
                            </button>
                        </article>
                        <article className="flex items-center gap-4 border-b border-b-gray-300 px-5 py-4">
                            <button className="block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-500">Completar curso de JavaScript</p>
                            <button className="flex-none">
                                <IconoClose />
                            </button>
                        </article>
                        <article className="flex items-center gap-4 border-b border-b-gray-300 px-5 py-4">
                            <button className="block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-500">Completar curso de JavaScript</p>
                            <button className="flex-none">
                                <IconoClose />
                            </button>
                        </article>

                        <section className="flex justify-between px-5 py-4">
                            <span className="text-gray-400">5 items restantes</span>
                            <button className="text-gray-400">Limpiar completadas</button>
                        </section>
                    </div>
                </main>

                <section className="container mx-auto mt-8 px-4">
                    <div className="flex gap-5 justify-center rounded-md p-4 bg-white ">
                        <button className="text-blue-600">Todos</button>
                        <button className="hover:text-blue-600">Activos</button>
                        <button className="hover:text-blue-600">Completados</button>
                    </div>
                </section>

                <section className="text-center mt-8 text-gray-400">Drag and drop para ordenar</section>

                <footer></footer>
            </div>
        </>
    );
};

export default App;
