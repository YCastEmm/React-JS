import { NavLink } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import { logout } from "../config/firebase"



const Navbar = () =>{

    let {user} = useUserContext()

    
    let handleLogout = async () =>{
        try {
            await logout()
        } catch (error) {
            console.log(error);
        }
    }

    return <nav>
                {
                    user ?
                    <>
                        <NavLink to="/dashboard">Dashboard</NavLink>

                        <button onClick={handleLogout}>Logout</button>
                    </>
                    :
                    <>
                        <NavLink to="/">Inicio</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </>
                }
            </nav>
}

export default Navbar


