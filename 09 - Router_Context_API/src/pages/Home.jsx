import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";


let Home = () => {
    let {setUser} = useUserContext()
    let navigate = useNavigate()

    let handleLogin = () =>{
        setUser({
            name: "Yair",
            password: "1234"

        })
        navigate("/dashboard")
    }


    return (
        <>
            <h2>Home</h2>
            <button onClick={handleLogin}>Login</button>
        </>
    );
};

export default Home;
