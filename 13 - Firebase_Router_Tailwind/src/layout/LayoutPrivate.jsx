import { Navigate, Outlet } from "react-router-dom"
import { useUserContext } from "../context/UserContext"


const LayoutPrivate = () =>{

    let {user} = useUserContext()

    return  user ?  <Outlet></Outlet> : <Navigate to="/"></Navigate>
}

export default LayoutPrivate