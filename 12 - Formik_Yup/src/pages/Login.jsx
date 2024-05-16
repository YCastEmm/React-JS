import { useEffect, useState } from "react";
import { login } from "../config/firebase";
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext";
import { Formik } from "formik"

const Login = () => {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let navigate = useNavigate()
    let {user} = useUserContext()

    useEffect(() =>{
        if(user){
            navigate('/dashboard')
        }
    },[user])

    let handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            let credencialUser = await login({email, password});
            console.log(credencialUser);
        } catch (error) {
            console.log(error);
        }
    }

    let onSubmit = async (values) =>{

    }

    return <>
                <h2>Login</h2>

                <Formik 
                    initialValues={{email: "", password: ""}}
                    onSubmit={onSubmit}
                >
                    {
                        (values, handleSubmit, onChange) =>(
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={values.email}
                                    onChange={onChange} />
                                <input
                                    type="text"
                                    value={values.password}
                                    onChange={onChange} />
                                <button type="submit">Login</button>
                            </form>
                        )
                    }
                </Formik>
            </>
};

export default Login;
