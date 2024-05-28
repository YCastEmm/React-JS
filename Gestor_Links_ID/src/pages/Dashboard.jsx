import Card from "../components/Card"
import { useUserContext } from "../context/UserContext"

let Dashboard = () =>{

    let {user} = useUserContext()

    return <main className="container mx-auto">
                <h2>Dashboard</h2>
                <h3>Bienvenido {user.displayName}</h3>
                {user.email === "yair.castagnola@gmail.com" ?  <h1>Taras para Yair</h1> : <h1>Tareas para X28</h1>}
                <Card></Card>
            </main>
}

export default Dashboard