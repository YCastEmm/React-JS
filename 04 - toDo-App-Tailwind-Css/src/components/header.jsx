import { MoonIcon } from "./icons/moonIcon";

let Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">Tareas</h1>
                <button>
                    <MoonIcon fill="#fff" />
                </button>
            </div> 
        </header>
    );
};


export default Header