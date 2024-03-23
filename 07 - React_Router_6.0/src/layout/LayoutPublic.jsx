import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

let LayoutPublic = () => {
    return (
        <div className="container">
            <h1>React Router 6.0</h1>
            <Navbar />

            <Outlet></Outlet>
            <footer>
                <h3>Este el footer</h3>
            </footer>
        </div>
    );
};

export default LayoutPublic;
