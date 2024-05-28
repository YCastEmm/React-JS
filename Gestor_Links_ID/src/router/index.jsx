import { createBrowserRouter } from "react-router-dom";
import  LayoutRoot  from "../layout/LayoutRoot";
import  Home  from "../pages/Home";
import  Dashboard  from "../pages/Dashboard";
import  LayoutPrivate from "../layout/LayoutPrivate";


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
                    },
                ],
            },
        ],
    },
]);
