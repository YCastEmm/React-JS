import React from "react";
import ReactDOM from "react-dom/client"; 
import "./index.css";
import { router } from "./routes/index.jsx"; 
import { RouterProvider } from "react-router-dom"; 
import UserProvider  from "./context/UserContext.jsx";

// RouterProvider: Este componente es proporcionado por react-router-dom y se utiliza para proveer el enrutador a toda la aplicación. Permite que los componentes de la aplicación accedan al enrutador y utilicen su funcionalidad de enrutamiento.

// El prop "router": Es un prop que se utiliza para pasar el enrutador a RouterProvider. En este caso, estamos pasando el enrutador que hemos definido anteriormente en el archivo de rutas (./routes/index.jsx). Esto permite que RouterProvider tenga acceso al enrutador y pueda utilizarlo para manejar la navegación en nuestra aplicación.


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserProvider>
            {/* Utilizo RouterProvider para proveer el enrutador a toda mi aplicación */}
            {/* El prop "router" es utilizado para pasar el enrutador que he definido */}
            <RouterProvider router={router} />
        </UserProvider>
    </React.StrictMode>
);
