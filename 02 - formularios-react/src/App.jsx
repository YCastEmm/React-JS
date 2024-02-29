import { NoControlado } from "./components/no-controlado";
import { Controlado } from "./components/controlado";
import { UseState } from "./components/useState";
import ListaElementos from "./components/practicaUseState";


let App = () => {
    return (
        <div className="container">
            {/* <h1 className="mt-4">Formulario No Controlado</h1>
            <NoControlado></NoControlado> */}
            <h1 className="mt-4">Formulario Controlado</h1>
            <Controlado></Controlado>
            <UseState></UseState>
            <ListaElementos />
        </div>
    );
};

export default App;
