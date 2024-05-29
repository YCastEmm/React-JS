import { createBrowserRouter } from "react-router-dom";
import  LayoutRoot  from "../layout/LayoutRoot";
import  Home  from "../pages/Home";
import  Dashboard  from "../pages/Dashboard";
import  LayoutPrivate from "../layout/LayoutPrivate";
import Instructivos from "../pages/Instructivos";


export let router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutRoot></LayoutRoot>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/dashboard",
                element: <LayoutPrivate />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    }
                ],
            },
            {
                path: "/instructivos",
                element: <LayoutPrivate />,
                children: [            
                    {   
                        index: true,
                        element: <Instructivos />
                    }
                ],
            },
        ],
    },
]);
