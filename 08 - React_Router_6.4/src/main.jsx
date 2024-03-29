import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { router } from "./router/index.jsx";

// Importa el proveedor de enrutador de react-router-dom
import { RouterProvider } from "react-router-dom";

// Renderiza el componente principal de la aplicación dentro de un proveedor de enrutador
// El proveedor de enrutador facilita el acceso a las funcionalidades de enrutamiento en toda la aplicación
// Proporciona el enrutador definido previamente como una propiedad al proveedor de enrutador
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
