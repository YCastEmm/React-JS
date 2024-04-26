import { useState } from "react";

const Login = () => {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email);
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
