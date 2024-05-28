import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { auth } from "../config/firebase";
import { useState } from "react";
import Avatar from "./Avatar";

let Navbar = () => {
    let { user, setUser } = useUserContext();
    let [loggingOut, setLoggingOut] = useState(false);

    let handleLogOut = async () => {
        try {
            setLoggingOut(true);
            await auth.signOut();
            setUser(null);
        } catch (error) {
            console.log("Error al cerrar sesión: " + error);
        } finally {
            setLoggingOut(false);
        }
    };

    return (
        <header>
            <nav className="flex align-middle justify-around p-2 text-white">
                <Avatar></Avatar>
                <NavLink to="/">Home</NavLink>
                {user && (
                    <>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <button onClick={handleLogOut}>{loggingOut ? "Cerrando sesión..." : "Cerrar sesión"}</button>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
