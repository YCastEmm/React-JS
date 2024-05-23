import { useEffect, useState } from "react";
import { login } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { Formik } from "formik"; // Importa el componente Formik de la librería Formik
import * as Yup from 'yup'; // Importa Yup para la validación de esquema
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { LoadingButton } from "@mui/lab";

const Login = () => {


    let navigate = useNavigate(); // Hook de navegación de React Router
    let { user } = useUserContext(); // Obtiene el usuario del contexto de usuario

    useEffect(() => {
        if (user) {
            navigate('/dashboard'); // Redirige a la página de dashboard si el usuario ya ha iniciado sesión
        }
    }, [user]);

    let onSubmit = async ({ email, password }, { setSubmitting, setErrors, resetForm }) => {
        console.log({ email, password });
        try {
            let credencialUser = await login({ email, password }); // Intenta iniciar sesión con las credenciales proporcionadas
            console.log(credencialUser);
            resetForm(); // Reinicia el formulario después de un inicio de sesión exitoso
        } catch (error) {
            console.log(error.message);
            if (error.code === "auth/invalid-login-credentials") {
                return setErrors({ email: "El usuario no existe" }); // Establece un error en el campo de correo electrónico si las credenciales son inválidas
            }
            if (error.code === "auth/invalid-login-credentials") {
                return setErrors({ password: "La contraseña es incorrecta" }); // Establece un error en el campo de contraseña si las credenciales son inválidas
            }

        }
        finally {
            setSubmitting(false); // Establece el estado de envío del formulario como falso después de la finalización de la operación de inicio de sesión
        }
    };

    let validationSchema = Yup.object().shape({
        email: Yup.string().email("Email no válido").required("Email requerido"), // Define la validación del campo de correo electrónico
        password: Yup.string().trim().min(6, "Mínimo 6 caracteres").required("Password requerido") // Define la validación del campo de contraseña
    });

    return (
        <Box sx={{mt: "1rem", maxWidth:"400px", mx:"auto", textAlign:"center"}}>
             <Avatar>
                <PermIdentityIcon></PermIdentityIcon>
            </Avatar>
            
            <Typography variant="h5" component="h1" sx={{textAlign:"left", my:"24px"}}>
                Login
            </Typography>

            

            {/* Formik es una librería y un componente que ayuda a manejar el estado del formulario y su validación */}
            {/* initialValues, handleSubmit y handleChange son props específicas de Formik que se utilizan para inicializar el estado del formulario, manejar el envío del formulario y actualizar el estado del formulario cuando los usuarios interactúan con él, respectivamente. */}

            {/* initialValues: Esta prop se utiliza para definir los valores iniciales de los campos del formulario. Es un objeto que contiene pares clave-valor donde las claves son los nombres de los campos del formulario y los valores son los valores iniciales de esos campos. */}
            
            {/* onSubmit: Esta prop define la función a ejecutar al enviar el formulario. Define la lógica de manejo de envío del formulario, incluido el envío de datos al servidor o la realización de acciones adicionales después del envío. */}
            
            {/* handleChange: Esta prop es una función proporcionada por Formik que se utiliza para manejar los cambios en los campos del formulario. Se llama automáticamente cada vez que el usuario escribe en un campo del formulario y actualiza el estado interno del formulario con los nuevos valores. */}
            
           


            <Formik
                initialValues={{ email: "", password: "" }} // Define los valores iniciales de los campos del formulario
                onSubmit={onSubmit} // Define la función a ejecutar al enviar el formulario
                validationSchema={validationSchema} // Define el esquema de validación del formulario
            >
                {
                    // Formik utiliza el patrón de render props para pasar funciones y estado del formulario
                    ({ values, handleSubmit, handleChange, errors, touched, handleBlur, isSubmitting }) => (
                        // handleSubmit es una función proporcionada por Formik que maneja el envío del formulario
                        <Box sx={{mt:"1"}} component="form"
                        onSubmit={handleSubmit}>


                            <TextField
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                name="email"
                                onBlur={handleBlur}
                                id="email"
                                label="Ingrese su email"
                                fullWidth
                                sx={{mb:"24px"}}
                                error={errors.email && touched.email}
                                helperText={errors.email && touched.email && errors.email} //Muestra el mensaje de error del campo de correo electrónico si es tocado y hay un error 
                                >
                            </TextField>

                            <TextField 
                                type="password" // Cambiado a type="password" para ocultar la entrada de la contraseña
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                                onBlur={handleBlur}
                                id="password"
                                label="Ingrese su contraseña"
                                fullWidth
                                sx={{mb:"24px"}}
                                error={errors.password && touched.password}
                                helperText={errors.password && touched.password && errors.password} //Muestra el mensaje de error del campo de contraseña si es tocado y hay un error
                            />

                            <LoadingButton variant="contained" type="submit" loading={isSubmitting} disabled={isSubmitting} fullWidth sx={{mb:"14px"}}>Acceder</LoadingButton>
                            <Button
                                fullWidth
                                component={Link}
                                to="/Register"
                                variant="outlined"
                            >
                                Registrarse
                              
                            </Button>
                        </Box>
                    )
                }
            </Formik>
        </Box>
    );
};

export default Login;
