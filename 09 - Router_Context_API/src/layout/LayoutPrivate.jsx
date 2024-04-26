import { Outlet, useNavigate, Navigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";



let LayoutPrivate = () =>{

    let {user} = useUserContext()
    


    // A contiunación otra alternativa a el Navigate to="", hecha con useNavigate y useEffect. Si el usuario está en false, se redirige sí o sí al home.
    // let navigate = useNavigate()

    // useEffect(() =>{
    //     console.log(user);
    //     if (!user) {
    //         navigate("/")
            
    //     }
    // },[user])

    return user ? <Outlet></Outlet> : <Navigate to="/"/>

}

export default LayoutPrivate