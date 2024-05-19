import { useEffect, useState } from "react";
import { login } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { Formik } from "formik";
import * as Yup from 'yup'

const Login = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let navigate = useNavigate();
    let { user } = useUserContext();

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user]);

    let onSubmit = async ({ email, password }) => {
        console.log({ email, password });
        try {
            let credencialUser = await login({ email, password });
            console.log(credencialUser);
        } catch (error) {
            console.log(error);
        }
    };

    let validationSchema = Yup.object().shape({
        email: Yup.string().email("Email no válido").required("Email requerido"),
        password: Yup.string().trim().min(6, "Mínimo 6 caracteres").required("Password requerido")
    })



    return <>
        <h2>Login</h2>

        {/* Formik es una librería y un componente que ayuda a manejar el estado del formulario y su validación */
        // Formik es un componente que ayuda a manejar el estado del formulario y su validación */
        // initialValues, handleSubmit y handleChange son props específicas de Formik que se utilizan para inicializar el estado del formulario, manejar el envío del formulario y actualizar el estado del formulario cuando los usuarios interactúan con él, respectivamente.

        // initialValues: Esta prop se utiliza para definir los valores iniciales de los campos del formulario. Es un objeto que contiene pares clave-valor donde las claves son los nombres de los campos del formulario y los valores son los valores iniciales de esos campos.
        
        // handleSubmit: Esta prop es una función proporcionada por Formik que se llama cuando se envía el formulario. Se encarga de manejar la lógica de envío del formulario, como enviar datos al servidor o realizar acciones adicionales después del envío.
        
        // handleChange: Esta prop es una función proporcionada por Formik que se utiliza para manejar los cambios en los campos del formulario. Se llama automáticamente cada vez que el usuario escribe en un campo del formulario y actualiza el estado interno del formulario con los nuevos valores.
        }
        
        <Formik
            // initialValues define los valores iniciales del formulario
            initialValues={{ email: "", password: "" }}
            // onSubmit define la función a ejecutar al enviar el formulario
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                // Formik utiliza el patrón de render props para pasar funciones y estado del formulario
                ({ values, handleSubmit, handleChange, errors, touched, handleBlur}) => (
                    // handleSubmit es una función proporcionada por Formik que maneja el envío del formulario
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            // values.email obtiene el valor actual del campo email del estado del formulario manejado por Formik
                            value={values.email}
                            // handleChange es una función de Formik que actualiza el estado del formulario cuando el usuario escribe
                            onChange={handleChange}
                            // El atributo name es crucial para que Formik sepa qué campo del formulario está siendo actualizado
                            name="email"
                            onBlur={handleBlur}
                        />
                        {
                            errors.email && touched.email && errors.email
                        }
                        <input
                            type="text"
                            value={values.password}
                            onChange={handleChange}
                            name="password"
                            onBlur={handleBlur}
                        />
                        {
                            password.email && touched.password && password.email
                        }
                        <button type="submit">Login</button>
                    </form>
                )
            }
        </Formik>
    </>;
};

export default Login;
