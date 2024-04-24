import {useUserContext} from "../context/UserContext";

let Dashboard = () =>{

    let {user} = useUserContext()
    return <>
                <h2>Dashboard</h2>
                <h3>Bienvenido {user.name}</h3>
            </>
}

export default Dashboard