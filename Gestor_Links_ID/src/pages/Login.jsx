import React from "react";
import { loginWithGoogle } from "../config/firebase"; // Asegúrate de que la ruta sea correcta
import {useUserContext} from '../context/UserContext'
import { useNavigate } from "react-router-dom";


const Login = () => {

    let {setUser} = useUserContext()
    let navigate = useNavigate()
        

    const handleGoogleLogin = async () => {
        try {
            const { user, token, error } = await loginWithGoogle();
            if (error) {
                console.error("Error al iniciar sesión con Google:", error);
            } else {
                console.log("Usuario autenticado:", user);
                // Aquí puedes redirigir al usuario a otra parte de tu aplicación o manejar la autenticación exitosa
                setUser(user)
                navigate("/dashboard")
            }
        } catch (error) {
            console.error("Error inesperado al iniciar sesión con Google:", error);
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar sesión</h2>
            <button onClick={handleGoogleLogin} className="google-login-button">
                Iniciar sesión con Google
            </button>
        </div>
    );
};

export default Login;
