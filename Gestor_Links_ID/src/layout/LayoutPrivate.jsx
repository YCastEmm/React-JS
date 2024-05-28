import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

let LayoutPrivate = () => {
    let { user } = useUserContext();


    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);


    return (
        <>
            {user ? <Outlet /> : <Navigate to={"/"} />}
        </>
    );
};

export default LayoutPrivate;
