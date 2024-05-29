import { useEffect, useState } from "react";
import { login } from "../config/firebase";
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext";

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

    return <>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
            </>
};

export default Login;
