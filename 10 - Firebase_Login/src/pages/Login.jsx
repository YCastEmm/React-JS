import { useState } from "react";
import { login } from "../config/firebase";

const Login = () => {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

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
                <form onSubmit={handleSubmit}>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
            </>
};

export default Login;
