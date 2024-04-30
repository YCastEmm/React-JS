import { useState } from "react";
import { register } from "../config/firebase";
import {useRedirectActiveUser} from '../hooks/useRedirectActiveUser'
import { useUserContext } from "../context/UserContext";

const Register = () => {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let {user} = useUserContext()
    useRedirectActiveUser(user, "/dashboard")


    let handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            let credencialUser = await register({email, password});
            console.log(credencialUser);
        } catch (error) {
            console.log(error);
        }
    }

    return <>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Register</button>
                </form>
            </>
};

export default Register;
