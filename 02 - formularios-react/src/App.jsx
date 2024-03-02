import { NoControlado } from "./components/no-controlado";
import { Controlado } from "./components/controlado";
import { UseState } from "./components/useState";
import ListaElementos from "./components/practicaUseState";
import {UpdateYear} from "./components/updateYear";


let App = () => {
    return (
        <div className="container">
            {/* <h1 className="mt-4">Formulario No Controlado</h1>
            <NoControlado></NoControlado> */}
            <h1 className="mt-4">Formulario Controlado</h1>
            <Controlado></Controlado>
            <div className="d-flex">
                <UseState></UseState>
                <ListaElementos />
            </div>
            <UpdateYear></UpdateYear>
        </div>
    );
};

export default App;
